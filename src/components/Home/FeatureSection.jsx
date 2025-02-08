import { FaLeaf } from "react-icons/fa";
import { GiSpray, GiWaterDrop, GiDna1 } from "react-icons/gi";

const FeatureSection = () => {
  const features = [
    { icon: <GiSpray size={50} />, text: "Fragrance-Free" },
    { icon: <FaLeaf size={50} />, text: "Vegan Suitable" },
    { icon: <GiWaterDrop size={50} />, text: "Dermatologist Tested" },
    { icon: <GiDna1 size={50} />, text: "Gentle Formula" },
  ];

  return (
    <div className="my-20 bg-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-14">We Love & We Support</h2>
      <div className="flex justify-center gap-40">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-black">{feature.icon}</div>
            <p className="mt-2 text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
