"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { Engine } from "tsparticles-engine";

const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institute: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    duration: "2023 – 2027",
    location: "Delhi, India",
    grade: "CGPA: 9.255",
  },
  {
    degree: "Class 12th – PCM (CBSE)",
    institute: "Kendriya Vidyalaya, Muzaffarnagar",
    duration: "2022 – 2023",
    location: "Muzaffarnagar, UP",
    grade: "Percentage: 92.4%",
  },
  {
    degree: "Class 10th – CBSE",
    institute: "Kendriya Vidyalaya, Muzaffarnagar",
    duration: "2020 – 2021",
    location: "Muzaffarnagar, UP",
    grade: "Percentage: 91%",
  },
];

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >
      <Particles
        id="education-bg"
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

      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-2xl z-0" />

      {/* Heading */}
      <motion.h2
        className="text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] font-extrabold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300 bg-clip-text text-transparent mb-16 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎓 Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto pl-6 border-l-[2px] border-dashed border-purple-400/40 space-y-12">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Dot */}
            <div className="absolute -left-[15px] top-2 w-4 h-4 bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-full shadow-md" />

            {/* Card */}
            <div className="bg-[#0f0f0f]/80 border border-white/10 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-purple-500/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300 bg-clip-text text-transparent">
                {edu.degree}
              </h3>
              <p className="text-sm text-white/70 font-medium mt-1">{edu.institute}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-300">
                <span>{edu.duration}</span>
                <span>{edu.location}</span>
                <span>{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
