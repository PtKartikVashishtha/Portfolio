import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact/>
    </main>
  );
}
