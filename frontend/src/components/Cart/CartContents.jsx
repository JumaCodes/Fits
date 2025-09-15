import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle adding or subtracting to or from cart.
  const handleAddToCart = (productId, color, size, delta, quantity) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, guestId, userId, color, size) => {
    dispatch(
      removeFromCart({
        productId,
        guestId,
        userId,
        size,
        color,
      })
    );
  };

  // ✅ Updated clear cart to clear all at once
  const handleClearCart = () => {
    dispatch(
      updateCartItemQuantity({
        userId,
        guestId,
        clearCart: true,
      })
    );
  };

  return (
    <div>
      {cart?.products?.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      product.color,
                      product.size,
                      -1,
                      product.quantity
                    )
                  }
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      product.color,
                      product.size,
                      1,
                      product.quantity
                    )
                  }
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>₦ {(product.price * product.quantity).toLocaleString()}</p>
            </div>
            <button
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  guestId,
                  userId,
                  product.color,
                  product.size
                )
              }
            >
              <RiDeleteBin6Line className="w-6 h-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
      {cart?.products?.length > 0 && (
        <div>
          <div className="flex justify-between items-center py-4 font-semibold text-lg">
            <span>Total:</span>
            <span>₦ {cart.totalPrice?.toLocaleString()}</span>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContents;
