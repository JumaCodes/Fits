import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paystack from "@paystack/inline-js";
import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../../redux/slices/checkoutSlice";
import axios from "axios";
import LoaderModal from "../Common/LoaderModal";


const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Ensure cart is loaded before proceeding
  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if (cart && cart.products.length > 0) {
      const res = await dispatch(createCheckout({
        checkoutItems: cart.products,
        shippingAddress,
        paymentMethod: "PayStack",
        totalPrice: cart.totalPrice
      }));
      if (res.payload && res.payload._id) {
        setCheckoutId(res.payload._id); // Set checkout ID if payment was successful
      }
    }
  };

  const handleFinalizeCheckout = async (checkoutId) => {
    try {
       await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/checkout/${checkoutId}/finalize`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

        navigate("/order-confirmation");
    } catch (error) {
      console.error("Error finalizing checkout:", error);
    }
  };
  
  const handlePaymentSuccess = async (details) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
        {
          paymentStatus: "Paid",
          paymentDetails: details
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
          },
        }
      );
    
        await handleFinalizeCheckout(checkoutId); // Finalize Checkout if payment is successful
    } catch (error) {
      console.error(error);
    }
  };


  // if (loading) return (
  //   <p>Loading cart...</p>
  // )

  if (error) return (
    <p>Error occurred: {error}</p>
  )

  if (!cart || !cart.products || cart.products.length === 0) return (
    <p>Your cart is empty.</p>
  )

  const payWithPaystack = () => {
    const paystack = new Paystack();
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_CLIENT_ID, // Replace with your Paystack test public key
      amount: cart.totalPrice * 100, // in kobo/cents
      email: "user@example.com",
      currency: "NGN",
      onSuccess: handlePaymentSuccess,
      onCancel: () => alert("Payment cancelled"),
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {loading && <LoaderModal />}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* Contact Details */}
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user ? user.email : ""}
              disabled
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Delivery */}
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={shippingAddress.firstName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  firstName: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={shippingAddress.lastName}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  lastName: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  city: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  postalCode: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Payment Button */}
          {!checkoutId ? (
            <button
              type="submit"
              className="w-full bg-rabbit-blue hover:bg-black text-white py-3 rounded"
            >
              Continue to Payment
            </button>
          ) : (
            <button
              type="button"
              onClick={payWithPaystack}
              className="w-full bg-rabbit-blue hover:bg-black text-white py-3 rounded"
            >
              Pay ₦{cart.totalPrice}
            </button>
          )}
        </form>
      </div>
      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
              </div>
              <div className="flex flex-col space-between gap-10">
                <p className="text-gray-500">
                  ₦{product.price?.toLocaleString()}
                </p>
                <p className="text-gray-500 mt-2">
                  ₦{product.quantity * product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>₦{cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>₦{cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
