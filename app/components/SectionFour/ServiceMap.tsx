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
    {
      title: "Operation",
    },
    {
      title: "Warehouse & Distribution",
    },
    {
      title: "Campaign & Promotion Planning",
    },
    {
      title: "Data Analysis",
    },
    {
      title: "Investment",
    },
    {
      title: "Product Owner",
    },
    {
      title: "Managing Content",
    },
  ];

  const results = [
    {
      title: "Operation",
    },
    {
      title: "Warehouse & Distribution",
    },
    {
      title: "Campaign & Promotion Planning",
    },
    {
      title: "Data Analysis",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-5">
      <h1 className="text-black drop-shadow-2xl text-start md:text-4xl text-2xl font-bold md:text-center mb-3 md:mb-12">
        Benefits to Clients from Using Our Service
      </h1>
      <div className="max-w-6xl mb-12 hidden md:block">
        <img
          src={mindmap.picture}
          alt="Service Map"
          className="w-full h-auto"
        />
      </div>

      {/* Cards for smaller screens */}
      <div className="max-w-screen-xl md:hidden mx-auto py-8 px-4 lg:py-16 lg:px-6">
        {/* Header Text */}
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-center">
          This is what your task when not using us.
        </h1>

        {/* Card Section */}
        <div className="grid grid-cols-1 gap-8 mx-auto py-4 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {infos.map((cardinfo, index) => (
              <div key={index}>
                <h1 className="text-black font-medium text-xl my-4">
                  {cardinfo.title}
                </h1>
                <p className="text-gray-600">
                  Description for {cardinfo.title}
                </p>
                <div className="border-b border-gray-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto md:hidden py-8 px-4 lg:py-16 lg:px-6">
        {/* Header Text */}
        <h1 className="text-2xl md:text-3xl font-medium mb-8 text-center md:hidden">
          And this is what your task when using us.
        </h1>

        {/* Card Section */}
        <div className="grid grid-cols-1 gap-8 mx-auto py-4 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {results.map((resultsinfo, index) => (
              <div key={index}>
                <h1 className="text-black font-medium text-xl my-4">
                  {resultsinfo.title}
                </h1>
                <p className="text-gray-600">
                  Description for {resultsinfo.title}
                </p>
                <div className="border-b border-gray-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto py-2 md:py-12 px-6 lg:py-16 lg:px-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg shadow-blue1/30 rounded-3xl p-6 flex flex-col items-center text-center overflow-hidden"
            >
              <h3
                className="text-xl font-bold text-blue2 mb-4 z-10"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-blue2 font-light z-10 drop-shadow-2xl "
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
