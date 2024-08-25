"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Store Operation",
    description:
      "Our team ensures efficient store setup and campaign launches, enhancing your online presence through targeted digital marketing and streamlined operational support.",
    image:
      "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg",
    icon: "/Services/data-collection.png",
  },
  {
    id: 2,
    title: "Campaign Planning",
    description:
      "We develop comprehensive marketing strategies that align with your business goals and drive customer engagement.",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    icon: "/Services/planning.png",
  },
  {
    id: 3,
    title: "Data Analysis",
    description:
      "Gain valuable insights into customer behavior and market trends through our advanced analytics services.",
    image:
      "https://i.pinimg.com/736x/0c/23/fa/0c23fa70d933c44d75ed8bd98eb1e3ca.jpg",
    icon: "/Services/gear.png",
  },
  {
    id: 4,
    title: "Fulfillment Service",
    description:
      "We create high-quality content that resonates with your audience and amplifies your brand message.",
    image: "https://www.rover.com/blog/wp-content/uploads/black-dog-min.jpg",
    icon: "/Services/fulfillment.png",
  },
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % services.length;
      setSelectedService(services[newIndex]);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + services.length) % services.length;
      setSelectedService(services[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-1 lg:py-16 lg:px-6">
      <div>
        <h1 className="text-white font-bold text-4xl ml-5 mb-6">
          End-to-End Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        {/* Left Side: Service Cards (Hidden on small screens) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setCurrentIndex(services.indexOf(service));
              }}
              className={`cursor-pointer border rounded-3xl p-3 shadow-md hover:shadow-lg transition-all duration-300 ${
                selectedService.id === service.id
                  ? "border-blue-400 bg-blue-50 text-blue1"
                  : "border-gray-200 text-black hover:bg-blue-600"
              }`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="rounded-md mb-2"
              />
              <h3
                className={`text-2xl font-semibold mt-3 ${
                  selectedService.id === service.id
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Side: Selected Service Details with Navigation */}
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
          {/* Pagination and Navigation Buttons */}
          <div className="flex justify-between items-center mt-4 md:hidden">
            <span className="text-blue1 text-3xl mt-7">
              {currentIndex + 1} - {services.length}
            </span>
            <div className="flex space-x-2 md:hidden">
              {/* Previous Button */}
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

              {/* Next Button */}
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

export default ServiceSection;
