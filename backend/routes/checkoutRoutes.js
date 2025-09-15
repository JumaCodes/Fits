const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const { Protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", Protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod } = req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(400).json({ message: "No items in checkout" });
  }

  try {
    // ✅ Calculate total price from checkoutItems
    const calculatedTotal = checkoutItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);

    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkoutItems,
      shippingAddress,
      paymentMethod,
      totalPrice: calculatedTotal, // ✅ backend-calculated total
      paymentStatus: "Pending",
      isPaid: false,
      isFinalized: false,
    });

    console.log("Checkout created for user:", req.user._id);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
router.put("/:id/pay", Protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkoutDoc = await Checkout.findById(req.params.id);

    if (!checkoutDoc) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus && paymentStatus.toLowerCase() === "paid") {
      checkoutDoc.isPaid = true;
      checkoutDoc.paymentStatus = "Paid"; // ✅ normalized
      checkoutDoc.paymentDetails = paymentDetails;
      checkoutDoc.paidAt = Date.now();

      await checkoutDoc.save();

      return res.status(200).json(checkoutDoc);
    } else {
      return res.status(400).json({ message: "Invalid Payment Status" });
    }
  } catch (error) {
    console.error("Error updating checkout:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and create an order
// @access Private
router.post("/:id/finalize", Protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (checkout.isPaid && !checkout.isFinalized) {
      // ✅ Recalculate total for safety
      const calculatedTotal = checkout.checkoutItems.reduce((acc, item) => {
        return acc + item.price * (item.quantity || 1);
      }, 0);

      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkoutItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity || 1,
          size: item.size,
          color: item.color,
        })),
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: calculatedTotal, // ✅ always backend calculated
        isPaid: checkout.isPaid,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: checkout.paymentStatus,
        paymentDetails: checkout.paymentDetails,
      });

      console.log("Order created from checkout:", finalOrder._id);

      // Finalize checkout
      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();

      // Delete cart after order is created
      await Cart.findOneAndDelete({ user: checkout.user });

      return res.status(201).json(finalOrder);
    } else if (checkout.isFinalized) {
      return res.status(400).json({ message: "Checkout already finalized" });
    } else {
      return res.status(400).json({ message: "Checkout is not paid yet" });
    }
  } catch (error) {
    console.error("Error finalizing checkout:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
