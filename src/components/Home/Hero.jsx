import React, { useState } from 'react';
import HeroImg from '../../assets/hero.png';
import titleImg from '../../assets/title.png';
import { Menu, X } from 'lucide-react';

export default function MedafemHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Navigation */}
      <nav className="h-[84.7px] relative z-30 flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 text-white">
        
        {/* Left: Hamburger / SHOP */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          {/* Hamburger on mobile */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>

          {/* SHOP visible on desktop */}
          <button className="hidden md:block text-sm font-light tracking-wider hover:opacity-80">
            SHOP
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={titleImg} alt="Medafem Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
        </div>

        {/* Right Section (desktop only) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm font-light tracking-wider hover:opacity-80">SEARCH</button>
          <button className="text-sm font-light tracking-wider hover:opacity-80">LOG IN</button>
          <button className="text-sm font-light tracking-wider hover:opacity-80 bg-white text-black px-3 py-1">
            BAG 00
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-black bg-opacity-95 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-light tracking-wider">MENU</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-6 p-6 text-lg font-light tracking-wider">
          <button className="hover:opacity-80">SHOP</button>
          <button className="hover:opacity-80">SEARCH</button>
          <button className="hover:opacity-80">LOG IN</button>
          <button className="bg-white text-black px-4 py-2 hover:bg-gray-200">
            BAG 00
          </button>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Light gradient */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400"></div>
        </div>
        {/* Shadow overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between h-full px-6 sm:px-12 lg:px-20 pb-20 md:pb-36 text-center md:text-left">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 sm:mb-8">
            Natural & Organic<br />
            Skincare Set
          </h2>
          <button className="bg-[#69795A] bg-opacity-80 text-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-light tracking-widest hover:bg-opacity-100 transition-all duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Product Image Area (future use) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          {/* Product Image Placeholder */}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}
