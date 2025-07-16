"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { Engine } from "tsparticles-engine";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <footer className="relative bg-black text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-t border-white/10">
      <Particles
        id="footer-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: isMobile ? 20 : 60 },
            color: { value: "#06b6d4" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 2.5 },
            links: {
              enable: !isMobile,
              distance: 130,
              color: "#06b6d4",
              opacity: 0.25,
              width: 1,
            },
            move: { enable: true, speed: 0.8 },
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

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-2xl z-0" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/kartik-vashishtha-7514bb375"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PtKartikVashishtha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kartik2005vashishtha@gmail.com"
            className="text-white hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Kartik Vashishtha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
