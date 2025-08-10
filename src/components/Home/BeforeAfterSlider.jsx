import { useState, useRef } from "react";
import photo from "../../assets/photo.png"; // Replace with your before image path

export default function BeforeAfterSlider() {

  return (
   <div className='w-full h-[910px]'>
    <img
      src={photo} // Replace with your before image path
      alt="Before"
      className="w-full h-full object-cover"
    
      /> 
    </div>
  );
}
