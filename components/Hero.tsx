"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 min-h-[100vh] bg-black text-white overflow-hidden"
    >
      <Particles
        id="hero-bg"
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
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Left Section */}
      <div className="z-10 w-full md:max-w-xl text-left space-y-5 md:space-y-6 py-12 md:py-0">
        <div className="text-2xl font-semibold text-cyan-400 flex items-center gap-2">
          <Typewriter
            options={{
              strings: ["Student", "MERN Developer", "DSA Enthusiast", "Next.js Fanboy"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <h1 className="text-[2.2rem] sm:text-[2.5rem] md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
            Kartik Vashishtha
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-md">
          Passionate about crafting immersive digital experiences with MERN, Next.js, and a love for clean UI/UX. Driven by creativity and building projects that make an impact.
        </p>

        <div className="flex flex-wrap gap-4 pt-3">
          <a
            href="https://linkedin.com/in/kartik-vashishtha-7514bb375"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/PtKartikVashishtha"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            <FaTwitter /> Twitter
          </a>
        </div>

        <div className="pt-4">
          <a
            href="/resume_kartik.pdf"
            download="KartikVashishtha_Resume.pdf"
            className="inline-block px-6 py-3 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:brightness-110 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>

            
      <div className="relative md:w-[40%] w-full max-w-[18rem] sm:max-w-[22rem] h-[22rem] sm:h-[28rem] flex justify-start items-center z-10 md:ml-8 mt-12 md:mt-0 mr-18 ">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl flex items-center justify-center bg-black z-10">
          <img
            src="/kartik.png"
            alt="Kartik Avatar"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900 border border-white/10 shadow-xl">
          <img src="/next.svg" alt="Next.js" className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <div className="absolute top-[-4%] -left-6 sm:-left-15 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900 border border-white/10 shadow-xl">
          <img src="/nodejs.svg" alt="Node.js" className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <div className="absolute -bottom-6 left-[5%] sm:-bottom-10 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900 border border-white/10 shadow-xl">
          <img src="/tailwind.svg" alt="Tailwind" className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
        <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900 border border-white/10 shadow-xl">
          <img src="/git.svg" alt="Git" className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>
      </div>

    </section>
  );
}
