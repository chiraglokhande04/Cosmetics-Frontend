import React from "react";
import photo from "../../assets/bottomImg.png"; // Replace with your before image path


export default function BottomHero() {
  return (
     <div className='w-full h-[885px]'>
        <img
          src={photo} // Replace with your before image path
          alt="Before"
          className="w-full h-full object-cover"
        
          /> 
        </div>
   
  );
}
