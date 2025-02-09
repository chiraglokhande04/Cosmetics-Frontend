import React from "react";

export default function BottomHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Section - Organic Shower Gels */}
      <div className="relative">
        <img
          src="https://i.pinimg.com/736x/14/f0/33/14f033ca25e1e6e585b346c8851997a8.jpg" // Replace with actual image path
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
          src="https://media.istockphoto.com/id/1357956420/photo/cute-lady-using-cosmetic-product-in-studio.jpg?s=612x612&w=0&k=20&c=Z5YIgH1Wv1zjOrJwjvtnQIGlitN3EGHMuKkiUXZqrUU=" // Replace with actual image path
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
