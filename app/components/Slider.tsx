"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteScrollLogos: React.FC = () => {
  const images = [
    { src: "/BrandLogo/Alpen.png", alt: "Alpen" },
    { src: "/BrandLogo/Brook.png", alt: "Brook" },
    { src: "/BrandLogo/Duncan-Hines.png", alt: "Duncan Hines Wilderness" },
    { src: "/BrandLogo/Fragata.png", alt: "Fragata" },
    { src: "/BrandLogo/HAHNE.png", alt: "Hahne" },
    { src: "/BrandLogo/House.png", alt: "House" },
    { src: "/BrandLogo/Makoto-en.png", alt: "Makoto EN" },
    { src: "/BrandLogo/McGarrett.png", alt: "McGarrett" },
    { src: "/BrandLogo/MICA.png", alt: "MICA" },
    { src: "/BrandLogo/Miko-Brand.png", alt: "Miko Brand" },
    { src: "/BrandLogo/Post.png", alt: "POST" },
    { src: "/BrandLogo/S&W.png", alt: "S&W" },
    { src: "/BrandLogo/Shimaya.png", alt: "Shimaya" },
    { src: "/BrandLogo/Remia.png", alt: "Remia" },
    { src: "/BrandLogo/TakanoFood.png", alt: "TakanoFood Okame" },
    { src: "/BrandLogo/Tulip.png", alt: "Tulip" },
  ];

  return (
    <section className="flex h-max-w-screen-3xl justify-center items-center w-screen">
      <div className="h-[100px] rounded-2xl w-1/2">
        <Marquee
          gradient
          pauseOnHover={true}
          className=" rounded-2xl py-3 overflow-hidden"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex pr-10 flex-col justify-center items-center h-[100px] mx-5"
            >
              <img src={image.src} alt={image.alt} className="w-[100px]" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default InfiniteScrollLogos;
