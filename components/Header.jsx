"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-auto lg:h-screen flex flex-col items-center justify-center gap-4 ">
      <div>
        <Image
          src={assets.profile_img1}
          alt="profile image"
          className="rounded-full w-32 mt-28 sm:mt-1 md:mt-3 lg:mt-12"
        />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">
        Hi I'm Ashan Jameel
        <Image src={assets.hand_icon} alt="hand Icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
        frontend web developer based in Karahi
      </h1>
      <p>
        Aspiring Frontend Developer from Karachi, excited to begin my career in
        the software industry and build modern, user-friendly web applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </a>
        <a
          href="/Ashan-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full  flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
