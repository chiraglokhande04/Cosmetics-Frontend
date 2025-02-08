import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "OIL SHAMPOO",
    desc: "A silicone- and paraben-free cleansing oil shampoo.",
    img: "https://via.placeholder.com/150", // Replace with actual image
    price: "$50.00",
    oldPrice: "$55.00",
    discount: "-9%",
    showOnHover: true,
  },
  {
    id: 2,
    title: "AIRBRUSH MATTE",
    desc: "Skin-perfecting bronzed filter for the face.",
    img: "https://via.placeholder.com/150", // Replace with actual image
    price: "$40.00",
    oldPrice: "$45.00",
    discount: "-11%",
    featured: true,
    showOnHover: true,
  },
  {
    id: 3,
    title: "BRIGHTENING CORRECTOR",
    desc: "A full-coverage color corrector.",
    img: "https://via.placeholder.com/150", // Replace with actual image
    price: "$80.00",
    new: true,
    showOnHover: true,
  },
  {
    id: 4,
    title: "BODIFYING SHAMPOO",
    desc: "A gentle but thorough cleanser that leaves hair.",
    img: "https://via.placeholder.com/150", // Replace with actual image
    price: "$45.00",
    new: true,
    showOnHover: true, // Special behavior for last item
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform hover:scale-105">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {product.discount}
        </span>
      )}
      {product.featured && (
        <span className="absolute top-2 right-2 bg-pink-300 text-white text-xs px-2 py-1 rounded">
          FEATURED
        </span>
      )}
      {product.new && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}

      {/* Image Section */}
      <div className="relative">
        <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
        {product.showOnHover && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity">
            <div className="flex space-x-4 mb-2">
              <FaRegEye className="text-gray-600 text-lg cursor-pointer" />
              <FaRegHeart className="text-gray-600 text-lg cursor-pointer" />
            </div>
            <button className="border border-black px-4 py-1 text-black">+ ADD TO CART</button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <h2 className="text-center text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-center text-gray-600 text-sm">{product.desc}</p>
      <p className="text-center mt-2">
        {product.oldPrice && <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>}
        <span className="text-black font-semibold">{product.price}</span>
      </p>
    </div>
  );
};

const ExploreProducts = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        <button className="border border-black px-6 py-2 text-black">VIEW ALL</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

   
    </div>
  );
};

export default ExploreProducts;
