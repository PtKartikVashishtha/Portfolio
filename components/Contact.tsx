"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    } catch {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-transparent text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent blur-3xl z-0" />

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Open to collaborations, freelance opportunities, or a friendly hello!
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-6 mb-12 text-2xl text-white">
          <a
            href="https://linkedin.com/in/kartik-vashishtha-7514bb375"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PtKartikVashishtha"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-purple-400 hover:border-purple-400/50 transition-all"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:kartik2005vashishtha@gmail.com"
            aria-label="Send Email"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-pink-400 hover:border-pink-400/50 transition-all"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+917599319302"
            aria-label="Direct Phone Call"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
            title="Call (+91 7599319302)"
          >
            <FaPhoneAlt />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl mx-auto bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-white/5 border border-white/10 px-5 py-3.5 rounded-xl w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-white/5 border border-white/10 px-5 py-3.5 rounded-xl w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 px-5 py-3.5 rounded-xl w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </motion.div>

      <ToastContainer position="top-right" theme="dark" />
    </section>
  );
}

