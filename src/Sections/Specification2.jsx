import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectSection() {
    const sectionRef = useRef(null);
    const boxRef = useRef(null); // Ref for the moving box
    const [lineWidths, setLineWidths] = React.useState({ top: 0, bottom: 0 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const rightX = useTransform(scrollYProgress, [0, 1], ["-90%", "90%"]);
    const lineWidth = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);


    // Calculate line widths dynamically on component mount and resize.
    useEffect(() => {
        const updateLineWidths = () => {
            if (boxRef.current && sectionRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();
                const containerWidth = window.innerWidth; // Use window width

                // Make lines longer than the section
                const topWidth = containerWidth;
                const bottomWidth = containerWidth;

                setLineWidths({ top: topWidth, bottom: bottomWidth });
            }
        };

        updateLineWidths(); // Initial calculation
        window.addEventListener("resize", updateLineWidths); // Recalculate on resize

        return () => {
            window.removeEventListener("resize", updateLineWidths); // Cleanup
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative px-[8%] flex items-center justify-center bg-white overflow-hidden"
            
        >
            <div className="flex flex-col md:flex-row justify-around items-center w-full px-4 md:px-8">
                {/* Left Text Section */}

                {/* Right Moving Box */}
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
                        className="absolute h-0.5 bg-[#BBA14F] top-0 "
                    />

                    {/* Bottom Line */}
                    <motion.div
                        style={{
                            width: useTransform(lineWidth, (val) => `${parseFloat(val) * (lineWidths.bottom / 50)}%`),
                            right: "0px",
                            bottom: "40px",
                        }}
                        className="absolute h-0.5 bg-[#BBA14F] bottom-0 "
                    />

                    {/* Box Content */}
                    <h2 className="text-6xl font-bold">20+</h2>
                    <p className="text-xl font-bold tracking-wider mt-4 text-center">
                        COMPLETED<br />PROJECTS
                    </p>
                </motion.div>

                <div className="text-[#BBA14F] text-center font-kode text-2xl md:text-4xl leading-relaxed z-10 my-8 md:mb-0">
                    <p>BUILT WITH PRECISION,</p>
                    <p>DELIVERED WITH PRIDE.</p>
                </div>
            </div>
        </div>
    );
}
