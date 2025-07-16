"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 10);

        let closestSection = "";
        let closestOffset = Infinity;

        navItems.forEach((id) => {
          const el = document.getElementById(id.toLowerCase());
          if (el) {
            const rect = el.getBoundingClientRect();
            const offset = Math.abs(rect.top - 120);
            if (offset < closestOffset && rect.top < window.innerHeight) {
              closestOffset = offset;
              closestSection = id;
            }
          }
        });

        if (closestSection) {
          setActive(closestSection);
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-lg shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-rose-400 to-yellow-300 bg-clip-text text-transparent hover:brightness-125 transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ✦ Kartik
        </motion.a>

        <ul className="hidden md:flex gap-5 md:gap-8 text-sm md:text-base font-medium tracking-tight">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={`#${item.toLowerCase()}`}
                scroll={true}
                className={`transition-colors ${
                  active === item ? "text-cyan-400" : "text-white/80"
                } group-hover:text-cyan-300`}
              >
                {item}
              </Link>
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-transform duration-300 origin-left ${
                  active === item ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              />
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-white text-3xl z-50 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 w-4/5 h-screen bg-black/95 z-40 flex flex-col items-start p-8 gap-8 shadow-2xl"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  active === item ? "text-cyan-400" : "text-white/80"
                } hover:text-cyan-300`}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
