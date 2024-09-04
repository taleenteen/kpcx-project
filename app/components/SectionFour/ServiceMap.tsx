import React from "react";
import Image from "next/image";

const ServiceMap = () => {
  const items = [
    { title: "Operation", img: "/ServiceMap/Operation.jpeg" },
    { title: "Warehouse & Distribution", img: "/ServiceMap/Warehouse.jpg" },
    { title: "Campaign Planning", img: "/ServiceMap/Campaign.jpeg" },
    { title: "Data Analysis", img: "/ServiceMap/Data.jpeg" },
    { title: "Investment", img: "/ServiceMap/Investment.jpeg" },
    { title: "Product Owner", img: "/ServiceMap/Product.jpg" },
    { title: "Managing Content", img: "/ServiceMap/Managing.jpeg" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto mt-14 px-4 lg:px-6">
      <div className="max-w-screen-xl mx-auto mt-14 px-4 lg:px-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-start">
          Benefits To Clients From Using Our Service
        </h1>
        <h1 className="text-xl md:text-2xl mt-8 border-t-2 border-black pt-9 text-start">
          The blue Highlight is remaining process when use our service
        </h1>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-1 xl:gap-4 h-full p-4 md:h-96 my-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative group rounded-xl transition duration-500 ease-in-out transform hover:scale-105 ${
              index < 4
                ? "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue2"
                : "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-gray-900"
            } flex items-center justify-center `}
          >
            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-xl w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg "></div>
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white drop-shadow-2xl text-center font-bold text-lg sm:text-lg">
              <h1 className="drop-shadow-2xl shadow-white">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMap;
