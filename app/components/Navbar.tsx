import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed z-10 top-0 left-0 right-0">
      <div className="flex justify-center">
        <div className="flex align-middle flex-row gap-[24px] py-6 px-14 w-full max-w-[1450px] bg-black">
          <div className="flex align-middle flex-grow gap-16 h-20 items-center justify-between opacity-90 bg-white rounded-full">
            <div className="h-[80px] w-[180px]">
              <Link href="/" passHref>
                <img
                  src="Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="flex gap-9 items-center mr-14">
              <a
                href="#"
                className="text-gray-800 hover:text-blue1 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              >
                ABOUT
              </a>

              <a
                href="#"
                className="text-gray-800 hover:text-blue1 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              >
                SERVICES
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue1 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              >
                CHANNELS
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue1 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              >
                CASE STUDIES
              </a>
            </div>
          </div>
          <div className="flex h-20 items-center justify-center w-[133px] bg-blue1 rounded-full hover:bg-blue-800 transition-colors duration-300">
            <button className="text-white text-center">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
