import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductsGrid from "./ProductsGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, fetchSimilarProducts } from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import LoaderModal from "../Common/LoaderModal";


const ProductDetails = ({ productId }) => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector((state) => state.products);
  const { user, guestId } = useSelector((state) => state.auth);
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);
  

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
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

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast(
        "Please select size and color before adding to cart.",
        toasterOptions("error"),
        {
          duration: 1000,
        }
      );
      return;
    }
    
    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        user: user?._id,
      })
    ).then(() => {
        toast("Product Added To Cart!", toasterOptions("success"), {
          duration: 1000,
        });
    }).finally(() => { 
      setIsButtonDisabled(false);
    });
  };



  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      {loading && <LoaderModal />}
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnail */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Product Image ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-4 ${
                    mainImage === image.url
                      ? "border-rabbit-blue"
                      : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Right Main Image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img
                  src={mainImage}
                  alt={
                    selectedProduct.images[0].altText || "Main Product Image"
                  }
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Mobile Thumbnails */}
            <div className="md:hidden flex space-x-4 overscroll-x-scroll mb-4">
              {selectedProduct.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Product Image ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url
                      ? "border-rabbit-blue"
                      : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-lg text-gray-600 mb-1 line-through">
                {selectedProduct.discountPrice && (
                  <span>₦{selectedProduct.discountPrice}</span>
                )}
              </p>
              <p className="text-lg text-gray-500 mb-2">
                ₦{selectedProduct.price}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border transition ${
                        selectedColor === color
                          ? "border-4 border-[#39bfe7]"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                      title={color}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-8 py-2 rounded border transition ${
                        selectedSize === size ? "text-white bg-rabbit-blue" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                    onClick={() => handleQuantityChange("minus")}
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                    onClick={() => handleQuantityChange("plus")}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className={`bg-rabbit-blue text-white py-2 px-6 rounded w-full mb-4 ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-black"
                }`}
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
              >
                {isButtonDisabled ? "Adding..." : "ADD TO CART"}
              </button>

              <div className="mt-10 text-gray-700">
                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                <table className="w-full text-left text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1">Brand:</td>
                      <td className="py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Material:</td>
                      <td className="py-1">{selectedProduct.material}</td>
                    </tr>
                    <tr>
                      <td className="py-1">Gender:</td>
                      <td className="py-1">{selectedProduct.gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You May Also Like
            </h2>
            <ProductsGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
