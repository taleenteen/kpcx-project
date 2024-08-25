import React from "react";

const VisualMap = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h1 className="text-2xl font-bold mb-10">Omnichannel Ecosystem</h1>
      <div className="relative flex flex-col items-center">
        {/* Your Brand Center */}
        <div className="flex items-center justify-center bg-orange-100 rounded-full w-40 h-40 text-orange-500 font-bold text-xl mb-10">
          Your Brand
        </div>

        {/* Lines connecting to the boxes */}
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-orange-500"></div>
          <div className="absolute left-0 right-0 mx-auto top-1/4 transform w-full h-px bg-orange-500"></div>
          <div className="absolute left-0 right-0 mx-auto bottom-1/4 transform w-full h-px bg-orange-500"></div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-2 gap-20 w-full px-10">
          <div className="flex flex-col items-end">
            <div className="text-orange-500 font-bold">Brand.com</div>
            <p className="text-gray-700 text-right max-w-xs">
              Have direct control of your primary sales channel, allowing you to
              avoid marketplace fees and maintain a cohesive brand experience.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-orange-500 font-bold">Community Commerce</div>
            <p className="text-gray-700 max-w-xs">
              Tap into our communities to promote and sell your products. We
              foster trust and loyalty, driving sales through peer
              recommendations and groups.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-20 w-full px-10 mt-20">
          <div className="flex flex-col items-end">
            <div className="text-orange-500 font-bold">Chat Commerce</div>
            <p className="text-gray-700 text-right max-w-xs">
              Facilitating transactions through WhatsApp, where customers can
              conveniently inquire about and purchase products directly through
              messaging.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-orange-500 font-bold">
              Neighborhood Store Network
            </div>
            <p className="text-gray-700 max-w-xs">
              We partner with small local stores near homes to distribute your
              products. This enables convenient access to products while
              strengthening community ties.
            </p>
          </div>
        </div>

        {/* Additional Boxes for the right side */}
        <div className="grid grid-cols-2 gap-20 w-full px-10 mt-20">
          <div className="flex flex-col items-end">
            <div className="text-orange-500 font-bold">Marketplaces</div>
            <p className="text-gray-700 text-right max-w-xs">
              We oversee your presence and operations on various established
              Indonesian online marketplaces.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-orange-500 font-bold">Social Commerce</div>
            <p className="text-gray-700 max-w-xs">
              Utilize endorsement and influencer marketing strategies on social
              media platforms to promote and sell products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualMap;
