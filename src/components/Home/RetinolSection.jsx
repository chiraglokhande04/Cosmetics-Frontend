import React from "react";
import Img from "../../assets/Rectangle.png"; // Adjust the path as necessary

const RetinolSection = () => {

  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap';
  fontLink.rel = 'stylesheet';
  if (!document.head.querySelector(`link[href="${fontLink.href}"]`)) {
    document.head.appendChild(fontLink);
  }
  
  return (
    <div className="mt-20 flex flex-col md:flex-row bg-[#69795A] h-[649px]  items-center">
      {/* Text Section */}
      <div className="md:w-[592px] p-6 ml-36 ">
        <h1 className="w-full text-4xl md:text-6xl text-white leading-tight"
         style={{
          fontFamily: 'Myriad Pro, Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
        A Saga of Medafem
        </h1>
        <p className=" text-white mt-4 text-[16px] font-extralight">
        Born from the ancient soils of Ayurveda and the restless spirit of modern womanhood, we exist to honor the womb, not as a “problem” but as the pulsating core of life. We are on a mission to help women reconnect with their bodies, understand their cycles, and embrace every phase of womanhood with confidence and care.
        </p>
        <button className="underline mt-6 py-3 text-white d font-extralight transition">
          READ MORE
        </button>
      </div>
      {/* Image Section */}
      <div className=" h-full relative top-[24.48px] -right-28">
        <img
          src={Img}
          alt="Woman with skincare cream"
          className="w-[614px] h-[614px] object-cover"
        />
      </div>
    </div>
  );
};

export default RetinolSection;
