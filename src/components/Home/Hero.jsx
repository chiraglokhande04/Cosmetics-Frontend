import React from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white z-10">
        <h1 className="text-2xl font-bold tracking-wide">LUCHIANA</h1>
        <ul className="hidden md:flex gap-8 text-lg">
          <Link to='/' className="hover:opacity-75 cursor-pointer">HOME</Link>
          <Link to='/shop' className="hover:opacity-75 cursor-pointer">SHOP</Link>
          <Link to='/headers' className="hover:opacity-75 cursor-pointer">HEADERS</Link>
          <Link to='/blog' className="hover:opacity-75 cursor-pointer">BLOG</Link>
          <Link to='/pages' className="hover:opacity-75 cursor-pointer">PAGES</Link>
          <Link to='/mega' className="hover:opacity-75 cursor-pointer">MEGA</Link>
          <Link to='/contact' className="hover:opacity-75 cursor-pointer">CONTACT</Link>
        </ul>
        <div className="flex gap-4 text-xl">
          <FiSearch className="cursor-pointer hover:opacity-75" />
          <FiUser className="cursor-pointer hover:opacity-75" />
          <Link to='/wishlist'> <FiHeart className="cursor-pointer hover:opacity-75" /></Link>
          <FiShoppingBag className="cursor-pointer hover:opacity-75" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side */}
        <div
          className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center flex items-end p-10"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/14/f0/33/14f033ca25e1e6e585b346c8851997a8.jpg')",
          }}
        >
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Modern Formula for Skin Health</h1>
            <Link to='/shop'>
            <button className="px-6 py-3  text-black hover:text-white bg-yellow-300 hover:bg-yellow-600 transition ">
              SHOP NOW
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center flex  p-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/9748713/pexels-photo-9748713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <div className="text-white mt-20">
            <h1 className="text-4xl font-bold mb-4">Natural & Organic Skincare Set</h1>
            <Link to='/shop'>
            <button className="px-6 py-3  text-black hover:text-white bg-yellow-300 hover:bg-yellow-600 transition ">
              SHOP NOW
            </button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default LandingPage;
