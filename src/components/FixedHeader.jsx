import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 sm:px-8 flex justify-between items-center z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left: Hamburger for mobile */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6 text-gray-800 bg-white" />
        </button>
      </div>

      {/* Center Logo */}
      <h1 className="text-lg sm:text-xl tracking-[0.6em] font-medium">
        LUCHIANA
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 text-sm font-medium tracking-wide">
          <li><Link to="/" className="hover:opacity-70">HOME</Link></li>
          <li><Link to="/shop" className="hover:opacity-70">SHOP</Link></li>
          <li><Link to="/headers" className="hover:opacity-70">HEADERS</Link></li>
          <li><Link to="/blog" className="hover:opacity-70">BLOG</Link></li>
          <li><Link to="/pages" className="hover:opacity-70">PAGES</Link></li>
          <li><Link to="/mega" className="hover:opacity-70">MEGA</Link></li>
          <li><Link to="/contact" className="hover:opacity-70">CONTACT</Link></li>
        </ul>
      </nav>

      {/* Right Icons */}
      <div className="flex gap-4 sm:gap-6 items-center text-gray-800">
        <Search className="w-5 h-5 cursor-pointer hover:opacity-70" />
        <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
        <Heart className="w-5 h-5 cursor-pointer hover:opacity-70" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70" />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white text-black shadow-lg z-50 bg-opacity-95
           transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-medium">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col gap-6 p-6 text-base font-medium bg-white">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-600">HOME</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-gray-600">SHOP</Link></li>
          <li><Link to="/headers" onClick={() => setIsOpen(false)} className="hover:text-gray-600">HEADERS</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-gray-600">BLOG</Link></li>
          <li><Link to="/pages" onClick={() => setIsOpen(false)} className="hover:text-gray-600">PAGES</Link></li>
          <li><Link to="/mega" onClick={() => setIsOpen(false)} className="hover:text-gray-600">MEGA</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-600">CONTACT</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default FixedHeader;
