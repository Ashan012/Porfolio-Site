import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" sm:mt-5">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="mail icon" className="w-6" />
          ashnajameel518@gmail.com
        </div>
      </div>

      <div className="text-center  border-t border-gray-400 sm:mx-[10%] my-3  ">
        <p>© 2025 Ashan Jameel. All right reserved</p>
        {/* <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Ashan012">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ashan-jameel/">
              LinkedIn
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
