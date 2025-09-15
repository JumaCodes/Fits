const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

const seedData = async () => {
  try {
    // Clear collections
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create admin user
    const createdUser = await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "12345678",
      role: "admin",
    });

    const userID = createdUser._id;

    // Assign user to products
    const sampleProducts = products.map((product) => ({
      ...product,
      user: userID,
    }));

    await Product.insertMany(sampleProducts);

    console.log("Data seeded successfully ✅");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

mongoose
  .connect(process.env.MONGODB_URI, { dbName: "fits-wear" })
  .then(() => {
    console.log("MongoDB connected ✅");
    seedData();
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });
