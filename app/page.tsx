import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import GithubGraph from "./components/GithubGraph";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar /> {/* 2. Add Navbar at the top */}
      {/* 3. Add IDs to sections so Navbar links work */}
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
