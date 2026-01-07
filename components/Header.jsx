"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Header() {
  return (
    <section
      id="top"
      className="pt-28 w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-5"
    >
      {/* Profile Image */}
      <Image
        src={assets.profile_img1}
        alt="Ashan Jameel - MERN Stack Developer"
        className="rounded-full w-32"
        priority
      />

      {/* Intro */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-medium">
        Hi, I’m Ashan Jameel
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </h3>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-semibold leading-tight">
        MERN Stack Developer <br />
        <span className="text-rose-600">Next.js Focused</span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-600 text-base sm:text-lg">
        I build fast, scalable, and SEO-friendly web applications using{" "}
        <strong>MongoDB, Express, React, Node.js</strong> and{" "}
        <strong>Next.js</strong>. Passionate about clean UI, performance, and
        real-world problem solving.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          href="#contact"
          className="px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>

        <a
          href="/Ashan-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
        >
          Download Resume
          <Image
            src={assets.download_icon}
            alt="Download resume"
            className="w-4"
          />
        </a>
      </div>
    </section>
  );
}
