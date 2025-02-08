import React from "react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">Brand</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center h-screen  pt-20">
        <div className="w-full md:w-1/3">
          <img
            src="https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?w=360"
            alt="Personal Help"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
          <h2 className="text-5xl font-bold text-black">Personal Help for Choosing</h2>
          <p className="mt-4 text-gray-600 text-lg">
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
