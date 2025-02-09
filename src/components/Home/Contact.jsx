import React from "react";
import FixedHeader from "../FixedHeader";

const Contact = () => {
  return (
    <div className="py-14 relative h-[80vh] bg-white">
      {/* Fixed Header */}
      
        <FixedHeader/>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center   ">
        <div className="w-full md:w-1/3">
          <img
            src="https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?w=360"
            alt="Personal Help"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-2/5 md:pl-12 mt-6 md:mt-0">
        <h2 className="text-5xl font-bold text-black">Personal</h2>
        <h2 className="text-5xl font-bold text-black">Help for Choosing</h2>
          <p className="mt-4 text-gray-600 ">
            We are lorem ipsum dolor sit amet consectetur. Aliquam turpis ipsum augue varius
            scelerisque. Integer donec purus sit justo. Quisque enim risus vel convallis congue.
          </p>
          <button className="mt-6 px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition">
            CONTACT
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
