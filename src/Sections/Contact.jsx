import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ProjectSection() {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);
    const [lineWidths, setLineWidths] = React.useState({ top: 0, bottom: 0 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rightX = useTransform(scrollYProgress, [0, 1], ["-90%", "90%"]);
    const lineWidth = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

    useEffect(() => {
        const updateLineWidths = () => {
            if (boxRef.current && sectionRef.current) {
                const containerWidth = window.innerWidth;
                setLineWidths({ top: containerWidth, bottom: containerWidth });
            }
        };

        updateLineWidths();
        window.addEventListener("resize", updateLineWidths);
        return () => {
            window.removeEventListener("resize", updateLineWidths);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative px-[8%] flex items-center justify-center bg-white overflow-hidden"
        >
            <div className="flex flex-col md:flex-row justify-around items-center w-full md:px-8 ">
             <div className="text-[#BBA14F] text-center font-kode w-[100%] sm:w-[50%] z-10 p-8 mb-8 md:mb-0 ">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl md:text-2xl leading-relaxed">
                    I’m always excited to connect with new people and explore opportunities. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
                </p>
             </div>


                {/* Moving Box */}
                <motion.div
                    ref={boxRef}
                    style={{ x: rightX }}
                    className="relative bg-[#BBA14F] text-white flex flex-col items-center h-[60vh] w-[200px] justify-center p-8 md:p-16 overflow-visible"
                >
                    {/* Top Line */}
                    <motion.div
                        style={{
                            width: useTransform(lineWidth, (val) => `${parseFloat(val) * (lineWidths.top / 90)}%`),
                            left: "0px",
                            top: "40px",
                        }}
                        className="absolute h-0.5 bg-[#BBA14F] top-0"
                    />

                    {/* Bottom Line */}
                    <motion.div
                        style={{
                            width: useTransform(lineWidth, (val) => `${parseFloat(val) * (lineWidths.bottom / 50)}%`),
                            right: "0px",
                            bottom: "40px",
                        }}
                        className="absolute h-0.5 bg-[#BBA14F] bottom-0"
                    />

                    {/* Icons */}
                    <div className="flex flex-col items-center gap-6 text-white">
                    <a
                        href="mailto:na216904@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110 hover:text-[#BBA14F] border-white border-1 shadow-md hover:bg-white p-4 rounded-full"
                    >
                        <FaEnvelope size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nadeem21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110 hover:text-[#BBA14F] border-white border-1 shadow-md hover:bg-white p-4 rounded-full"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="tel:+917461855765"
                        className="transition-transform duration-300 hover:scale-110 hover:text-[#BBA14F] border-white border-1 shadow-md hover:bg-white p-4 rounded-full"
                    >
                        <FaPhoneAlt size={24} />
                    </a>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
