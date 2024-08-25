"use client";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const LogoSlider = () => {
  const images: ImageProps[] = [
    { src: "/BrandLogo/Alpen-01.png", alt: "Alpen" },
    { src: "/BrandLogo/Brook-01.png", alt: "Brook" },
    {
      src: "./BrandLogo/Duncan-Hines-Wilderness-01.png",
      alt: "Duncan Hines Wilderness",
    },
    { src: "./BrandLogo/Fragata-01.png", alt: "Fragata" },
    { src: "./BrandLogo/Hahne-01.png", alt: "Hahne" },
    { src: "/BrandLogo/House-01.png", alt: "House" },
    { src: "/BrandLogo/Makoto-en-01.png", alt: "Makoto EN" },
    { src: "/BrandLogo/McGarrett-01.png", alt: "McGarrett" },
    { src: "/BrandLogo/MICA-01.png", alt: "MICA" },
    { src: "/BrandLogo/Miko-Brand-01.png", alt: "Miko Brand" },
    { src: "/BrandLogo/POST-01.png", alt: "POST" },
    { src: "/BrandLogo/S&W-01.png", alt: "S&W" },
    { src: "/BrandLogo/Shimaya-01.png", alt: "Shimaya" },
    { src: "/BrandLogo/TakanoFood-Okame-01.png", alt: "TakanoFood Okame" },
    { src: "/BrandLogo/Tulip-01.png", alt: "Tulip" },
  ];

  return (
    <div className="relative overflow-hidden max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="absolute top-0 left-0 w-full h-full  z-[2]"></div>
      <div className="absolute top-0 right-0 w-full h-full  z-[2] rotate-180"></div>
      <div className="flex animate-scroll w-[calc(250px*14)]">
        {images.map((image, i) => (
          <div
            key={i}
            className="w-[100px] h-[100px] flex items-center justify-center mx-2"
          >
            <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-full transform scale-[3]"
              />
            </div>
          </div>
        ))}
        {/* Duplicate the slides to create the infinite scrolling effect */}
        {images.map((image, i) => (
          <div
            key={i + images.length}
            className="w-[100px] h-[100px] flex items-center justify-center mx-2"
          >
            <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-full transform scale-[3]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
