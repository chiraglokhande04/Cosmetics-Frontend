import React from "react";
import FixedHeader from "../FixedHeader";
import Img from "../../assets/home2.png"; // Adjust the path as necessary

const Contact = () => {
  return (
    <div className="py-24 w-full relative h-[80vh] bg-white">
      {/* Fixed Header */}

      <FixedHeader />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row  justify-center bg-blue-800  ">
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={Img}
            alt="Personal Help"
            className=" shadow-md h-[460px] w-[460px]  "
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start bg-red-300">
          <h2 className="text-5xl font-bold text-black font">The New Age</h2>
          <h2 className="text-5xl font-bold text-black">Ayurveda</h2>
          <p className="mt-4 text-gray-600 ">
          Our founder, Vara, grew up between myths and medicines, and dreamed of a path that honours both, where ancient herbs meet modern needs. Medafem isn’t only about herbal tonics, it’s a movement.
          </p>
          <button className="h-12 w-36 mt-6 px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition">
            CONTACT
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
