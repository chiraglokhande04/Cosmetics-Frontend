import React from 'react'

const FixedHeader = () => {
  return (
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
  )
}

export default FixedHeader