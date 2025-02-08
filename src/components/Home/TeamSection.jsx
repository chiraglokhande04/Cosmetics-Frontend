import React from "react";

const teamMembers = [
  {
    name: "Kate Blanchet",
    role: "CEO of Brand",
    image: "/images/kate.jpg", // Replace with actual image path
  },
  {
    name: "Mary Parkson",
    role: "Skincare Specialist",
    image: "/images/mary.jpg", // Replace with actual image path
  },
  {
    name: "Judy Johnson",
    role: "Makeup Master",
    image: "/images/judy.jpg", // Replace with actual image path
  },
  {
    name: "Marta North",
    role: "Doctor of Cosmetology",
    image: "/images/marta.jpg", // Replace with actual image path
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Our Professional Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="mt-2 flex justify-center">
              <a
                href="#"
                className="text-gray-800 hover:text-black text-xl"
              >
                ⬛ {/* Replace with an actual Instagram icon */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
