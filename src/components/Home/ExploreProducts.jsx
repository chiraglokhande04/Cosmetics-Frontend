import React from "react";

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "OIL SHAMPOO",
    desc: "A silicone- and paraben-free cleansing oil shampoo.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WbY8GvqXiEWWV_-OtHBZvvHk62RbGCcqXg&s",
    price: "$50.00",
    oldPrice: "$55.00",
    discount: "-9%",
    rating: 4,
    showOnHover: true,
  },
  {
    id: 2,
    name: "AIRBRUSH MATTE",
    desc: "Skin-perfecting bronzed filter for the face.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRrxo6wItN8FEKeWTMRzLwG286AkVW_BnA&s",
    price: "$40.00",
    oldPrice: "$45.00",
    discount: "-11%",
    featured: true,
    rating: 4,
    showOnHover: true,
  },
  {
    id: 3,
    name: "BRIGHTENING CORRECTOR",
    desc: "A full-coverage color corrector.",
    img: "https://www.rasluxuryoils.com/cdn/shop/files/35ml_1f1896e0-5e26-4470-a677-a57963ce58c5_533x.jpg?v=1735985502",
    price: "$80.00",
    new: true,
    rating: 4,
    showOnHover: true,
  },
  {
    id: 4,
    name: "BODIFYING SHAMPOO",
    desc: "A gentle but thorough cleanser that leaves hair.",
    img: "https://i0.wp.com/elevation45.in/wp-content/uploads/2020/10/luchiana-3015865450.jpg?fit=1200%2C1200&ssl=1&w=640",
    price: "$45.00",
    new: true,
    rating: 4,
    showOnHover: true,
  },
];



const ExploreProducts = () => {
  return (
    <div className="p-8 px-36">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-6xl font-extralight">Explore Our Products</h1>
        <Link to="/shop">
          <button className="border border-black px-6 py-2 text-black hover:bg-black hover:text-white">
            VIEW ALL
          </button>
        </Link>
      </div>

      <div className="mt-14 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ExploreProducts;
