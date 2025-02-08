import React from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white z-10">
        <h1 className="text-2xl font-bold tracking-wide">LUCHIANA</h1>
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:opacity-75 cursor-pointer">HOME</li>
          <li className="hover:opacity-75 cursor-pointer">SHOP</li>
          <li className="hover:opacity-75 cursor-pointer">HEADERS</li>
          <li className="hover:opacity-75 cursor-pointer">BLOG</li>
          <li className="hover:opacity-75 cursor-pointer">PAGES</li>
          <li className="hover:opacity-75 cursor-pointer">MEGA</li>
          <li className="hover:opacity-75 cursor-pointer">CONTACT</li>
        </ul>
        <div className="flex gap-4 text-xl">
          <FiSearch className="cursor-pointer hover:opacity-75" />
          <FiUser className="cursor-pointer hover:opacity-75" />
          <FiHeart className="cursor-pointer hover:opacity-75" />
          <FiShoppingBag className="cursor-pointer hover:opacity-75" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side */}
        <div
          className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center flex items-end p-10"
          style={{
            backgroundImage: "url('https://www.shutterstock.com/image-photo/close-young-woman-clear-glowing-600nw-2147868781.jpg')",
          }}
        >
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Modern Formula for Skin Health</h1>
            <button className="px-6 py-3 text-lg text-black hover:text-white bg-yellow-300 hover:bg-yellow-600 transition rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center flex  p-10"
          style={{
            backgroundImage: "url('https://sadhev.com/cdn/shop/articles/Aloe-Vera.jpg?v=1732616276')",
          }}
        >
          <div className="text-white mt-20">
            <h1 className="text-4xl font-bold mb-4">Natural & Organic Skincare Set</h1>
            <button className="px-6 py-3 text-lg text-black hover:text-white bg-yellow-300 hover:bg-yellow-600 transition rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default LandingPage;
