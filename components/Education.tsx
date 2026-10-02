"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institute: "University School of Automation & Robotics, GGSIPU",
    duration: "2023 – 2027",
    location: "Delhi, India",
    grade: "CGPA: 9.049",
  },
  {
    degree: "Intermediate (CBSE)",
    institute: "Kendriya Vidyalaya, Muzaffarnagar",
    duration: "2021 – 2022",
    location: "Muzaffarnagar, UP",
    grade: "Percentage: 92.4%",
  },
  {
    degree: "High School (CBSE)",
    institute: "Kendriya Vidyalaya, Muzaffarnagar",
    duration: "2019 – 2020",
    location: "Muzaffarnagar, UP",
    grade: "Percentage: 91%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-12 bg-transparent text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent blur-3xl z-0" />

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Academic <span className="text-pink-400">Background</span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto pl-6 border-l-2 border-dashed border-pink-500/30 space-y-12">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Dot */}
            <div className="absolute -left-[33px] top-4 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.6)]" />

            {/* Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-pink-400 mb-4">{edu.institute}</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-md">{edu.duration}</span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-md">{edu.location}</span>
                <span className="flex items-center gap-1 bg-pink-500/10 text-pink-300 px-3 py-1.5 rounded-md border border-pink-500/20">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

