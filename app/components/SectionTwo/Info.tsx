import React from "react";

// Define interfaces for the data
interface TopSectionItem {
  src: string;
  text: string;
  value: string;
}

interface BotSectionItem {
  src: string;
  heading: string;
  strong: string;
  content: string;
}

// Data for the top section
const topSectionData: TopSectionItem[] = [
  { src: "/WhyKPCX/revenue.png", text: "Revenue", value: "600%" },
  { src: "/WhyKPCX/web-traffic.png", text: "Visitors", value: "900%" },
  { src: "/WhyKPCX/deal.png", text: "Buyers", value: "900%" },
  { src: "/WhyKPCX/viewer.png", text: "Page views", value: "900%" },
];

// Data for the bottom section
const botSectionData: BotSectionItem[] = [
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
    strong: "Delivering results and expertise",
    content: "through experience of working with numerous world-class brands",
  },
];

const Info: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="flex flex-col md:flex-row mt-8">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800 text-center md:mr-8 mb-6 md:mb-0">
          Why KPCX?
        </h2>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2 text-center md:text-start">
          {topSectionData.map(({ src, text, value }, index) => (
            <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6">
                <div className="mb-4 flex justify-center md:justify-start">
                  <img src={src} className="w-32" alt={text} />
                </div>
                <h3 className="text-7xl font-bold text-md mb-6 text-black">
                  {value}
                </h3>
                <p className="text-2xl">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-2 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {botSectionData.map(({ src, heading, strong, content }, index) => (
            <div
              key={index}
              className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12"
            >
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <h1 className="font-bold text-center text-2xl text-gray1">
                  {heading}
                </h1>
                <div className="flex justify-center my-6">
                  <img src={src} alt={heading} className="w-36" />
                </div>
                <h2 className="font-regular text-start text-lg text-gray-200">
                  <strong className="drop-shadow-2xl">{strong}</strong>{" "}
                  {content}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Info);
