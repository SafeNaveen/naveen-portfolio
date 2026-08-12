import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/MySkills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Certifications />

      <Education />

      <Contact />
    </main>
  );
}