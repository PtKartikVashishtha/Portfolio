"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { Engine } from "tsparticles-engine";

const experiences = [
  {
    title: "Full Stack Developer (Part-time)",
    company: "IPU IIF",
    duration: "Mar 2025 – Present",
    description:
      "Building internal portals and dashboards using React, Node.js, Prisma, and PostgreSQL.",
    link: "https://github.com/PtKartikVashishtha",
  },
  {
    title: "Frontend Developer Intern",
    company: "SyncAndExplore",
    duration: "Jun 2025 – Present",
    description:
      "Developing frontend interfaces with Next.js and Tailwind CSS, focused on clean UI and performance.",
    link: "https://github.com/PtKartikVashishtha",
  },
];

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      <Particles
        id="experience-bg"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: isMobile ? 15 : 50 },
            color: { value: "#06b6d4" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 3 },
            links: {
              enable: !isMobile,
              distance: 140,
              color: "#06b6d4",
              opacity: 0.25,
              width: 1,
            },
            move: { enable: true, speed: 0.7 },
          },
          interactivity: {
            events: {
              onHover: { enable: !isMobile, mode: "repulse" },
              resize: true,
            },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Section Heading */}
      <motion.h2
        className="text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent mb-14 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💼 Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-[#0f0f0f]/70 backdrop-blur-md p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300 bg-clip-text text-transparent mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-white/70 font-medium mb-2">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
            >
              Code ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
