"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const experiences = [
  {
    title: "Full Stack Developer (Part-time)",
    company: "IPU IIF",
    duration: "Mar 2025 – Present",
    description: "Building internal portals and dashboards using React, Node.js, Prisma, and PostgreSQL.",
    link: "https://github.com/PtKartikVashishtha",
  },
  {
    title: "Frontend Developer Intern",
    company: "SyncAndExplore",
    duration: "Jun 2025 – Present",
    description: "Developing frontend interfaces with Next.js and Tailwind CSS, focused on clean UI and performance.",
    link: "https://github.com/PtKartikVashishtha",
  },
];

export default function Experience() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="experience" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      <Particles
        id="experience-bg"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: 60 },
            color: { value: "#06b6d4" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 150,
              color: "#06b6d4",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent mb-16 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💼 Experience
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-[#0f0f0f]/70 backdrop-blur-md p-6 shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between h-[300px]"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300 bg-clip-text text-transparent mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-white/70 font-medium">{exp.company} • {exp.duration}</p>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">{exp.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={exp.link}
                target="_blank"
                className="inline-block text-sm px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition"
              >
                Code ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
