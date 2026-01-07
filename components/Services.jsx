import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="w-full px-[12%] py-20 scroll-mt-28">
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg text-gray-500">What I Offer</h4>
      <h2 className="text-center text-5xl font-semibold">My Services</h2>

      {/* Intro */}
      <p className="text-center max-w-2xl mx-auto mt-6 mb-14 text-gray-600">
        I help businesses and startups build modern, high-performance web
        applications using <strong>MERN stack</strong> and{" "}
        <strong>Next.js</strong>, with a strong focus on clean UI, scalability,
        and performance.
      </p>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group border border-gray-300 rounded-xl px-8 py-12 cursor-pointer 
            hover:bg-[#fcf4ff] hover:-translate-y-1 transition duration-300"
          >
            <Image src={icon} alt={title} className="w-10 mb-4" />

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>

            <a
              href={link}
              className="inline-flex items-center gap-2 text-sm mt-6 font-medium text-rose-600"
            >
              Read more
              <Image
                src={assets.right_arrow}
                alt="Arrow icon"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
