import React from "react";
import { FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Kate Blanchet",
    role: "CEO of Brand",
    img: "https://via.placeholder.com/300x400/555555/FFFFFF", // dark grey
  },
  {
    name: "Mary Parkson",
    role: "Skincare Specialist",
    img: "https://via.placeholder.com/300x400/CFCFCF/FFFFFF", // light grey
  },
  {
    name: "Judy Johnson",
    role: "Makeup Master",
    img: "https://via.placeholder.com/300x400/CFCFCF/FFFFFF",
  },
  {
    name: "Marta North",
    role: "Doctor of Cosmetology",
    img: "https://via.placeholder.com/300x400/CFCFCF/FFFFFF",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-center text-2xl font-normal mb-10">
        Our Professional Team
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-96 object-cover"
            />
            <h3 className="mt-4 text-xl font-light">{member.name}</h3>
            <p className="text-sm text-gray-600 font-light">{member.role}</p>
            <FaInstagram className="mt-2 text-black text-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
