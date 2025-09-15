import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoaderModal from "../Common/LoaderModal";
import { toast } from "sonner";
import {
  deleteProduct,
  fetchAdminProducts,
} from "../../redux/slices/adminProductsSlice";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Added for navigation
  const { products, loading, error } = useSelector(
    (state) => state.adminProducts
  );

  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      dispatch(deleteProduct(id));
    }
    toast("Product Removed successfully", toasterOptions("success"), {
      duration: 1000,
    });
  };

  const toasterOptions = (data) => {
    if (data === "success") {
      return { style: { background: "green", color: "white" } };
    }
    if (data === "error") {
      return { style: { background: "red", color: "white" } };
    }
    if (data === "info") {
      return { style: { background: "#BA8E23", color: "white" } };
    }
  };

  if (error) {
    toast(error, toasterOptions("error"), { duration: 1000 });
    return;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {loading && <LoaderModal />}

      {/* Header with Add Product button right-aligned */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <button
          onClick={() => navigate("/admin/products/add")} // correct route
          className="bg-rabbit-blue text-white px-4 py-2 rounded hover:bg-black"
        >
          Add Product
        </button>
      </div>

      <p>Total Products: {products.length}</p>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product._id}
                  </td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">₦ {product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
