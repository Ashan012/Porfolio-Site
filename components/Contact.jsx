"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "4a644437-862d-42e6-8dcd-ec594a79154c");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-28
      bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg text-gray-500">Contact</h4>
      <h2 className="text-center text-5xl font-semibold">
        Let’s Build Something Together
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-6 mb-14 text-gray-600">
        Have a project in mind, a job opportunity, or just want to connect? Feel
        free to reach out — I usually respond within 24 hours.
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Tell me about your project or message..."
          required
          className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-black mb-6"
        ></textarea>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mx-auto flex items-center gap-2 px-10 py-3 bg-black text-white rounded-full
          hover:bg-gray-900 transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            ✅ Message sent successfully. I’ll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
