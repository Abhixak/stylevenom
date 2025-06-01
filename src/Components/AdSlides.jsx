import React, { useState, useEffect } from "react";

import slideimg1 from "../assets/slideimg1.jpg";
import slideimg2 from "../assets/slideimg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";
import slideimg6 from "../assets/slideimg6.jpg";
import slideimg7 from "../assets/slideimg7.jpg";

const images = [
  slideimg1,
  slideimg2,
  slideimg3,
  slideimg4,
  slideimg5,
  slideimg6,
  slideimg7,
];

const AdSlides = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full !mt-10">
      <div className="w-[95%] h-[300px] bg-[#ffe7ec] md:h-[500px] overflow-hidden flex items-center justify-between rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-[30%] rounded-xl h-full object-cover transition-all duration-1000 ease-in-out"
        />

        <div className="!mr-[25%] text-[3em]">
          <h1 >SHOP NOW</h1>
        </div>
      </div>
    </div>
  );
};

export default AdSlides;
