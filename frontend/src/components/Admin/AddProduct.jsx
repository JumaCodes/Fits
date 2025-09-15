import React, { useState, useEffect } from "react";
import LoaderModal from "../Common/LoaderModal";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { addProduct } from "../../redux/slices/productsSlice";
import { createProduct } from "../../redux/slices/adminProductsSlice";

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
      price: 0,
      discountPrice: 0,
    countInStock: 0, // default to 1
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: [], // default option
    material: "",
    gender: "", // default option
    images: [],
  });

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generate a random SKU on component mount
  useEffect(() => {
    const randomNumber = Math.floor(100 + Math.random() * 900); // 3-digit number
    const sku = `SKU-#${randomNumber}`;
    setProductData((prev) => ({ ...prev, sku }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (err) {
      console.error("Error uploading image:", err);
      setUploading(false);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setProductData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productData.images.length === 0) {
        toast("Product added successfully", toasterOptions("success"), {
              duration: 1000,
            });
            return;
      }
      
      setLoading(true);
      
    try {

     const response = await dispatch(createProduct(productData)).unwrap();

      toast("Product added successfully", toasterOptions("success"), {
        duration: 1000,
      });
      navigate(`/products/${response._id}`); // redirect to the new product
    } catch (err) {
      toast(err.message || "Failed to add product", toasterOptions("error"), {
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const toasterOptions = (type) => {
    if (type === "success")
      return { style: { background: "green", color: "white" } };
    if (type === "error")
      return { style: { background: "red", color: "white" } };
    if (type === "info")
      return { style: { background: "#BA8E23", color: "white" } };
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      {loading && <LoaderModal />}
      <h2 className="text-3xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label htmlFor="gender" className="block font-semibold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="" disabled>
              -- Select a Gender --
            </option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
          </select>
        </div>

        {/* Collections */}
        <div className="mb-6">
          <label htmlFor="collections" className="block font-semibold mb-2">
            Collections
          </label>
          <input
            id="collections"
            type="text"
            name="collections"
            value={productData.collections}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            placeholder="eg: Casual or Part Wear"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="" disabled>
              -- Select a Category --
            </option>
            <option value="Top Wear">Top Wear</option>
            <option value="Bottom Wear">Bottom Wear</option>
          </select>
        </div>

        {/* Discount Price */}
        <div className="mb-6">
          <label htmlFor="discountPrice" className="block font-semibold mb-2">
            Old Price
          </label>
          <input
            id="discountPrice"
            type="number"
            name="discountPrice"
            value={productData.discountPrice}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block font-semibold mb-2">
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Count in stock */}
        <div className="mb-6">
          <label htmlFor="stock" className="block font-semibold mb-2">
            Count in Stock
          </label>
          <input
            id="stock"
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label htmlFor="sku" className="block font-semibold mb-2">
            SKU
          </label>
          <input
            id="sku"
            type="text"
            name="sku"
            value={productData.sku}
            readOnly
            className="block w-full border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Brand */}
        <div className="mb-6">
          <label htmlFor="brand" className="block font-semibold mb-2">
            Brand
          </label>
          <input
            id="brand"
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Material */}
        <div className="mb-6">
          <label htmlFor="material" className="block font-semibold mb-2">
            Material (comma-separated)
          </label>
          <input
            id="material"
            type="text"
            name="material"
            value={productData.material}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label htmlFor="sizes" className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            id="sizes"
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label htmlFor="colors" className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            id="colors"
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="block font-semibold mb-2">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          {uploading && (
            <p className="italic text-green-500 mt-2">Uploading Image...</p>
          )}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={image.altText || `Product Image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {productData.images.length === 0 && !uploading ? (
          <p className="mt-2 mb-4 italic text-red-500">
            Add At Least One Image
          </p>
        ) : null}
        <button
          type="submit"
          disabled={productData.images.length === 0}
          className={`w-full py-2 px-4 rounded-md text-white transition-colors 
    ${
      productData.images.length === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    }`}
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
