"use client";
import React, { useState, useCallback, useMemo } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Store Operation",
    description:
      "Our team ensures efficient store setup and campaign launches, enhancing your online presence through targeted digital marketing and streamlined operational support.",
    image:
      "https://plus.unsplash.com/premium_photo-1687568576764-eb4cb9bad320?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/Services/data-collection.png",
  },
  {
    id: 2,
    title: "Campaign Planning",
    description:
      "We develop comprehensive marketing strategies that align with your business goals and drive customer engagement.",
    image:
      "https://images.unsplash.com/photo-1580795479172-6c29db0fd7c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/Services/planning.png",
  },
  {
    id: 3,
    title: "Data Analysis",
    description:
      "Gain valuable insights into customer behavior and market trends through our advanced analytics services.",
    image:
      "https://plus.unsplash.com/premium_photo-1661434270550-fc467725a2ed?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/Services/gear.png",
  },
  {
    id: 4,
    title: "Fulfillment Service",
    description:
      "We create high-quality content that resonates with your audience and amplifies your brand message.",
    image:
      "https://plus.unsplash.com/premium_photo-1661809792135-71b20e0fca24?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "/Services/fulfillment.png",
  },
];

interface ServiceCardProps {
  service: Service;
  selected: boolean;
  onClick: () => void;
}
// Use service memo for protect re-render
const ServiceCard: React.FC<ServiceCardProps> = React.memo(
  ({ service, selected, onClick }) => (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-3xl p-3 shadow-md hover:shadow-lg transition-all duration-300 ${
        selected
          ? "border-blue-400 bg-blue-50 text-blue1"
          : "border-gray-200 text-black hover:bg-blue-600"
      }`}
    >
      <img
        src={service.icon}
        alt={service.title}
        className="rounded-md mb-2 w-[75px] h-[75px]"
      />
      <h3
        className={`text-2xl font-semibold mt-28 ${
          selected ? "text-gray-800" : "text-white"
        }`}
      >
        {service.title}
      </h3>
    </div>
  )
);

const ServiceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedService = useMemo(() => services[currentIndex], [currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-1 lg:py-16 lg:px-6">
      <div>
        <h1 className="text-white font-bold text-4xl ml-5 mb-6">
          End-to-End Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              selected={selectedService.id === service.id}
              onClick={() => setCurrentIndex(services.indexOf(service))}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 p-4 bg-white border border-gray-200 rounded-3xl shadow-md relative ">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="rounded-xl mb-2 transition-transform duration-300 ease-in-out transform w-full max-h-80 object-cover"
          />

          <h2 className="text-3xl font-bold my-4 md:my-12 transition-transform duration-300 ease-in-out transform">
            {selectedService.title}
          </h2>
          <p className="text-gray-700 font-semibold text-lg transition-transform duration-300 ease-in-out transform">
            {selectedService.description}
          </p>
          <div className="flex justify-between items-center mt-4 md:hidden">
            <span className="text-blue1 text-3xl mt-7">
              {currentIndex + 1} - {services.length}
            </span>
            <div className="flex space-x-2 md:hidden">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`relative flex items-center justify-center w-16 h-16 rounded-full border border-blue1 bg-transparent text-blue1 transition-all duration-300 ease-in-out ${
                  currentIndex === 0
                    ? "bg-gray-300 cursor-not-allowed text-gray-300 border-gray-300"
                    : "hover:bg-blue1 hover:text-white"
                }`}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === services.length - 1}
                className={`relative flex items-center justify-center w-16 h-16 rounded-full border border-blue1 bg-transparent text-blue1 transition-all duration-300 ease-in-out ${
                  currentIndex === services.length - 1
                    ? "bg-gray-300 cursor-not-allowed text-gray-300 border-gray-300"
                    : "hover:bg-blue1 hover:text-white"
                }`}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ServiceCard.displayName = "ServiceCard";

export default ServiceSection;
