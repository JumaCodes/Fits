import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser, fetchUsers, updateUser } from "../../redux/slices/adminSlice";
import LoaderModal from "../Common/LoaderModal";
import { toast } from "sonner";

const UserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { users, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(fetchUsers());
    }
  }, [user, dispatch]);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Default Role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    // Prevent form refresh
    e.preventDefault();

    // Dispatch the addUser action with the current form data
    dispatch(addUser(formData));

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer", // Default back to customer, not admin
    });

    // Show toast notification
    toast("User added successfully", toasterOptions("success"), {
      duration: 1000,
    });
  };
  

  const handleRoleChange = (userId, newRole) => {
    // Here you would typically update the user role in your state or send it to your API
    dispatch(updateUser({ id: userId, role: newRole }));
    // toast
    toast("User role changed successfully", toasterOptions("success"), {
      duration: 1000,
    });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Here you would typically delete the user from your state or send a delete request to your API
      dispatch(deleteUser(userId));
      // toast
      toast("User deleted successfully", toasterOptions("success"), {
        duration: 1000,
      });
    }
  };

  const toasterOptions = (data) => {
    if (data === "success") {
      return {
        style: {
          background: "green",
          color: "white",
        },
      };
    }
    if (data === "error") {
      return {
        style: {
          background: "red",
          color: "white",
        },
      };
    }
    if (data === "info") {
      return {
        style: {
          background: "#BA8E23",
          color: "white",
        },
      };
    }
  };

  if (error) {
    toast(error, toasterOptions("error"), {
      duration: 1000,
    });
    return;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      {loading && <LoaderModal />}
      {/* Add New User Form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add User
          </button>
        </form>
      </div>
      {/* User List */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Id</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user._id}
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="border rounded p-2"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
