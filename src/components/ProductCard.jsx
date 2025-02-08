import { FaRegEye, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
      <div className="h-[500px] w-[280px] relative bg-white shadow-md rounded-lg overflow-hidden p-6 group">
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
  
        <div className="relative">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-auto object-cover transition-all duration-300"
          />
          {product.showOnHover && (
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex bg-white mb-2">
                <div className="p-3 border border-black">
                  <FaRegEye className="text-gray-600 text-lg cursor-pointer" />
                </div>
                <div className="p-3 border border-black">
                  <FaRegHeart className="text-gray-600 text-lg cursor-pointer" />
                </div>
              </div>
              <button className="border bg-white border-black px-4 py-1 text-black">
                + ADD TO CART
              </button>
            </div>
          )}
        </div>
  
        <hr className="border-gray-300 w-full my-2" />
  
        <div className="space-y-6 mt-2">
          <h2 className="text-center text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-center text-gray-600 text-sm">{product.desc}</p>
          <div className="flex justify-center mt-2 text-yellow-500">
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
          <p className="text-center mt-2">
            {product.oldPrice && (
              <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
            )}
            <span className="text-black font-semibold">{product.price}</span>
          </p>
        </div>
      </div>
    );
  };


export default ProductCard; 