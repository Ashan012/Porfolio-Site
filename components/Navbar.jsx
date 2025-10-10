"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    menuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scroll > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={` w-full  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo2}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : " bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a className="font-sans" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-sans" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-sans" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-sans" href="#contact">
              Contact us
            </a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          {/* <button>
            <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
          </button> */}
          <a
            href="#contact"
            className="font-sans  hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrowIcon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3">
            <Image
              src={assets.menu_black}
              alt="menu icon"
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={menuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              className="w-5"
              onClick={closeMenu}
            />
          </div>

          <li>
            <a href="#top" className="font-sans" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-sans" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a className="font-sans" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-sans" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-sans" href="#contact" onClick={closeMenu}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </>
    // <div className="w-11/12 mx-auto h-22 flex py-5 mb-10">
    //   <div className="logo w-[20%]">
    //     <Image src={assets.logo} alt="logo" className="w-full" />
    //   </div>
    //   <nav className="w-full">
    //     <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8 rounded-full px-12 py-3 ">
    //       <li>
    //         <a href="#top" className="font-sans">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a className="font-sans" href="#about">
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a className="font-sans" href="#services">
    //           Services
    //         </a>
    //       </li>
    //       <li>
    //         <a className="font-sans" href="#work">
    //           My Work
    //         </a>
    //       </li>
    //       <li>
    //         <a className="font-sans" href="#contact">
    //           Contact us
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="contact  w-[20%]">
    //     <div className="flex gap-4 items-center">
    //       {/* <button>
    //          <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
    //        </button> */}
    //       <a
    //         href="#contact"
    //         className="font-sans  hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
    //       >
    //         Contact
    //         <Image src={assets.arrow_icon} alt="arrowIcon" className="w-3" />
    //       </a>

    //       <button className="block md:hidden ml-3">
    //         <Image
    //           src={assets.menu_black}
    //           alt="menu icon"
    //           className="w-6"
    //           onClick={openMenu}
    //         />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
