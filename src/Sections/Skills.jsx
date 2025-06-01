import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import SkillsBg from "../assets/Skills-bg.webp";

const skills = [
  { name: "WordPress", percent: 95, color: "#FF6B6B" },
  { name: "React", percent: 85, color: "#4D96FF" },
  { name: "JavaScript", percent: 70, color: "#FFD93D" },
  { name: "Figma", percent: 85, color: "#A66DD4" },
  { name: "HTML", percent: 90, color: "#FF914D" },
  { name: "CSS", percent: 75, color: "#00C49A" },
  { name: "Adobe XD", percent: 80, color: "#FF61A6" },
  { name: "SEO", percent: 70, color: "#6C63FF" },
  { name: "Tailwind", percent: 60, color: "#35BEF8" },
];

export default function SkillsSection() {
  const containerRef = useRef(null);
  const engine = useRef(Matter.Engine.create());
  const [balls, setBalls] = useState([]);
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!size.width || !size.height) return;

    const { Engine, World, Bodies, Runner, Composite } = Matter;

    const engineInstance = engine.current;
    const world = engineInstance.world;

    // Clear previous world
    Composite.clear(world);
    engineInstance.events = {};
    engineInstance.timing.timestamp = 0;

    // Define walls relative to container
    const wallThickness = 50;
    const ground = Bodies.rectangle(
      size.width / 2,
      size.height + wallThickness / 2,
      size.width,
      wallThickness,
      { isStatic: true }
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      size.height / 2,
      wallThickness,
      size.height,
      { isStatic: true }
    );
    const rightWall = Bodies.rectangle(
      size.width + wallThickness / 2,
      size.height / 2,
      wallThickness,
      size.height,
      { isStatic: true }
    );
    World.add(world, [ground, leftWall, rightWall]);

    // Create skill balls
    const newBalls = [];

    skills.forEach((skill, index) => {
      const radius = (skill.percent / 100) * 40 + 20;
      const body = Bodies.circle(
        Math.random() * (size.width - 2 * radius) + radius,
        -index * 100 - 100,
        radius,
        {
          restitution: 0.8,
          friction: 0.5,
          frictionAir: 0.02,
        }
      );
      body.custom = {
        radius,
        text: `${skill.name}\n${skill.percent}%`,
        color: skill.color,
      };
      newBalls.push(body);
      World.add(world, body);
    });

    // Extra white balls
    for (let i = 0; i < 10; i++) {
      const radius = Math.random() * 20 + 10;
      const body = Bodies.circle(
        Math.random() * (size.width - 2 * radius) + radius,
        -400 - i * 80,
        radius,
        {
          restitution: 0.8,
          friction: 0.5,
          frictionAir: 0.02,
        }
      );
      body.custom = {
        radius,
        text: null,
        color: "#FFFFFF",
      };
      newBalls.push(body);
      World.add(world, body);
    }

    setBalls(newBalls);

    const runner = Runner.create();
    Runner.run(runner, engineInstance);

    const updatePositions = () => {
      setBalls([...newBalls]);
      requestAnimationFrame(updatePositions);
    };
    updatePositions();

    return () => {
      Runner.stop(runner);
      Composite.clear(world);
      Engine.clear(engineInstance);
    };
  }, [size]);

  return (
    <section
      className="relative text-white overflow-hidden py-10 flex items-center justify-center bg-cover bg-center bg-fixed px-8 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${SkillsBg})` }}
    >
      <div className="absolute inset-0 bg-cover opacity-10 pointer-events-none" />

      <div className="relative border-2 border-white sm:m-10 max-w-6xl w-full shadow-lg">
        {/* Vertical SKILLS label */}
        <div className="absolute left-[-25px] top-[-2px] z-10 font-kode">
          <div className="clip-vertical-arrow bg-white text-[#BBA14F] font-bold tracking-widest w-12 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12">
            {"SKILLS".split("").map((char, i) => (
              <span key={i} className="leading-[1.75rem] sm:leading-[2rem]">
                {char}
              </span>
            ))}
          </div>
        </div>

        <p className="relative p-5 pl-10 sm:px-15 mb-6 w-[100%] sm:w-[70%] ">
         With a strong foundation in modern web technologies, I specialize in building dynamic, responsive, and user-friendly websites. From WordPress development to crafting interactive UIs with React and JavaScript, I blend creativity with code. My toolkit also includes design tools like Figma and Adobe XD, ensuring pixel-perfect execution and seamless UX.
        </p>

        <div
          ref={containerRef}
          className="w-[100%] sm:w-[70%] h-[50vh] sm:h-[60vh] md:h-[40vh] relative overflow-visible ml-auto"
        >

          {/* Render each ball as a div */}
          {balls.map((ball, idx) => (
            <div
              key={idx}
              className="absolute rounded-full flex items-center justify-center text-center whitespace-pre-wrap font-bold"
              style={{
                width: ball.circleRadius * 2,
                height: ball.circleRadius * 2,
                left: ball.position.x,
                top: ball.position.y,
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle at 30% 30%, ${ball.custom.color}, ${ball.custom.color}AA, ${ball.custom.color}33)`,
                fontSize: ball.custom.radius / 4,
                color: ball.custom.text
                  ? parseInt(ball.custom.color.replace("#", ""), 16) > 0xffffff / 2
                    ? "#000"
                    : "#fff"
                  : "#000",
                boxShadow:
                  "inset -10px -10px 20px rgba(255,255,255,0.2), inset 10px 10px 20px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.5)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {ball.custom.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
