"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer (Part-time)",
    company: "IPU IIF",
    duration: "Mar 2025 – Dec 2025",
    location: "Delhi",
    description: "Engineered and shipped 10+ SEO-friendly features using React, Node.js, TypeScript, SQL, and scalable REST APIs, improving maintainability. Collaborated with a 5+ member development team on production code, debugging, and deployment.",
    link: "https://github.com/PtKartikVashishtha",
  },
  {
    title: "Frontend Developer",
    company: "SyncAndExplore",
    duration: "Jul 2025 – Aug 2025",
    location: "Remote",
    description: "Built 8+ responsive, mobile-first interfaces using React and Tailwind CSS, integrating REST APIs for dynamic data rendering and reusable frontend components.",
    link: "https://github.com/PtKartikVashishtha",
  },
  {
    title: "Co-Lead — Web Development Team",
    company: "Arham, GGSIPU",
    duration: "2024 – Present",
    location: "Delhi",
    description: "Mentored 5+ junior developers in React and Node.js, leading code reviews, technical implementation, reusable architecture, and project decisions.",
    link: "https://github.com/PtKartikVashishtha",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 bg-transparent text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Professional <span className="text-purple-400">Experience</span>
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-medium text-cyan-400">{exp.company}</span>
                  <span className="text-gray-500">• {exp.location}</span>
                </div>
              </div>
              <div className="bg-white/10 px-3 py-1 rounded-full w-fit">
                <span className="text-sm font-medium text-gray-300">{exp.duration}</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
