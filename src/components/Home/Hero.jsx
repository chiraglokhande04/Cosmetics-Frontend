import React from 'react';
import HeroImg from '../../assets/hero.png'; // Adjust the path as necessary
import titleImg from '../../assets/title.png'; // Adjust the path as necessary

export default function MedafemHero() {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Navigation */}
      <nav className="h-[84.7px] relative z-20 flex justify-between items-center px-6 py-4 text-white">
        <div className="flex items-center space-x-8">
          <button className="text-sm font-light tracking-wider hover:opacity-80">
            SHOP
          </button>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-center">
           <img src={titleImg} alt="Medafem Logo" className="h-12 w-auto" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-sm font-light tracking-wider hover:opacity-80">
            SEARCH
          </button>
          <button className="text-sm font-light tracking-wider hover:opacity-80">
            LOG IN
          </button>
          <button className="text-sm font-light tracking-wider hover:opacity-80 bg-white text-black px-3 py-1">
            BAG 00
          </button>
        </div>
      </nav>

      {/* Background Image with Overlay */}
     {/* Background Image with Overlay */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
  }}
>
  {/* Geometric background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400"></div>
  </div>

  {/* Shadow overlay */}
  <div className="absolute inset-0 bg-black opacity-30"></div>
</div>


      {/* Main Content */}
      <div className="relative bottom-36 z-10 flex items-end h-screen px-20">
        <div className="w-1/2">
          <h2 className="text-5xl font-light text-white leading-tight mb-8">
            Natural & Organic<br />
            Skincare Set
          </h2>
          
          <button className="bg-[#69795A] bg-opacity-80 text-black px-8 py-3 text-sm font-light tracking-widest hover:bg-opacity-100 transition-all duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Product Image Area */}
      
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}