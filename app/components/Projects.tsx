"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const projects = [
  {
    title: "PhishGuard",
    category: "Browser Security Extension",
    description:
      "A real-time anti-phishing browser extension developed as a College PBL project. Features heuristic URL analysis, user reporting, and a centralized admin dashboard. Enforces pre-navigation warnings and implements JWT auth.",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    color: "from-blue-600 to-cyan-500",
    icon: <ShieldCheck className="w-6 h-6" />,
    link: "#",
    github: "https://github.com/glenjaysondmello",
    type: "browser",
    imgSrc: "/projects/phishguard-thumb.png", // Ensure this file exists in public/projects/
  },
  {
    title: "FluentEdge",
    category: "AI-Powered Learning Platform",
    description:
      "An AI-driven English learning platform featuring a Flutter frontend and NestJS backend. Integrates Whisper Large v3 for speech transcription and Groq AI for text evaluation.",
    techStack: ["Flutter", "NestJS", "PostgreSQL", "Firebase", "Dart"],
    color: "from-violet-600 to-fuchsia-500",
    icon: <Smartphone className="w-6 h-6" />,
    link: "#",
    github: "https://github.com/glenjaysondmello/FluentEdge",
    type: "mobile",
    imgSrc: "/fluentedge.jpeg", // Ensure this file exists in public/
  },
  {
    title: "PG Finder",
    category: "Full Stack PG Platform",
    description:
      "A comprehensive accommodation discovery platform. Users can find and book PGs with secure Razorpay payments. Includes an AI-powered 'PG Assistant' chatbot using Qdrant vector DB.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Redux",
      "Docker",
    ],
    color: "from-orange-500 to-amber-500",
    icon: <Search className="w-6 h-6" />,
    link: "https://pgfinder-wheat.vercel.app",
    github: "https://github.com/glenjaysondmello/pgfinder",
    type: "browser",
    imgSrc: "/pgfinder.jpeg", // Ensure this file exists in public/
  },
];

const getIconPath = (name: string) => {
  const map: Record<string, string> = {
    "React.js": "/icons/react.svg",
    TypeScript: "/icons/typescript.svg",
    Redux: "/icons/redux.svg",
    "Node.js": "/icons/nodejs.svg",
    "Express.js": "/icons/express.svg",
    MongoDB: "/icons/mongodb.svg",
    Flutter: "/icons/flutter.svg",
    NestJS: "/icons/nestjs.svg",
    PostgreSQL: "/icons/prisma.svg",
    Firebase: "/icons/firebase.svg",
    Dart: "/icons/dart.svg",
    Docker: "/icons/docker.svg",
  };
  return map[name] || "/icons/javascript.svg";
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(10px)",
          ease: "power1.in",
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
    <section
      ref={containerRef}
      className="py-12 md:py-24 bg-background relative z-10"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Projects.
            </span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0" />
        </div>

        <div className="flex flex-col items-center pb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card sticky w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-2"
              style={{
                zIndex: index + 1,
                marginBottom: index === projects.length - 1 ? 0 : "40vh",
                top: `calc(5rem + ${index * 15}px)`,
              }}
            >
              {/* --- 1. IMAGE SECTION (First on Mobile, Right on Desktop) --- */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.color} bg-opacity-5 
                  order-1 lg:order-2 
                  h-48 sm:h-64 lg:h-auto lg:min-h-[500px] 
                  flex items-center justify-center p-4 lg:p-8`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

                {/* MOCKUP CONTAINER */}
                <div
                  className={`relative shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${
                    project.type === "mobile"
                      ? "w-[120px] h-[240px] sm:w-[160px] sm:h-[320px] lg:w-[260px] lg:h-[520px] rounded-[1.5rem] lg:rounded-[3rem] border-4 lg:border-8 border-zinc-900 bg-zinc-950"
                      : "w-[90%] aspect-video rounded-lg lg:rounded-xl border border-white/10 bg-zinc-900 shadow-xl"
                  }`}
                >
                  {/* --- THE IMAGE LOGIC --- */}
                  <div
                    className={`relative w-full h-full overflow-hidden flex items-center justify-center bg-zinc-800 ${
                      project.type === "mobile"
                        ? "rounded-[1.2rem] lg:rounded-[2.5rem]"
                        : "rounded-md lg:rounded-lg"
                    }`}
                  >
                    {/* Render Image if exists, else fallback text */}
                    {project.imgSrc ? (
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="text-zinc-500 text-xs lg:text-sm">
                        No Preview
                      </span>
                    )}
                  </div>

                  {/* Mobile Notch */}
                  {project.type === "mobile" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 lg:h-6 bg-zinc-900 rounded-b-md lg:rounded-b-xl z-20" />
                  )}
                </div>
              </div>

              {/* --- 2. TEXT CONTENT (Second on Mobile, Left on Desktop) --- */}
              <div className="p-6 md:p-12 flex flex-col justify-between relative z-10 order-2 lg:order-1 bg-[#0a0a0a]">
                <div
                  className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-[100px] opacity-20 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div
                      className={`p-2 lg:p-2.5 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white border border-white/5`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-xs lg:text-sm font-semibold text-zinc-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-6">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm lg:text-lg mb-6 lg:mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-10">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="group relative flex items-center justify-center p-2 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <Image
                          src={getIconPath(tech)}
                          alt={tech}
                          width={20}
                          height={20}
                          className={`w-4 h-4 lg:w-5 lg:h-5 object-contain ${
                            tech.includes("Express") || tech.includes("Next")
                              ? "invert"
                              : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:gap-6">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-sm lg:text-base group"
                  >
                    <Github size={18} className="lg:w-5 lg:h-5" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      Code
                    </span>
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-sm lg:text-base group"
                  >
                    <ExternalLink size={18} className="lg:w-5 lg:h-5" />
                    <span className="border-b border-transparent group-hover:border-accent">
                      Live
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* --- FINAL CARD --- */}
          <div
            className="project-card sticky w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center py-20 px-6"
            style={{
              zIndex: 99,
              top: `calc(5rem + ${projects.length * 15}px)`,
            }}
          >
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 lg:mb-8 animate-pulse">
              <Github size={32} className="text-white lg:w-12 lg:h-12" />
            </div>
            <h3 className="text-2xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              More to Explore
            </h3>
            <p className="text-zinc-400 max-w-lg text-sm lg:text-lg mb-8 lg:mb-10">
              Check out my GitHub for more experiments, open-source
              contributions, and coding challenges.
            </p>
            <Link
              href="https://github.com/glenjaysondmello"
              target="_blank"
              className="group relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 lg:px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-950/50 gap-2">
                Visit GitHub Profile{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
