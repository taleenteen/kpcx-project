"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function ContactNav() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide Navbar
          setShowNavbar(false);
        } else {
          // if scroll up show Navbar
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // smooth scroll when click link
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed z-10 top-0 left-0 right-0 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex justify-center">
        <div className="flex align-middle flex-row gap-[24px] py-6 px-14 w-full max-w-[1450px]">
          <div className="flex flex-grow items-center justify-between opacity-90 bg-white rounded-full">
            <div className="h-[80px] w-[150px]">
              <Link href="/" passHref>
                <img
                  src="Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="hidden pr-14 lg:gap-14 lg:flex gap-6 md:gap-9 items-center">
              <div className="hidden group lg:flex h-20 items-center justify-center min-w-[133px] rounded-full duration-500 bg-gradient-to-tl from-blue2 via-indigo-500 to-blue1 bg-size-200 bg-pos-0 hover:bg-pos-100">
                <Link href="/contact" passHref>
                  <button className="text-white font-medium text-center">
                    Contact Us
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                  </button>
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="block lg:hidden group mr-12 font-medium text-gray-800 hover:text-blue1 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
            >
              CONTACT
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue1"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ContactNav;
