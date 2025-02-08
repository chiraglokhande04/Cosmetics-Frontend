import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "OIL SHAMPOO",
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
    title: "AIRBRUSH MATTE",
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
    title: "BRIGHTENING CORRECTOR",
    desc: "A full-coverage color corrector.",
    img: "https://www.rasluxuryoils.com/cdn/shop/files/35ml_1f1896e0-5e26-4470-a677-a57963ce58c5_533x.jpg?v=1735985502",
    price: "$80.00",
    new: true,
    rating: 4,
    showOnHover: true,
  },
  {
    id: 4,
    title: "BODIFYING SHAMPOO",
    desc: "A gentle but thorough cleanser that leaves hair.",
    img: "https://i0.wp.com/elevation45.in/wp-content/uploads/2020/10/luchiana-3015865450.jpg?fit=1200%2C1200&ssl=1&w=640",
    price: "$45.00",
    new: true,
    rating: 4,
    showOnHover: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="h-[500px] w-[280px] relative bg-white shadow-md rounded-lg overflow-hidden p-6 ">
      {/* Discount & Featured Labels */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-20">
          {product.discount}
        </span>
      )}
      {product.featured && (
        <span className="absolute top-2 right-2 bg-pink-300 text-white text-xs px-2 py-1 rounded z-20">
          FEATURED
        </span>
      )}
      {product.new && (
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-20">
          NEW
        </span>
      )}

      {/* Image Section with Hover Effect */}
      <div className="relative group">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-auto object-cover transition-all duration-300 "
        />
        {product.showOnHover && (
          <div className="absolute inset-0 flex flex-col items-center justify-center   opacity-0 group-hover:opacity-100 ">
            <div className="flex  bg-white mb-2">
              <div className="p-3 border border-black">
              <FaRegEye className="text-gray-600 text-lg cursor-pointer" />
              </div>
              <div className="p-3 border border-black">
              <FaRegHeart className="text-gray-600 text-lg cursor-pointer" /> 
              </div>
            </div>
            <button className="border bg-white border-black px-4 py-1 text-black">+ ADD TO CART</button>
          </div>
        )}
      </div>

      <hr className="border-gray-300 w-full my-2" />

      {/* Product Details (Always Visible) */}
      <div className="space-y-6 mt-2">
        <h2 className="text-center text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-center text-gray-600 text-sm">{product.desc}</p>

        {/* Star Rating */}
        <div className="flex justify-center mt-2 text-yellow-500">
          {Array.from({ length: product.rating }, (_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>

        <p className="text-center mt-2">
          {product.oldPrice && <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>}
          <span className="text-black font-semibold">{product.price}</span>
        </p>
      </div>
    </div>
  );
};

const ExploreProducts = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        <Link to="/shop">
          <button className="border border-black px-6 py-2 text-black hover:bg-black hover:text-white">
            VIEW ALL
          </button>
        </Link>
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
