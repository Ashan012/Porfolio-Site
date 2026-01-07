import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className="w-full px-[12%] py-20 scroll-mt-28">
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg text-gray-500">Portfolio</h4>
      <h2 className="text-center text-5xl font-semibold">Featured Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-6 mb-14 text-gray-600">
        A selection of real-world projects built using{" "}
        <strong>React, Next.js, and the MERN stack</strong>, focusing on
        performance, scalability, and clean user experience.
      </p>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="group rounded-xl overflow-hidden border border-gray-300 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{project.tech}</span>

                <div className="border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="View project"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700
        rounded-full py-3 px-10 mx-auto mt-20 hover:bg-[#fcf4ff] transition"
      >
        Let’s Work Together
        <Image src={assets.right_arrow_bold} alt="Arrow" />
      </a>
    </section>
  );
}
