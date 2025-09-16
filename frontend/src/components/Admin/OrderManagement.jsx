import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllOrders, updateOrderStatus } from '../../redux/slices/adminOrderSlice';
import LoaderModal from "../Common/LoaderModal";
import { toast } from "sonner";

const OrderManagement = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { orders, loading, error } = useSelector((state) => state.adminOrders);
  console.log(orders)

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/")
    } else {
      dispatch(fetchAllOrders());
    }
  }, [dispatch, navigate, user]);

    const handleStatusChange = (orderId, newStatus) => {
      dispatch(updateOrderStatus({ id: orderId, status: newStatus }));
      toast(`Order status updated successfully to ${newStatus}`, toasterOptions("success"), {
        duration: 1000,
      });
  }
  
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
      {loading && <LoaderModal />}
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order._id}
                  </td>
                  <td className="p-4">{order.user?.name}</td>
                  <td className="p-4">₦ {order.totalPrice.toLocaleString()}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      name="status"
                      id=""
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement