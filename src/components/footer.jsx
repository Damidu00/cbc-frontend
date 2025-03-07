import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8" >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            We are committed to selling the best quality beauty products.</p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:underline">products</Link></li>
              <li><Link to="/contactus" className="hover:underline">contactus</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Mahiyanganaya, Uva Province, Sri Lanka</p>
            <p className="text-sm">Email: crystalBeautyclear@gmail.com</p>
            <p className="text-sm">Phone: +94 77 123 4567</p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col  text-white">

              <a href="https://facebook.com" target="_blank" className="hover:text-gray-400 flex items-center ">
              <FaFacebook className='m-2'/>
              Facebook.com/crystalBeautyClear
              </a>
              <a href="https://twitter.com" target="_blank"  className="hover:text-gray-400 flex items-center">
                <FaXTwitter className='m-2'/>
                XTwitter.com/CBC_pvt
              </a>
              <a href="https://instagram.com" target="_blank"  className="hover:text-gray-400 flex items-center">
                <FaInstagram className='m-2'/>
                instagrame.com/cb_clear
              </a>
              <a href="https://linkedin.com" target="_blank"  className="hover:text-gray-400 flex items-center">
                <FaLinkedin className='m-2'/>
                linkedin.com/crystal_beauty_clear
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CBC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
