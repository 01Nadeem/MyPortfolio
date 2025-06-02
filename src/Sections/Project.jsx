import React, { useState, useEffect } from "react";
import ProjectsBg from "../assets/Projectbg.webp";
import A_Fiber from "../assets/Project images/A_Fiber.webp";
import Birla from "../assets/Project images/Birla.webp";
import Iris from "../assets/Project images/Iris.webp";
import Muppa from "../assets/Project images/Muppa.webp";
import Nirvana from "../assets/Project images/Nirvana.webp";
import PlanIT from "../assets/Project images/PlanIT.webp";
import Sage from "../assets/Project images/Sage.webp";
import Supadha from "../assets/Project images/Supadha.webp";
import Ucchvas from "../assets/Project images/Ucchvas.webp";
import Vybe from "../assets/Project images/Vybe.webp";
import Wave from "../assets/Project images/Wave.webp";

// Reusable Arrow Button
const ArrowButton = ({ direction = "right", onClick }) => {
  const isRight = direction === "right";
  return (
    <button
      onClick={onClick}
      className="group w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white rounded-full bg-transparent hover:bg-white cursor-pointer"
    >
      <span className="text-white text-2xl group-hover:text-[#BBA14F]">
        {isRight ? "→" : "←"}
      </span>
    </button>
  );
};

export default function ProjectsSection() {
  const projects = [
    { name: "A_Fiber", category: "Telcom", image: A_Fiber, link: "https://applefibernet.com/" },
    { name: "Birla", category: "School", image: Birla, link: "https://birlaopenmindsbibinagar.com/"},
    { name: "Iris", category: "Realestate", image: Iris, link: "https://irisbyraghava.world/" },
    { name: "Muppa", category: "Realestate", image: Muppa, link: "https://muppaprojects.com/" },
    { name: "Nirvana", category: "Realestate", image: Nirvana, link: "https://nirvanahomespaces.com/" },
    { name: "PlanIT", category: "Tour and Travel", image: PlanIT, link: "https://planitholidays.co/" },
    { name: "Sage", category: "Realestate", image: Sage, link: "https://sagebyraghava.world/" },
    { name: "Supadha", category: "Realestate", image: Supadha, link: "https://supadha.com/" },
    { name: "Ucchvas", category: "Health care", image: Ucchvas, link: "https://ucchvas.com/" },
    { name: "Vybe", category: "Telecom", image: Vybe, link: "https://vybetelecom.in/" },
    { name: "Wave", category: "Realestate", image: Wave, link: "https://wavebyraghava.world/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Adjust slidesToShow based on screen size
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) =>
        (prev - slidesToShow + projects.length) % projects.length
      );
    } else {
      setCurrentIndex((prev) => (prev + slidesToShow) % projects.length);
    }
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + slidesToShow) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slidesToShow, projects.length]);

  // Slice the projects for display
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <div
      className="relative text-white overflow-hidden flex items-center justify-center bg-cover bg-center bg-fixed p-8 sm:px-8"
      style={{ backgroundImage: `url(${ProjectsBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <div className="relative border-2 border-white p-6 sm:p-10 md:p-16 w-full shadow-lg">
        {/* Vertical Label */}
        <div className="absolute left-[-20px] top-[-2px] z-10 font-kode sm:block">
          <div className="clip-vertical-arrow bg-white text-[#BBA14F] font-bold tracking-widest w-12 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12">
            {"PROJECTS".split("").map((char, i) => (
              <span key={i} className="leading-[1.75rem]">{char}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-left sm:text-[16px] font-mono leading-relaxed px-4 sm:px-12 mb-8">
        Every project here represents a goal achieved — a challenge accepted and delivered with precision. From corporate websites to creative platforms, these builds reflect my passion for quality, performance, and user-first design.
        </p>


        {/* Slider Display */}
        <div className="w-full flex justify-center items-center pl-4 sm:pl-0 gap-6 mb-10">
          {getVisibleProjects().map((proj, i) => (
            <div
              key={i}
              className="relative w-full sm:w-1/2 h-84 bg-white shadow-md"
            >
              <div className="absolute top-[-20px] left-[-10px] w-44 h-13 bg-[#BBA14F] text-black px-4 py-2 shadow-md flex flex-col justify-center">
                <span className="text-md font-bold text-white">{proj.name}</span>
                <span className="text-xs text-white/70">{proj.category}</span>
              </div>
              <div
                className="w-full h-full bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: `url(${proj.image})` }}
              />
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-10px] right-[-1%] w-12 h-12 bg-[#BBA14F] hover:bg-white text-white hover:text-[#BBA14F] shadow-md flex items-center justify-center transition-transform duration-300"
              >
                <span className="transform rotate-45 text-2xl font-bold transition-transform duration-300 hover:rotate-0">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-8 items-center mt-6 px-6 bg-">
          <ArrowButton direction="left" onClick={() => handleArrowClick("left")} />
          <ArrowButton direction="right" onClick={() => handleArrowClick("right")} />
        </div>
      </div>
    </div>
  );
}
