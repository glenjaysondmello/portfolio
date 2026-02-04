import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
