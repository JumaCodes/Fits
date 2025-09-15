const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { Protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Helper function to get a cart by user ID or guest ID
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId }); // ✅ fixed field
  }
  return null;
};

// @route POST /api/cart
router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await getCart(userId, guestId);

    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0]?.url || "",
          size,
          color,
          quantity,
          price: product.price, // ✅ ensure price is saved
        });
      }

      // Recalc total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + (item.price ?? product.price) * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        user: userId || undefined,
        guestId: guestId || "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0]?.url || "",
            size,
            color,
            quantity,
            price: product.price, // ✅ include here
          },
        ],
        totalPrice: product.price * quantity,
      });

      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT /api/cart
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId, clearCart } = req.body;

  try {
    // ✅ Handle clear cart first
    if (clearCart && (userId || guestId)) {
      let cart = await getCart(userId, guestId);
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      cart.products = [];
      cart.totalPrice = 0;

      await cart.save();
      return res.status(200).json(cart);
    }

    // 🚨 Don’t block here if clearCart is true
    if (!productId || (!userId && !guestId)) {
      return res
        .status(400)
        .json({ error: "Missing productId and userId/guestId" });
    }

    // ✅ Normal update logic
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;

        if (!cart.products[productIndex].price) {
          const product = await Product.findById(productId);
          cart.products[productIndex].price = product.price;
        }
      } else {
        cart.products.splice(productIndex, 1);
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + (item.price || 0) * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete("/", async (req, res) => {
  const { productId, size, color, guestId, userId } = req.body;

  if (!productId || (!userId && !guestId)) {
    return res
      .status(400)
      .json({ error: "Missing productId and userId/guestId" });
  }

  try {
    let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);

      // Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + (item.price || 0) * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/cart
// desc Get logged-in user's or guest user's cart
// @access public
router.get("/", async (req, res) => {
  const { guestId, userId } = req.query;

  if (!userId || !guestId) {
    return res.status(400).json({ error: "Missing userId or guestId" });
  }

  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/cart/merge
// @desc Merge guest cart with user cart on login
// @access Public
router.post("/merge", Protect, async (req, res) => {
  const { guestId } = req.body;

  if (!guestId) {
    return res.status(400).json({ error: "Missing guestId" });
  }

  try {
    //   Find the guest and user cart
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }

      if (userCart) {
        // Merge guest cart into user cart
        guestCart.products.forEach((guestItem) => {
          // Check if the item already exists in the user cart
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size &&
              item.color === guestItem.color
          );

          if (productIndex > -1) {
            // If the items exists in the user cart, update the quantity
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            // otherwise, add the guest item to the cart
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        await userCart.save();

        // Remove the guest cart after merging
        try {
          await Cart.findOneAndDelete({ guestId });
          console.log("Guest cart deleted successfully");
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }

        res.status(200).json(userCart);
      } else {
        // If the user has no existing cart, assign the guest cart to the user
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();
        res.status(201).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }
      return res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.error("Error merging carts:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
