import React from "react";

const RetinolSection = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row bg-[#FFD699] h-[550px] p-8 md:p-12 items-center">
      {/* Text Section */}
      <div className="md:w-1/2 p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Retinol: Your Best Anti-Aging Friend
        </h1>
        <p className="text-gray-800 mt-4 text-lg">
          Retinol lorem ipsum dolor sit amet consectetur. Aliquam turpis ipsum augue
          varius scelerisque. Integer donec purus sit justo. Quisque enim risus vel
          convallis congue.
        </p>
        <button className="mt-6 border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition">
          READ MORE
        </button>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 ">
        <img
          src="https://st5.depositphotos.com/62628780/65113/i/450/depositphotos_651138636-stock-photo-face-cream-skincare-woman-studio.jpg" 
          alt="Woman with skincare cream"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default RetinolSection;
