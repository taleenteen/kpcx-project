import React from "react";

const Foot: React.FC = () => {
  const logo = "/Footer-Logo.png";
  const bottominfo = "© 2024 KPCX. All Rights Reserved.";

  return (
    <div className="bg-indigo-950">
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <footer className="p-4 rounded-lg drop-shadow-2xl md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src={logo} className="mr-4 h-8" alt="KPCX Company" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                KPCX
              </span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <a
                  href="#About"
                  className="mr-4 text-sm text-gray1 hover:underline md:mr-6 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="mr-4 text-sm text-gray1 hover:underline md:mr-6 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#Channels"
                  className="mr-4 text-sm text-gray1 hover:underline md:mr-6 "
                >
                  Channels
                </a>
              </li>
              <li>
                <a href="#Faq" className="text-sm text-gray1 hover:underline ">
                  Faq
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray1 sm:text-center ">
            {bottominfo}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Foot;
