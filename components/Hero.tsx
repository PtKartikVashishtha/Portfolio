"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 min-h-screen bg-transparent text-white overflow-hidden pt-20"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full md:max-w-2xl text-left space-y-6 py-12 md:py-0"
      >
        <div className="text-xl md:text-2xl font-medium text-cyan-400 flex items-center gap-2">
          <Typewriter
            options={{
              strings: ["Full-Stack Software Engineer", "DSA Practitioner", "AI Integration Enthusiast", "Next.js & React Expert"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Kartik Vashishtha
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
          Full-Stack Software Engineer experienced in production web applications, AI-integrated platforms, and scalable backend systems. Passionate about building seamless UI/UX and optimizing performance.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://linkedin.com/in/kartik-vashishtha-7514bb375"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
          >
            <FaLinkedin className="text-xl" /> <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/PtKartikVashishtha"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all backdrop-blur-sm"
          >
            <FaGithub className="text-xl" /> <span className="font-medium">GitHub</span>
          </a>
          <a
            href="mailto:kartik2005vashishtha@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-pink-500/20 hover:border-pink-500/50 transition-all backdrop-blur-sm"
          >
            <FaEnvelope className="text-xl" /> <span className="font-medium">Email</span>
          </a>
        </div>

        <div className="pt-6">
          <a
            href="/resume_kartik.pdf"
            download="KartikVashishtha_Resume.pdf"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative md:w-[45%] w-full max-w-[20rem] sm:max-w-[25rem] aspect-[4/5] flex justify-center items-center z-10 mt-12 md:mt-0"
      >
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md p-2">
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#111]">
            <img
              src="/kartik.png"
              alt="Kartik Vashishtha"
              className="object-cover object-top w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
        
        {/* Floating Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="hidden sm:flex absolute -top-8 -right-8 w-20 h-20 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <img src="/next.svg" alt="Next.js" className="w-10 h-10 filter invert opacity-80" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
          className="hidden sm:flex absolute top-[10%] -left-10 w-16 h-16 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <img src="/nodejs.svg" alt="Node.js" className="w-10 h-10 opacity-80" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="hidden sm:flex absolute -bottom-6 left-[5%] w-20 h-20 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <img src="/tailwind.svg" alt="Tailwind" className="w-10 h-10 opacity-80" />
        </motion.div>
        
        {/* Additional Floating Badges */}
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
          className="hidden md:flex absolute top-[40%] -right-12 w-16 h-16 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
        >
          <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-8 h-8 opacity-90" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          className="hidden md:flex absolute bottom-[15%] -right-6 w-14 h-14 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
        >
          <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="w-8 h-8 opacity-90" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
          className="hidden md:flex absolute -bottom-10 right-[35%] w-16 h-16 rounded-2xl items-center justify-center bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
        >
          <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-8 h-8 opacity-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}

