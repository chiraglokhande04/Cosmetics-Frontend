import React from "react";

const products = [
  {
    id: 1,
    name: "AIRBRUSH MATTE",
    description: "Skin-perfecting bronzed filter for the face.",
    price: 40,
    oldPrice: 45,
    image: "/product1.png",
    discount: "-11%",
    featured: true,
  },
  {
    id: 2,
    name: "BODIFYING SHAMPOO",
    description: "A gentle but thorough cleanser that leaves hair.",
    price: 45,
    image: "/product2.png",
    new: true,
  },
  {
    id: 3,
    name: "BRIGHTENING CORRECTOR",
    description: "A full-coverage color corrector.",
    price: 80,
    image: "/product3.png",
    new: true,
  },
];

export default function ShopProducts() {
  return (
    <div className="w-[1000px] p-6 bg-white">
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
      <div className="grid grid-cols-3 gap-6 bg-white">
        {products.map((product) => (
          <div key={product.id} className="border p-4 relative">
            {product.discount && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">
                {product.discount}
              </span>
            )}
            {product.featured && (
              <span className="absolute top-2 right-2 bg-pink-300 text-white text-xs px-2 py-1">
                FEATURED
              </span>
            )}
            {product.new && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">
                NEW
              </span>
            )}
            <img src={product.image} alt={product.name} className="mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="mt-2">
              {product.oldPrice && (
                <span className="line-through text-gray-500 mr-2">
                  ${product.oldPrice}
                </span>
              )}
              <span className="text-black font-bold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


