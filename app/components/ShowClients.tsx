"use client";
import React from "react";
import Image from "next/image";
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
    <section className="max-w-screen-2xl mx-auto mt-14 px-4  lg:px-6">
      <div className="h-[150px] w-full">
        <Marquee
          gradient
          gradientWidth={40}
          gradientColor="rgba(246, 246, 246, 1)"
          pauseOnHover={true}
          className="overflow-hidden w-full"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex pr-10 flex-col justify-center items-center h-[100px] mx-5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                className="w-[100px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default InfiniteScrollLogos;
