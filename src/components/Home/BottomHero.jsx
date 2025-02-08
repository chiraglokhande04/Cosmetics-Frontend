import React from "react";

export default function BottomHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section - Organic Shower Gels */}
      <div className="relative">
        <img
          src="/images/shower-gel.jpg" // Replace with actual image path
          alt="Organic Shower Gels"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-light">New Organic Shower Gels</h2>
          <button className="mt-4 bg-[#F9C79D] text-black px-6 py-2 rounded-lg">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right Section - Dermatology Testing */}
      <div className="relative">
        <img
          src="/images/microscope.jpg" // Replace with actual image path
          alt="Dermatology Testing"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-4xl font-light">All Deep Tested by Dermatologists</h2>
          <button className="mt-4 bg-[#F9C79D] text-black px-6 py-2 rounded-lg">
            READ MORE
          </button>
        </div>
        {/* Right Side Theme Button */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button className="bg-green-500 text-white px-4 py-2 rotate-90 rounded-lg">
            Buy Theme
          </button>
        </div>
      </div>
    </section>
  );
}
