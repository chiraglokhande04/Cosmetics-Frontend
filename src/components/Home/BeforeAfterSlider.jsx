import { useState, useRef } from "react";
import Before from '../../assets/Before.png'
import After from '../../assets/After.png'

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setPosition(newPosition);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl h-[500px] mx-auto overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
    >
      {/* Before Image */}
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          backgroundImage: `url(${Before})`, // Replace with your before image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `${position}%`,
        }}
      />

      {/* After Image */}
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          backgroundImage: `url(${After})`, // Replace with your after image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Divider */}
      <div
        className="absolute top-0 left-0 h-full bg-white w-1"
        style={{ left: `${position}%` }}
      />

      {/* Slider Button */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 rounded-full p-2 cursor-pointer"
        style={{ left: `${position}%` }}
      >
        ⬌
      </div>

      {/* Labels */}
      <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 p-1 rounded">
        1 day
      </span>
      <span className="absolute bottom-2 right-2 text-white text-sm bg-black bg-opacity-50 p-1 rounded">
        30 days
      </span>
    </div>
  );
}
