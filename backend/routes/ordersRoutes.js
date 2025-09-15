const express = require("express");
const Order = require("../models/Order");
const { Protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route GET /api/orders/my-orders
// @desc Get logged-in users orders
// @access Private
router.get("/my-orders", Protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
        createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route GET /api/orders/:id
// @desc Get order details by ID
// @access Private
router.get("/:id", Protect, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", "name email");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error("Error fetching order details:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
})

module.exports = router;
