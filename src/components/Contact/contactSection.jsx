import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactSection = () => {
  const position = [40.7528, -73.9816]; // New York coordinates

  return (
    <div className="m-20 flex flex-col lg:flex-row w-full max-w-6xl h-auto mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white">
        <h2 className="text-3xl font-bold uppercase mb-6">New York</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phones */}
          <div>
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Phones</h3>
            <p className="text-lg">212-371-8500</p>
            <p className="text-lg">212-371-8555</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Address</h3>
            <p className="text-lg">9 East 40th Street,</p>
            <p className="text-lg">3rd Floor, New York City</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Email</h3>
            <p className="text-lg text-blue-600">newyork@luchiana.com</p>
          </div>

          {/* Social Networks */}
          <div>
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Social Networks</h3>
            <div className="flex space-x-4 text-xl mt-2">
              <a href="#" className="text-black hover:text-gray-700">📘</a> {/* Facebook */}
              <a href="#" className="text-black hover:text-gray-700">📸</a> {/* Instagram */}
              <a href="#" className="text-black hover:text-gray-700">✖️</a> {/* Xing */}
              <a href="#" className="text-black hover:text-gray-700">▶️</a> {/* YouTube */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Map */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <MapContainer center={position} zoom={13} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>New York Office</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactSection;
