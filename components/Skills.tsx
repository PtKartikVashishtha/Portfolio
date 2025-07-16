"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const skills = {
  Frontend: [
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5/ffffff" },
    { name: "CSS", icon: "image.webp" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/f7df1e" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/38B2AC" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "DaisyUI", icon: "./daisy.png" },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    { name: "Zod", icon: "https://cdn.simpleicons.org/zod/000000" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/336791" },
  ],
  Others: [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
    { name: "Markdown", icon: "https://cdn.simpleicons.org/markdown/000000" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  ],
};

type TabKey = keyof typeof skills;
const tabs: TabKey[] = ["Frontend", "Backend", "Others"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("Frontend");

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="skills" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <Particles
        id="skills-bg"
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

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent mb-14 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧠 Tech Stack
      </motion.h2>

      <motion.div
        className="flex justify-center mb-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#181818] border border-white/10 rounded-xl px-4 py-2 flex gap-4 shadow-md backdrop-blur-md">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-[10px] text-sm md:text-base rounded-md font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills[activeTab].map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className="w-24 h-24 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-lg hover:shadow-purple-500/30 transition"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            </motion.div>
            <span className="text-sm font-medium text-white/90">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
