"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: string;
  desc: string;
  link?: string;
  github?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "Shree Nakshatralok — Astrology Platform",
    desc: "Fully optimized Next.js astrology platform achieving 100/100 SEO & 94/100 Performance. Improved frontend render-blocking and JS payload.",
    link: "https://shree-nakshatralok.vercel.app",
    tech: ["Next.js", "SEO", "Performance"]
  },
  {
    name: "FinAgent — Banking AI Platform",
    desc: "Developed an admin panel for a banking AI platform integrating backend APIs and dynamic live data.",
    link: "https://fin-agent-delta.vercel.app/admin/",
    tech: ["React", "APIs", "Admin Dashboard"]
  },
  {
    name: "Developer Portfolio",
    desc: "High-performance personal portfolio built with Next.js 15 App Router, React 19, Tailwind v4, tsParticles, and Framer Motion.",
    link: "https://portfolio-five-alpha-44.vercel.app",
    github: "https://github.com/PtKartikVashishtha/Portfolio",
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "Framer Motion"]
  },
  {
    name: "Turing Machine Simulator",
    desc: "Interactive visual simulator and execution engine for Turing machines, modeling finite state automata, transition functions, and tape dynamics.",
    github: "https://github.com/PtKartikVashishtha/turing-machine",
    tech: ["TypeScript", "Automata Theory", "Algorithms", "React"]
  },
  {
    name: "Becopy — AI-Powered Coding Platform",
    desc: "Full-stack platform with AI code tools, community, and JWT/NextAuth. Integrated OpenAI APIs for generation and conversion.",
    github: "https://github.com/PtKartikVashishtha",
    tech: ["Next.js", "Express", "OpenAI", "MongoDB"]
  },
  {
    name: "LivingTrustSwarm",
    desc: "AI-powered risk assessment platform for B2B travel agencies. ML integrations with real-time dashboards.",
    github: "https://github.com/PtKartikVashishtha",
    tech: ["Next.js", "FastAPI", "WebSockets"]
  },
  {
    name: "Paytm-Like Money Transfer App",
    desc: "Implemented atomic deposits, withdrawals, and race-condition-safe balance updates for concurrent transactions.",
    github: "https://github.com/PtKartikVashishtha",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL"]
  },
  {
    name: "Medium Clone",
    desc: "Full-stack blogging platform deployed with Vercel and Cloudflare Workers for scalable edge API performance.",
    link: "https://medium-frontend-eight.vercel.app/",
    github: "https://github.com/PtKartikVashishtha",
    tech: ["Next.js", "Prisma Accelerate", "Neon DB"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-transparent text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A showcase of my recent full-stack applications, AI integrations, and performance-optimized platforms.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📁</span>
                </div>
                <div className="flex items-center gap-2">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                      title="View Source Code"
                      aria-label={`View source code for ${proj.name}`}
                    >
                      <FaGithub className="text-base" />
                    </a>
                  )}
                  {proj.link && proj.link !== proj.github && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 transition-all"
                      title="Open Live Link"
                      aria-label={`Open live link for ${proj.name}`}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">
                <a
                  href={proj.link || proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {proj.name}
                </a>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
              {proj.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

