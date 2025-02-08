import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-16 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Links */}
        <ul className="flex space-x-4 md:space-x-6 uppercase tracking-wider">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Maintenance Mode</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-white text-lg"><FaFacebookF /></a>
          <a href="#" className="text-white text-lg"><FaInstagram /></a>
          <a href="#" className="text-white text-lg"><FaWhatsapp /></a>
          <a href="#" className="text-white text-lg"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>All rights reserved. © 2024 Luchiana Theme.</p>
        <ul className="flex space-x-4 md:space-x-6 uppercase tracking-wider mt-2 md:mt-0">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </footer>
  );
}
