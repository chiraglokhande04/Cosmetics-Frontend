import React from "react";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "AIRBRUSH MATTE",
    desc: "Skin-perfecting bronzed filter for the face.",
    price: 40,
    oldPrice: 45,
    img: "https://elevation45.in/wp-content/uploads/2020/10/luchiana-3022279061.jpg",
    discount: "-11%",
    featured: true,
    rating: 4,
    showOnHover: true,
  },
  {
    id: 2,
    name: "BODIFYING SHAMPOO",
    desc: "A gentle but thorough cleanser that leaves hair.",
    price: 45,
    img: "https://i0.wp.com/elevation45.in/wp-content/uploads/2020/10/luchiana-3015865450.jpg?fit=1200%2C1200&ssl=1&w=640",
    new: true,
    rating: 4,
    showOnHover: true,
  },
  {
    id: 3,
    name: "BRIGHTENING CORRECTOR",
    desc: "A full-coverage color corrector.",
    price: 80,
    img: "https://www.rasluxuryoils.com/cdn/shop/files/35ml_1f1896e0-5e26-4470-a677-a57963ce58c5_533x.jpg?v=1735985502",
    new: true,
    rating: 4,
    showOnHover: true,
  },
];

export default function ShopProducts() {
  return (
    <div className="w-3/4 p-6 bg-gray-100">
      {/* Sorting and Results */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">SHOWING 1–12 OF 21 RESULTS</p>
        <select className="border p-2">
          <option>Default Sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-3 gap-6 bg-gray-100">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


