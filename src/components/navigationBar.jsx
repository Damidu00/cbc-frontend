import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from '../../public/logobgremove.png'

export default function NavigationBar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="sticky top-0 bg-white shadow-md p-4 flex items-center justify-between z-50 h-[80px] "  data-aos="fade-down">

      <div className="flex items-center ">
        <div className="w-18 h-18 bg-gray-50 rounded-full flex items-center justify-center">
          <Link to='/'>
          <img
            src={logo}
            alt="Logo"
            className="w-[80px] h-[80px] rounded-full cursor-pointer"
          />
          </Link>
        </div>
      </div>


      <div className="text-center flex-grow absolute left-[120px]" >
        <h1 className="text-[25px] font-bold text-gray-800 font-serif">Crystal Beauty Clear</h1>
      </div>


      <div className="flex items-center space-x-6">

      <Link
        to="/products"
        className="inline-block px-4 py-2 text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Products
      </Link>


    <Link
        to="/feedbacks"
        className="inline-block px-4 py-2 text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Feedbacks
      </Link>


      <Link
          to="/aboutus"
          className="inline-block px-4 py-2 text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          About Us
      </Link>



      <Link
        to="/contactus"
        className="inline-block px-4 py-2 text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Contact Us
      </Link>


        <div className="flex items-center space-x-2">
          <FaUserCircle className="w-6 h-6 text-gray-600" />
          <Link
            to="/account"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif"
          >
            Account
          </Link>
        </div>


        <div className="flex items-center space-x-2">
          <FaShoppingBag className="w-6 h-6 text-gray-600" />
          <Link
            to="/cart"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif"
          >
            Bag
          </Link>
        </div>
      </div>
    </nav>
  );
}
