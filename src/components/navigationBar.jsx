import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from '../../public/logobgremove.png';

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="sticky top-0 bg-gray-100 shadow-md p-4 flex items-center justify-between z-50 h-[80px]" data-aos="fade-down">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-18 h-18 bg-gray-50 rounded-full flex items-center justify-center">
          <Link to='/'>
            <img src={logo} alt="Logo" className="w-[80px] h-[80px] rounded-full cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Title (Hidden on Small Screens) */}
      <div className="text-center flex-grow absolute left-[120px] hidden md:block">
        <h1 className="text-[25px] font-bold text-gray-800 font-serif hover:scale-x-110 cursor-pointer">Crystal Beauty Clear</h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
        </button>
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/products" text="Products" />
        <NavLink to="/feedbacks" text="Feedbacks" />
        <NavLink to="/aboutus" text="About Us" />
        <NavLink to="/contactus" text="Contact Us" />

        {/* Account & Cart Icons */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="w-6 h-6 text-gray-600" />
          <Link to="/currentuser" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif">Account</Link>
        </div>
        <div className="flex items-center space-x-2">
          <FaShoppingBag className="w-6 h-6 text-gray-600" />
          <Link to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif">Bag</Link>
        </div>
      </div>

      {/* Mobile Menu (Visible When Open) */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavLink to="/products" text="Products" onClick={() => setMenuOpen(false)} />
          <NavLink to="/feedbacks" text="Feedbacks" onClick={() => setMenuOpen(false)} />
          <NavLink to="/aboutus" text="About Us" onClick={() => setMenuOpen(false)} />
          <NavLink to="/contactus" text="Contact Us" onClick={() => setMenuOpen(false)} />
          <div className="flex items-center space-x-2">
            <FaUserCircle className="w-6 h-6 text-gray-600" />
            <Link to="/currentuser" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif" onClick={() => setMenuOpen(false)}>Account</Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingBag className="w-6 h-6 text-gray-600" />
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-bold font-serif" onClick={() => setMenuOpen(false)}>Bag</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink Component
function NavLink({ to, text, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="inline-block px-4 py-2 text-gray-700 font-medium bg-gray-200 hover:bg-gray-300 rounded-md shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
      {text}
    </Link>
  );
}
