import React from "react";

export default function BackgroundWithButton() {
  const style = {
    width: "48px",
    height: "48px",
    backgroundColor: "#4299e1", // หรือใช้ชื่อสี Tailwind เช่น 'bg-blue-500'
    borderRadius: "0% 100% 100% 0% / 100% 0% 100% 0% ",
  };
  return (
    <div className="relative w-[1280px] h-[821.5px] rounded-[20px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg)",
        }}
      >
        {/* Content over the background */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-white">
            Integrated Channel Management Services
          </h1>
          <p className="mt-4 text-white">
            Unlock the power of unified channel management with SIRCLO Commerce,
            the ultimate solution for businesses across industries looking to
            conquer the online marketplace.
          </p>
        </div>
      </div>
      <div></div>
      <div className="absolute bottom-0 right-0 h-[152px] w-[272px] z-2 bg-white">
        <div className="flex justify-center bottom-0 flex-row h-[104px] align-bottom absolute w-min">
          <div className="w-[48px] relative h-[48] aspect-auto">
            <div className=""></div>
          </div>
        </div>
      </div>
      {/* Button */}
    </div>
  );
}
