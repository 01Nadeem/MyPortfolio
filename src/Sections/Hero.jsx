import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/nadeem.webp";
import profileImageMobile from "../assets/Nadeem-mobile.webp";
import ProfileImg from "../assets/LOGO.webp";
import TypedText from "./TypedText"; // 👈 Import custom typing

export default function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="bg-white w-full font-kode overflow-hidden p-4 border border-[#BBA14F]"
    >
      {/* Grid Container */}
      <div className="grid sm:grid-cols-2 items-start">
        {/* Left Section */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="relative w-full h-[70px] mb-4">
            <div
              className="absolute top-0 left-0 h-full bg-[#BBA14F]"
              style={{
                width: "100%",
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
              }}
            ></div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-2 left-6 w-[70px] h-[70px] rounded-full bg-white border-2 border-[#BBA14F] flex items-center justify-center overflow-hidden shadow-md"
            >
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 p-4 sm:p-6 z-2">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-[6vw] sm:text-[2vw] tracking-widest"
            >
              I'M
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="origin-left w-full sm:w-[60vw] h-[1px] bg-[#BBA14F]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[22vw] sm:text-[8vw] font-black leading-none"
            >
              <span>NADEEM</span>
              <br />
              <span>ASHRAF</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="origin-left w-full sm:w-[65vw] h-[1px] bg-[#BBA14F]"
            />

            {/* Custom Typed Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-[5vw] sm:text-[2vw]"
            >
              <TypedText />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="origin-left w-full sm:w-[70vw] h-[1px] bg-[#BBA14F]"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="flex justify-center items-end mt-8 sm:mt-0"
        >
          <img
            src={profileImageMobile}
            alt="Nadeem Ashraf (Mobile)"
            className="object-cover drop-shadow-md max-h-[100vh] sm:hidden transition-transform duration-500 hover:scale-105"
          />
          <img
            src={profileImage}
            alt="Nadeem Ashraf"
            className="object-cover drop-shadow-md max-h-[100vh] hidden sm:block transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
