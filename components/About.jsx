import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full px-[12%] py-20 scroll-mt-28">
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg text-gray-500">Introduction</h4>
      <h2 className="text-center text-5xl font-semibold mb-16">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20">
        {/* Image */}
        <div className="w-64 sm:w-80 rounded-3xl">
          <Image
            src={assets.profile_img2}
            alt="Ashan Jameel - MERN Stack Developer"
            className="w-full rounded-3xl"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-gray-600 leading-relaxed">
            I’m a <strong>MERN Stack Developer</strong> with a strong focus on{" "}
            <strong>Next.js</strong>, building fast, scalable, and SEO-optimized
            web applications. I enjoy turning complex ideas into clean,
            user-friendly interfaces while keeping performance and
            maintainability in mind.
            <br />
            <br />
            I’ve worked on real-world projects involving authentication,
            dashboards, REST APIs, and database-driven applications using modern
            React and Next.js architecture.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-xl p-6 cursor-pointer 
                hover:bg-[#fcf4ff] hover:-translate-y-1 transition duration-300"
              >
                <Image src={icon} alt={title} className="w-7 mt-2" />
                <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-4 text-gray-700 font-medium">
            Tools & Technologies
          </h4>
          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                border border-gray-400 rounded-lg cursor-pointer 
                hover:-translate-y-1 transition duration-300"
              >
                <Image src={tool} alt="Development Tool" className="w-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
