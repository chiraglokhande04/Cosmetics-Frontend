import React from "react";

export default function ShopSidebar() {
  return (
    <aside className="w-1/4 p-6 border-r">
      {/* Categories */}
      <div className="mb-6">
        <h2 className="font-bold text-lg">CATEGORIES</h2>
        <ul className="mt-2 space-y-2">
          <li className="cursor-pointer hover:text-gray-600">Fragrance</li>
          <li className="cursor-pointer hover:text-gray-600">Makeup</li>
          <li className="cursor-pointer hover:text-gray-600">Skincare</li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h2 className="font-bold text-lg">PRICE</h2>
        <input type="range" min="20" max="200" className="w-full mt-2" />
        <p className="text-sm">Price: $20 — $200</p>
        <button className="border border-black w-full py-2 mt-2">FILTER</button>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h2 className="font-bold text-lg">COLOR</h2>
        <div className="flex space-x-3 mt-2">
          <div className="w-5 h-5 bg-black rounded-full cursor-pointer"></div>
          <div className="w-5 h-5 bg-brown-500 rounded-full cursor-pointer"></div>
          <div className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"></div>
        </div>
      </div>

      {/* Capacity */}
      <div>
        <h2 className="font-bold text-lg">CAPACITY</h2>
        <div className="flex space-x-2 mt-2">
          <button className="border px-3 py-1 text-sm">30 mL</button>
          <button className="border px-3 py-1 text-sm">40 mL</button>
          <button className="border px-3 py-1 text-sm">50 mL</button>
        </div>
      </div>
    </aside>
  );
}
