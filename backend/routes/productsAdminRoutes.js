const express = require("express");
const Product = require("../models/Product");
const { Protect, admin } = require("../middlewares/authMiddleware");
const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access Private/admin
router.post("/", Protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the admin user who created the product
    });

    const createdProduct = await product.save();
    console.log("Created Product:", createdProduct);

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error", error: error.message });
  }
});

// @route GET /api/admin/products
// desc Get all products (Admin only)
// @access Private/Admin
router.get("/", Protect, admin, async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
