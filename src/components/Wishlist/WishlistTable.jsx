import { FC } from "react";

const WishlistTable = () => {
  const wishlistItems = [
    {
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "AIRBRUSH MATTE",
      oldPrice: "$45.00",
      newPrice: "$40.00",
      stock: "IN STOCK",
    },
    {
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "BODIFYING SHAMPOO",
      oldPrice: "",
      newPrice: "$45.00",
      stock: "IN STOCK",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 border-b pb-2 uppercase text-sm text-gray-500">
        <p>Product</p>
        <p>Price</p>
        <p>Stock Status</p>
        <p></p>
      </div>

      {/* Wishlist Items */}
      {wishlistItems.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-4 py-4 border-b items-center"
        >
          {/* Product Info */}
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-14 h-14" />
            <span className="uppercase text-sm font-medium">{item.name}</span>
          </div>

          {/* Price */}
          <div className="text-sm">
            {item.oldPrice && (
              <span className="line-through text-gray-400">{item.oldPrice}</span>
            )}{" "}
            <span className="font-bold">{item.newPrice}</span>
          </div>

          {/* Stock Status */}
          <p className="text-sm text-green-600">{item.stock}</p>

          {/* Add to Cart Button */}
          <button className="border px-4 py-2 text-sm uppercase">
            + Add to Cart
          </button>
        </div>
      ))}

      {/* Share Links */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <p>
          <span className="font-bold">Share Link:</span>{" "}
          <a
            href="#"
            className="text-black underline"
          >
            https://parkofideas.com/luchiana/demo/wishlist/?ip_wishlist_share=438,504
          </a>
        </p>

        <div className="flex space-x-3">
          <p className="font-bold">Share Wishlist:</p>
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">❌</span>
          <span className="cursor-pointer">📌</span>
          <span className="cursor-pointer">💬</span>
        </div>
      </div>
    </div>
  );
};

export default WishlistTable;
