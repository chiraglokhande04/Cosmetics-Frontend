import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true); // Show header after 50px scroll
      } else {
        setIsVisible(false); // Hide header when back at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-2xl font-bold">Brand</h1>
      <nav>
      <ul className="hidden md:flex gap-8 text-lg">
          <Link to='/' className="hover:opacity-75 cursor-pointer">HOME</Link>
          <Link to='/shop' className="hover:opacity-75 cursor-pointer">SHOP</Link>
          <Link to='/headers' className="hover:opacity-75 cursor-pointer">HEADERS</Link>
          <Link to='/blog' className="hover:opacity-75 cursor-pointer">BLOG</Link>
          <Link to='/pages' className="hover:opacity-75 cursor-pointer">PAGES</Link>
          <Link to='/mega' className="hover:opacity-75 cursor-pointer">MEGA</Link>
          <Link to='/contact' className="hover:opacity-75 cursor-pointer">CONTACT</Link>
        </ul>
      </nav>
    </header>
  );
};

export default FixedHeader;
