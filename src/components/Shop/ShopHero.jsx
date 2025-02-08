import React from "react";

export default function ShopHero() {
  return (
    <section className="relative bg-[#96b8b1] h-[300px] flex flex-col justify-center items-center text-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/your-pattern-image-url.png')] opacity-50"></div>

      {/* Shop Title */}
      <h1 className="text-white text-5xl font-light relative z-10 tracking-wide">SHOP</h1>

      {/* Breadcrumb */}
      <p className="text-white uppercase text-sm mt-2 relative z-10">
        Home <span className="mx-2">•</span> Shop
      </p>
    </section>
  );
}
