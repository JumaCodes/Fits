import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`)
        setNewArrivals(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchNewArrivals();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -480 : 480;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    // Update button state after scroll completes
    setTimeout(updateScrollButtons, 400);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const threshold = 5; // small tolerance for floating point rounding
      setCanScrollLeft(leftScroll > threshold);
      setCanScrollRight(leftScroll < maxScroll - threshold);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => updateScrollButtons();
    container.addEventListener("scroll", handleScroll);
    updateScrollButtons();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [newArrivals]);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 lg:px-10">
          Explore New Arrivals
        </h2>
        <p className="text-lg text-gray-600 mb-50 lg:px-10">
          Discover the latest trends and styles in our new arrivals collection.
          Freshly curated just for you, these pieces are designed to elevate
          your wardrobe. Shop now to find your perfect fit!
        </p>
      </div>

      <div className="relative container mx-auto">
        {/* Scroll buttons */}
        <div className="absolute -top-14 right-0 flex gap-2 z-10">
          <button
            className={`p-2 rounded-full shadow-md transition ${
              canScrollLeft
                ? "bg-rabbit-blue text-white hover:bg-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            className={`p-2 rounded-full shadow-md transition ${
              canScrollRight
                ? "bg-rabbit-blue text-white hover:bg-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Scrollable product list */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`overflow-x-scroll scrollbar-hide flex space-x-6 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[500px] object-cover rounded-lg"
                draggable="false"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/products/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">₦{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
