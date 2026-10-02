"use client";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: isMobile ? 30 : 70 },
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
            onHover: { enable: !isMobile, mode: "repulse" },
            resize: true,
          },
        },
      }}
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
}
