import React from "react";

const Info = () => {
  return (
    <div className="relative bg-white text-center px-6 py-12">
      {/* Press Mentions */}
      <div className="flex justify-center space-x-8 text-gray-800 text-lg mb-6">
        <span>Press about us</span>
        <span className="font-serif font-bold">Women’sHealth</span>
        <span className="font-serif font-bold">DIVINE</span>
        <span className="font-serif font-bold">VANITY FAIR</span>
        <span className="font-serif font-bold">VOGUE</span>
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl md:text-4xl font-medium leading-snug max-w-7xl mx-auto">
        A perfect harmony of high-performance{" "}
        <span className="inline-block w-24 h-24 align-middle">
          <img
            src="https://www.health.com/thmb/IC1uf9gexJUAjtZuI9OkikPEa9Q=/6000x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1348473975-f9ac7d89066f41ff9e5bef3a752ff205.jpg" // Replace with actual image
            alt="Ingredient"
            className="rounded-full w-24 h-24"
          />
        </span>{" "}
        ingredients and radically simplified{" "}
        <span className="inline-block w-24 h-24   align-middle">
          <img
            src="https://www.exposedskincare.com/cdn/shop/articles/young-woman-with-natural-aloe-vera-2022-03-29-07-53-16-utc_1_-min_600x.jpg?v=1696928654" // Replace with actual image
            alt="Skincare"
            className="rounded-full w-24 h-24"
          />
        </span>{" "}
        skincare rituals, designed to nourish your skin with minimal effort and
        maximum results.
      </h1>

      {/* Product Categories */}
      <div className="mt-6 text-lg text-gray-800">
        <p>
          Cleansers ✦ Facewash ✦ Body Lotion ✦ Bodywash
        </p>
        <p className="mt-2">
          Moisturizers ✦ Sunscreens ✦ Hair Serum
        </p>
      </div>

     
    </div>
  );
};

export default Info;
