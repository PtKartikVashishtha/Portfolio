"use client";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xanbyavy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch (err) {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-black text-white overflow-hidden">
      <Particles
        id="contact-bg"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#000000" },
          particles: {
            number: { value: 60 },
            color: { value: "#06b6d4" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 3 },
            links: {
              enable: true,
              distance: 140,
              color: "#06b6d4",
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        📬 Get in Touch
      </motion.h2>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-base mb-6">
          Feel free to reach out for collaboration, freelance, or just to say hi!
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://linkedin.com/in/kartik-vashishtha-7514bb375"
            target="_blank"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PtKartikVashishtha"
            target="_blank"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kartik2005vashishtha@gmail.com"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-[#0f0f0f] border border-white/10 px-5 py-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#0f0f0f] border border-white/10 px-5 py-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-[#0f0f0f] border border-white/10 px-5 py-3 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:brightness-110 transition"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </motion.div>

      <a
        href="tel:+917599319302"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        <FaPhoneAlt className="text-xl" />
      </a>

      <ToastContainer position="top-right" theme="dark" />
    </section>
  );
}
