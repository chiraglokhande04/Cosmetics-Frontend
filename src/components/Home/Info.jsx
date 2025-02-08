import React from "react";

const Info = () => {
  return (
    <div className="relative bg-white text-center px-6 py-12">
      {/* Press Mentions */}
      <div className="flex justify-center space-x-32 text-gray-800 text-2xl mb-14">
        <span>Press about us</span>
        <span className="font-serif font-bold">Women’sHealth</span>
        <span className="font-serif font-bold">DIVINE</span>
        <span className="font-serif font-bold">VANITY FAIR</span>
        <span className="font-serif font-bold">VOGUE</span>
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl md:text-4xl font-medium leading-snug max-w-5xl mx-auto">
        A perfect harmony of high-performance{" "}
        <span className="inline-block w-20 h-20 align-middle">
          <img
            src="https://www.health.com/thmb/IC1uf9gexJUAjtZuI9OkikPEa9Q=/6000x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1348473975-f9ac7d89066f41ff9e5bef3a752ff205.jpg" // Replace with actual image
            alt="Ingredient"
            className="rounded-full w-20 h-20"
          />
        </span>{" "}
        ingredients and radically simplified{" "}
        <span className="inline-block  w-20 h-20   align-middle">
          <img
            src="https://www.exposedskincare.com/cdn/shop/articles/young-woman-with-natural-aloe-vera-2022-03-29-07-53-16-utc_1_-min_600x.jpg?v=1696928654" // Replace with actual image
            alt="Skincare"
            className="rounded-full w-20 h-20"
          />
        </span>{" "}
        skincare rituals, designed to nourish your skin with minimal effort and
        maximum results.
      </h1>

      {/* Product Categories */}
      <div className="w-full flex flex-col justify-center items-center  mt-14 text-2xl text-gray-800">
        <div className="flex flex-wrap gap-x-20">
          <span>Cleansers</span>
          <span>✦</span>
          <span>Facewash</span>
          <span>✦</span>
          <span>Body Lotion</span> 
          <span>✦</span>
          <span>Bodywash</span>
        </div>

        <div className="flex flex-wrap gap-x-20 mt-2">
          <span>Moisturizers</span>
          <span>✦</span>
          <span>Sunscreens</span>
          <span>✦</span>
          <span>Hair Serum</span>
        </div>
      </div>



    </div>
  );
};

export default Info;
