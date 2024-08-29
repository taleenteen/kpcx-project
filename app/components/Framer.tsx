import React from "react";
import Link from "next/link";

export default function BackgroundWithButton() {
  return (
    <div className="relative w-[1200px] h-[821.25px] rounded-[30px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0  bg-black bg-opacity-25">
          {/* Make background black opacity */}
        </div>

        <div className="flex flex-col items-start justify-center h-full p-8 drop-shadow-2xl">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Make E-commerce <br /> simple and accesible
            </h1>
            <p className="mt-4 text-xl font-medium text-white">
              Unlock your E-commerce potential with KPCX&#44; a one-stop <br />
              service solution to all things E-commerce.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="absolute w-[60px] h-[60px] bg-transparent bottom-0 right-[215px] rounded-[30px] z-3 shadow-[30px_30px_0px_rgba(255,255,255,1)]"></div>
      <div className="absolute w-[60px] h-[60px] bg-transparent bottom-24 right-0 rounded-[30px] z-3 shadow-[30px_30px_0px_rgba(255,255,255,1)]"></div>
      <div className="absolute w-[60px] h-[60px] bg-white bottom-0 right-0 rounded-[30px] z-1 shadow-[30px_30px_0px_rgba(255,255,255,1)]"></div>
      <div className="absolute bottom-0 right-0 h-[96px] w-[215px] z-2 bg-white rounded-tl-[50px]">
        {" "}
        <div className="flex justify-center items-center h-full">
          <Link href="/contact" passHref>
            <button className="group lg:flex w-48 text-white font-bold h-20 items-center justify-center rounded-full duration-500 bg-gradient-to-tl from-blue2 via-indigo-500 to-blue1 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
