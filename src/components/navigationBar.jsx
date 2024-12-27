import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

export default function NavigationBar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="sticky top-0 bg-white shadow-md p-4 flex items-center justify-between z-50" data-aos="fade-down">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Middle: Title */}
      <div className="text-center flex-grow">
        <h1 className="text-xl font-bold text-gray-700">Cristal Beauty Clear</h1>
      </div>

      {/* Right Side: Links and Icons */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <Link
          to="/products"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          About Us
        </Link>

        {/* Account */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="w-6 h-6 text-gray-600" />
          <Link
            to="/account"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Account
          </Link>
        </div>

        {/* Bag */}
        <div className="flex items-center space-x-2">
          <FaShoppingBag className="w-6 h-6 text-gray-600" />
          <Link
            to="/bag"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Bag
          </Link>
        </div>
      </div>
    </nav>
  );
}
