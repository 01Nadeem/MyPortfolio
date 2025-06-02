import React from "react";
import Aboutbg from "../assets/About-bg.webp"; // your actual image path

export default function AboutSection() {
  return (
    <div
      className="relative text-white overflow-hidden flex items-center justify-center bg-cover bg-center bg-fixed p-8 sm:p-6 md:p-10"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-[#BBA14F] opacity-70 z-0" />

      {/* Main Card */}
      <div className="relative border-2 border-white p-4 sm:p-6 md:p-8 lg:p-12 sm:m-10 max-w-4xl w-full shadow-lg z-10">

        {/* Vertical ABOUT */}
        <div className="absolute left-[-25px] top-[-2px] z-20 font-kode">
          <div className="clip-vertical-arrow bg-white text-[#BBA14F] font-bold tracking-widest w-12 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12">
            {"ABOUT".split("").map((char, i) => (
              <span key={i} className="leading-[1.75rem] sm:leading-[2rem]">{char}</span>
            ))}
          </div>
        </div>

        {/* Text */}
        <p className="text-center text-[16px] sm:text-[17px] md:text-[18px] font-medium px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 m-2 sm:m-4 leading-relaxed font-mono">
          I'm a passionate Web Developer with a strong focus on building clean, responsive, and user-friendly digital experiences. With a background in both WordPress and React development, I combine creativity with technical expertise to deliver high-quality websites and interfaces. I enjoy turning complex problems into simple, elegant solutions—and I’m always looking to grow and learn in this ever-evolving tech landscape.
        </p>

      </div>
    </div>
  );
}
