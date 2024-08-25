import React from "react";

const ChannelManagementSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:py-24">
        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integrated Channel <br /> Management Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Unlock the power of unified channel management with SIRCLO Commerce,
            the ultimate solution for businesses across industries looking to
            conquer the online marketplace.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-200 text-orange-700 rounded-full px-8 py-4 text-lg font-semibold transition duration-200 ease-in-out hover:bg-orange-300"
          >
            Get in touch →
          </a>
        </div>
        {/* Image Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHnbkXhPR46iJHQK3-n1g_jsjeQurfxSuPQ&s"
            alt="Channel Management"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ChannelManagementSection;
