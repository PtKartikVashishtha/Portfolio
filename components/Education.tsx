"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
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
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="education" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      <Particles
        id="education-bg"
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
            move: { enable: true, speed: 1, direction: "none" },
            },
            interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            },
        }}
        className="absolute inset-0 w-full h-full z-0"
        />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent blur-3xl z-0" />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300 bg-clip-text text-transparent mb-20 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎓 Education
      </motion.h2>

      <div className="relative z-10 max-w-4xl mx-auto pl-6 border-l-[2px] border-dashed border-purple-400/40 space-y-16">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[15px] top-1 w-4 h-4 bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-full shadow-lg" />
            <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 md:p-7 shadow-xl hover:shadow-purple-500/30 transition-all group">
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-300">
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
