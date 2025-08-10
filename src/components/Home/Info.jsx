import React from "react";
import img1 from "../../assets/horizontal1.png"; // Adjust the path as necessary
import img2 from "../../assets/horizontal2.png"; // Adjust the path as necessary
import img3 from "../../assets/horizontal3.png"; // Adjust the path as necessary
import img4 from "../../assets/horizontal4.png"; // Adjust the path as necessary
import avocadoImg from "../../assets/avocado.png"; // Adjust the path as necessary
import washImg from "../../assets/washingface.png"; // Adjust the path as necessary

const Info = () => {

  const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap';
fontLink.rel = 'stylesheet';
if (!document.head.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

  return (
    <div className="relativ text-center w-full py-12">
      {/* Press Mentions */}
      <div className="flex justify-center space-x-40 text-gray-800 text-2xl mb-14">
        <span className='h-[24px] w-[182.71px]'>Press about us</span>
        <span className='h-[23.5px] w-[112px]'><img src={img1} /></span>
        <span className='h-[24.88px] w-[99px]'><img src={img2} /></span>
        <span className='h-[25.13px] w-[120px]'><img src={img3} /></span>
        <span className='h-[24.63px] w-[86px]'><img src={img4} /></span>
       
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl md:text-[43px] font-light leading-snug px-32 mx-auto"
      style={{
        fontFamily: 'Myriad Pro, Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
      Our formulas are crafted using powerful Ayurvedic {" "}
        <span className="inline-block w-20 h-20 align-middle">
          <img
            src={avocadoImg} 
            alt="Ingredient"
            className="rounded-full w-20 h-20"
          />
        </span>{" "}
        herbs like Lodhra, Ashoka, and{" "}
        <span className="inline-block  w-20 h-20   align-middle">
          <img
            src={washImg}
            alt="Skincare"
            className="rounded-full w-20 h-20"
          />
        </span>{" "}
        Gokshura- known for their natural ability to support hormonal balance, menstrual comfort, comfort, and overall reproductive wellness.
      </h1>

      {/* Product Categories */}
      <div className="w-full flex flex-col justify-center items-center font-light  mt-14 text-3xl text-gray-600">
        <div className="flex flex-wrap gap-x-20">
          <span>Nurturing</span>
          <span className='font-light text-[10px] relative top-3'>✦</span>
          <span>Fierce</span>
          <span className='font-light text-[10px] relative top-3'>✦</span>
          <span>Authentic</span> 
          <span className='font-light text-[10px] relative top-3'>✦</span>
          <span>Innovative</span>
        </div>
      </div>



    </div>
  );
};

export default Info;
