"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const projects = [
  {
    name: "Medium Blogging Platform",
    desc: "Built with MERN stack & Markdown support. Fully responsive with comments and auth.",
    link: "https://medium-frontend-eight.vercel.app/",
  },
  {
    name: "Dummy Transaction Simulator",
    desc: "Firebase + React-based simulator for dummy transfers with live balance tracking.",
    link: "https://github.com/PtKartikVashishtha/Transanction-with-Random-dummy-money",
  },
  {
    name: "Crypto Transfer UI",
    desc: "UI for single-command crypto simulation built in Next.js with local transaction history.",
    link: "https://github.com/PtKartikVashishtha/crypto-transfer-ui-single-command",
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="project-bg"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: isMobile ? 20 : 60 },
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
            move: { enable: true, speed: 0.6 },
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

      {/* Radial Glow (behind content) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-black to-transparent blur-2xl pointer-events-none z-0" />

      {/* Section Heading */}
      <motion.h2
        className="text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-center bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-yellow-300 bg-clip-text text-transparent mb-14 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💎 Featured Work
      </motion.h2>

      {/* Projects Grid */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#10101d] to-[#0f0f0f] shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden hover:shadow-cyan-500/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Project Index Bubble */}
            <div className="absolute -top-2 -left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-black font-bold text-sm flex items-center justify-center shadow z-20">
              {i + 1}
            </div>

            {/* Border glow hover ring */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-500 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm pointer-events-none" />

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-300 group-hover:text-white transition">
              {proj.name}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {proj.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
