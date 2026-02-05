import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import GithubGraph from "../components/sections/GithubGraph";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tech">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <GithubGraph />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
