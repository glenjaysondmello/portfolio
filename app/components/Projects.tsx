"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink, Code2, Layers, Cpu } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ... (Your project data array remains exactly the same) ...
const projects = [
  {
    title: "PhishGuard",
    category: "Browser Security Extension",
    description: "Real-time anti-phishing extension...",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux"],
    color: "from-blue-600 to-cyan-500",
    icon: <Layers className="w-6 h-6" />,
    link: "#",
    github: "#",
  },
  {
    title: "Fluent Edge",
    category: "AI-Powered Learning Platform",
    description: "Cross-platform Flutter app...",
    tags: ["Flutter", "NestJS", "PostgreSQL", "GraphQL", "AI/ML"],
    color: "from-violet-600 to-indigo-500",
    icon: <Cpu className="w-6 h-6" />,
    link: "#",
    github: "#",
  },
  {
    title: "QOSMOS",
    category: "Quantum Computing Simulator",
    description: "Interactive web simulator...",
    tags: ["JavaScript", "Firebase", "Quantum Algo", "Interactive UI"],
    color: "from-emerald-600 to-teal-500",
    icon: <Code2 className="w-6 h-6" />,
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
        // Check if this is the last card in the stack
        const isLastCard = index === cards.length - 1;

        ScrollTrigger.create({
          trigger: card,
          start: "top top+=100",
          end: "bottom top",
          pin: true,
          // FIX: Only reserve spacing for the LAST card.
          // This allows previous cards to stack, but pushes the Contact section down.
          pinSpacing: isLastCard ? true : false,
          scrub: true,
        });

        gsap.to(card, {
          scale: 0.95,
          opacity: 1, // Keep opacity high so we don't see overlap issues
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top+=100",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Projects.
            </span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        <div className="flex flex-col items-center gap-10 pb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card sticky top-24 w-full max-w-4xl bg-card-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                zIndex: index + 1,
                marginTop: index * 20,
                backgroundColor: "#0a0a0a", // Solid background to prevent see-through text
              }}
            >
              {/* Card content remains exactly as you had it */}
              <div className="grid md:grid-cols-2 h-full min-h-[500px]">
                <div className="p-8 md:p-12 flex flex-col justify-between relative">
                  <div
                    className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-[80px] opacity-40`}
                  />
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-gray-400 text-sm font-medium tracking-wider uppercase">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10 text-white`}
                      >
                        {project.icon}
                      </div>
                      {project.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium group"
                    >
                      <Github size={20} />{" "}
                      <span className="border-b border-transparent group-hover:border-accent">
                        View Code
                      </span>
                    </Link>
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium group"
                    >
                      <ExternalLink size={20} />{" "}
                      <span className="border-b border-transparent group-hover:border-accent">
                        Live Demo
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`relative hidden md:flex items-center justify-center bg-gradient-to-br ${project.color} bg-opacity-10 p-10`}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                  <div className="relative w-full aspect-square bg-gray-900 rounded-xl border border-white/10 shadow-2xl p-6 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-3">
                      <div className="h-2 w-1/3 bg-gray-700 rounded-full" />
                      <div className="h-2 w-2/3 bg-gray-700 rounded-full" />
                      <div className="h-2 w-1/2 bg-gray-700 rounded-full" />
                      <div className="mt-6 h-32 w-full bg-gray-800 rounded-lg border border-white/5" />
                    </div>
                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-black border border-white/10 rounded-lg text-xs text-white font-mono shadow-xl">
                      {project.title === "Fluent Edge"
                        ? "AI Integration"
                        : "v1.0.0 Stable"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
