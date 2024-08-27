import React from "react";

const Info: React.FC = () => {
  // Data for the top section
  const topSectionData = [
    {
      src: "/WhyKPCX/revenue.png",
      text: "average monthly orders",
      value: "2m+",
    },
    { src: "/WhyKPCX/web-traffic.png", text: "web traffic", value: "700+" },
    { src: "/WhyKPCX/deal.png", text: "deals", value: "100+" },
    { src: "/WhyKPCX/viewer.png", text: "viewers", value: "7+" },
  ];

  // Data for the bottom section
  const botSectionData = [
    {
      src: "/WhyKPCX/14.png",
      heading: "Comprehensive Solutions",
      strong: "Seamless End-to-End service",
      content: "covering all aspects of online activation",
    },
    {
      src: "/WhyKPCX/15.png",
      heading: "Customizable Strategies",
      strong: "Data-driven strategies",
      content:
        "specifically tailored to meet unique goals and challenges for each business",
    },
    {
      src: "/WhyKPCX/16.png",
      heading: "Advanced Analytics & Reporting",
      strong: "Leverage cutting-edge technology and real-time reporting",
      content: "to track campaign effectiveness",
    },
    {
      src: "/WhyKPCX/17.png",
      heading: "Trusted By Leading Brands",
      strong: "Delivering results and expertise ",
      content: "through experience of working with numerous world-class brands",
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="flex flex-col md:flex-row mt-8">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800 text-center">
              Why KPCX?
            </h2>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2 text-center md:text-start">
            {topSectionData.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                <div className="h-full py-4 px-6">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <img src={item.src} className="w-32" alt={item.text} />
                  </div>
                  <h3 className="text-7xl font-bold text-md mb-6 text-black">
                    {item.value}
                  </h3>
                  <p className="text-2xl">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-2 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            {botSectionData.map((item, index) => (
              <div
                key={index}
                className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12"
              >
                <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                  <h1 className="font-bold text-center text-2xl text-gray1">
                    {item.heading}
                  </h1>
                  <div className="flex justify-center my-6">
                    <img src={item.src} alt={item.heading} className="w-36" />
                  </div>

                  <h2 className="font-regular text-start text-lg text-gray-200">
                    <strong className="drop-shadow-2xl">{item.strong}</strong>{" "}
                    {item.content}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
