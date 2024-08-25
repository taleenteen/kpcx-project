import React from "react";

function Info() {
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
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6">
                <h3 className="text-7xl font-bold text-md mb-6 text-blue1">
                  2m+
                </h3>
                <p className="text-2xl">average monthly orders</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 ">
                <h3 className="text-7xl font-bold text-md mb-6 text-blue1">
                  700+
                </h3>
                <p className=" text-2xl"> brands</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 ">
                <h3 className="text-7xl font-bold text-md mb-6 text-blue1">
                  100+
                </h3>
                <p className=" text-2xl">principals</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 ">
                <h3 className="text-7xl font-bold text-md mb-6 text-blue1">
                  7+
                </h3>
                <p className=" text-2xl">years of experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-2 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12">
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <h2 className="title-font font-bold text-2xl text-blue1 mb-4">
                  Comprehensive Solutions
                </h2>
                <div className="flex justify-center">
                  <img src="/WhyKPCX/14.png" className="w-32 mb-3" />
                </div>
                <h2 className="font-regular text-lg text-black">
                  <strong> Seamless End-to-End service </strong> covering all
                  aspects of online activation
                </h2>
              </div>
            </div>

            <div className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12">
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <h2 className="title-font font-bold text-2xl text-blue1 mb-4">
                  Customizable Strategies
                </h2>
                <div className="flex justify-center">
                  <img src="/WhyKPCX/15.png" className="w-32 mb-3" />
                </div>
                <h2 className="font-regular text-lg text-black">
                  <strong>Data-driven strategies</strong> specifically tailored
                  to meet unique goals and challenges for each business
                </h2>
              </div>
            </div>

            <div className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12">
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <h2 className="title-font font-bold text-2xl text-blue1 mb-4">
                  Advanced Analytics & Reporting
                </h2>
                <div className="flex justify-center">
                  <img src="/WhyKPCX/16.png" className="w-32 mb-3" />
                </div>
                <h2 className=" font-regular text-lg text-black">
                  Leverage{" "}
                  <strong>
                    cutting-edge technology and real-time reporting{" "}
                  </strong>{" "}
                  to track campaign effectiveness
                </h2>
              </div>
            </div>

            <div className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12">
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <h2 className="title-font font-bold text-2xl text-blue1 mb-4">
                  Trusted By Leading Brands
                </h2>
                <div className="flex justify-center">
                  <img src="/WhyKPCX/17.png" className="w-32 mb-3" />
                </div>
                <h2 className="font-regular text-lg text-black">
                  <strong> Delivering resuilts and expertise </strong> through
                  experience of working with numerous world-class brands
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
