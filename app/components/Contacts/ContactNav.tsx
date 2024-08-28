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
          <div className="flex flex-grow items-center justify-between bg-white rounded-full">
            <div className="h-[80px] w-[150px]">
              <Link href="/" passHref>
                <img
                  src="Logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ContactNav;
