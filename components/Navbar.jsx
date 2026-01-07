"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-all ${
        scrolled ? "bg-white/60 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#top">
        <Image
          src={assets.logo2}
          alt="Ashan Portfolio Logo"
          className="w-28 cursor-pointer"
          priority
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-sans">
        {["Home", "About", "Services", "Work", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-rose-600 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-8 py-2 border rounded-full hover:bg-black hover:text-white transition"
        >
          Contact
          <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Image src={assets.menu_black} alt="Menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 p-10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <Image src={assets.close_black} alt="Close" className="w-5" />
        </button>

        <ul className="mt-20 flex flex-col gap-6 font-sans">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
