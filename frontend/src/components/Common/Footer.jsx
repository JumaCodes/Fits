import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { subscribeUser } from "../../redux/slices/subscriberSlice";
import { toast } from "sonner";

const Footer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(
    (state) => state.subscribers
  );

  const [email, setEmail] = useState("");

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email) {
        toast("Email is required", toasterOptions("error"), {
          duration: 1000,
        });
        return;
      }
  
       try {
         // Unwrap waits for the async thunk result
         await dispatch(subscribeUser(email)).unwrap();
           toast("Email subscribed successfully", toasterOptions("success"), {
             duration: 1000,
           });
          } catch (err) {
            // err is whatever you passed from rejectWithValue in authSlice
            if (err.includes("Email is already subscribed")) {
              toast("This email is already subscribed", toasterOptions("error"), {
                duration: 1000,
              });
            } else if (err.includes("Server Error")) {
              toast("Failed to subscribe, server error!", toasterOptions("error"), {
                duration: 1000,
              });
            } else {
              toast("Login failed. Please try again.", toasterOptions("error"), {
                duration: 1000,
              });
            }
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
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-12">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign Up and get 10% off your first order.
          </p>

          {/* Newsletter form */}
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-roo transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-rabbit-blue text-white px-6 py-3 text-sm rounded-r-md hover:bg-black transition-all disabled:opacity-60"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-800 mb-4">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            +123 456 7890
          </p>
        </div>
      </div>

      {/* Footer copy-right */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-600 pt-6">
        <p className="text-center text-gray-500 text-sm tracking-tighter">
          <span className="text-rabbit-blue  tracking-wider">FITS </span>
          &copy; {new Date().getFullYear()} JumaCodes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
