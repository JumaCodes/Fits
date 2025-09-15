import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.webp";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCarts } from "../redux/slices/cartSlice"; // <-- make sure this is imported
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get redirect parameter and check if it's checkout or something else
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCarts({ guestId, user })).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, cart, guestId, dispatch, navigate, isCheckoutRedirect]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (user.email !== email && user.password !== password) {
  //     toast("Invalid email or password", toasterOptions("error"), {
  //       duration: 1000,
  //     });
  //   }
  //   dispatch(loginUser({ email, password }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Unwrap waits for the async thunk result
      await dispatch(loginUser({ email, password })).unwrap();
      // If success → do nothing (navigate already handled in useEffect)
    } catch (err) {
      // err is whatever you passed from rejectWithValue in authSlice
      if (err.includes("Invalid Email")) {
        toast("No user found with this email!", toasterOptions("error"), {
          duration: 1000,
        });
      } else if (err.includes("Invalid Password")) {
        toast("Incorrect password!", toasterOptions("error"), {
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
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-start mb-6">
            <h2 className="text-xl font-medium text-rabbit-blue">FITS</h2>
          </div>
          <h2 className="text-2xl font-bold text-center italic text-rabbit-blue mb-2">
            L-O-G-I-N
          </h2>
          <p className="text-center mb-6 text-gray-500">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rabbit-blue text-white p-2 rounded-lg hover:bg-black font-semibold transition"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-rabbit-blue font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-rabbit-blue">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
