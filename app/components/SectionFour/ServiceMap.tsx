import React from "react";

const ServiceMap = () => {
  const mindmap = {
    picture: "/ServiceMap/Visual_Map.png",
  };

  const cards = [
    {
      title: "Streamline Operation",
      description:
        "We help our clients save costs and resources so they can focus on their core business activities, while we focus on helping them grow online.",
    },
    {
      title: "Enhance E-Commerce Performance",
      description:
        "Leverage industry insights and data-driven marketing techniques to craft strategy that will boost store performance.",
    },
    {
      title: "Optimize Return on Ad Spending (ROAS)",
      description:
        "Optimize ads spending for maximum impact. We make sure that your content is reaching the right audience, at the right place, and at the right time.",
    },
    {
      title: "Exposures to Millions of Potential Customers",
      description:
        "Raise brand awareness through Co-Campaigns, features in multiple Merchant Pages (MCPs), and etc.",
    },
  ];

  const infos = [
    "Operation",
    "Warehouse & Distribution",
    "Campaign & Promotion Planning",
    "Data Analysis",
    "Investment",
    "Product Owner",
    "Managing Content",
  ];

  const results = [
    "Operation",
    "Warehouse & Distribution",
    "Campaign & Promotion Planning",
    "Data Analysis",
  ];

  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-black drop-shadow-2xl mb-8 text-center">
        Benefits to Clients from Using Our Service
      </h1>

      <div className="max-w-6xl mb-12 hidden md:block">
        <img
          src={mindmap.picture}
          alt="Service Map"
          className="w-full h-auto"
        />
      </div>

      <div className="md:hidden w-full mb-12">
        <h2 className="text-xl font-bold mb-4 text-center">
          Without Our Service
        </h2>
        <div className="space-y-4">
          {infos.map((info, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-black">{info}</h3>
              <p className="text-gray-600">Description for {info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full mb-12">
        <h2 className="text-xl font-bold mb-4 text-center">With Our Service</h2>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-black">{result}</h3>
              <p className="text-gray-600">Description for {result}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-blue2 mb-4">{card.title}</h3>
            <p className="text-blue2 font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMap;
