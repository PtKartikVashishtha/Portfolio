"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "C/C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "Java", icon: "https://cdn.simpleicons.org/java/007396" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  Frameworks: [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  ],
  "Data & AI": [
    { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
    { name: "EasyOCR", icon: "https://cdn.simpleicons.org/python/ffffff" },
    { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
    { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/ffffff" },
  ],
  Databases: [
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  ],
  "Tools & Cloud": [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Prisma ORM", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
    { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/ffffff" },
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/ffffff" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
  ],
  SEO: [
    { name: "Technical SEO", icon: "https://cdn.simpleicons.org/googlesearchconsole/4285F4" },
    { name: "On-Page SEO", icon: "https://cdn.simpleicons.org/google/4285F4" },
    { name: "Sitemaps", icon: "https://cdn.simpleicons.org/google/ffffff" },
    { name: "Structured Data", icon: "https://cdn.simpleicons.org/json/ffffff" },
  ]
};

type TabKey = keyof typeof skills;
const tabs: TabKey[] = ["Languages", "Frameworks", "Databases", "Tools & Cloud", "Data & AI", "SEO"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("Languages");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="relative bg-transparent text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent blur-3xl z-0" />

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          The technologies, languages, and tools I use to build robust solutions.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mb-16 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-2 flex flex-wrap gap-2 justify-center max-w-4xl backdrop-blur-xl shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm md:text-base rounded-xl font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-[350px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
        >
          {skills[activeTab].map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-4 text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <motion.div
                animate={!isMobile ? { y: [0, -8, 0] } : undefined}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-xl group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  onError={(e) => {
                    // Fallback to a generic code icon if CDN fails
                    e.currentTarget.src = "https://cdn.simpleicons.org/codeigniter/ffffff";
                  }}
                  className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  loading="lazy"
                />
              </motion.div>
              <span className="text-base font-semibold text-gray-300 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


