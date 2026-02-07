"use client";
import { useRef, useState, CSSProperties } from "react";
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

// --- React Icons Imports ---
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRazorpay,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiNestjs,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiDart,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// --- Tech Icon Mapping ---
const techIcons: Record<string, React.ReactNode> = {
  // Frontend
  React: <FaReact className="text-[#61DAFB]" />,
  "React.js": <FaReact className="text-[#61DAFB]" />,
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
  Flutter: <SiFlutter className="text-[#027DFD]" />,
  Dart: <SiDart className="text-[#0175C2]" />,

  // Backend
  "Node.js": <FaNodeJs className="text-[#68A063]" />,
  "Express.js": <SiExpress className="text-white" />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,

  // Database & State
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  Prisma: <SiPrisma className="text-white" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Qdrant: <FaDatabase className="text-[#AC1337]" />,

  // Tools & AI
  Docker: <SiDocker className="text-[#2496ED]" />,
  Razorpay: <SiRazorpay className="text-[#3395FF]" />,
  Cloudinary: <FaCloud className="text-[#3448C5]" />,
  "Groq AI": <SiOpenai className="text-purple-400" />,
};

// --- Project Data ---
const projects = [
  {
    title: "PhishGuard",
    category: "Browser Security Extension",
    description:
      "A real-time security tool that protects users from online scams by identifying and blocking malicious websites. It provides instant alerts for suspicious links and allows users to report threats to keep the community safe.",
    techStack: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    color: "from-blue-600 to-cyan-500",
    icon: <ShieldCheck className="w-6 h-6" />,
    link: "https://addons.mozilla.org/en-US/firefox/addon/phishguard-extension/",
    github: "https://github.com/glenjaysondmello/phishguard-extension",
    type: "browser",
    imgSrc: "/phishguard.png",
  },
  {
    title: "FluentEdge",
    category: "AI Language Coaching App",
    description:
      "An interactive platform designed to improve English proficiency through immersive speaking and typing tests. It provides instant feedback on pronunciation and writing accuracy to help users track and enhance their communication skills.",
    techStack: [
      "Flutter",
      "NestJS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Groq AI",
      "Whisper AI",
      "Firebase",
    ],
    color: "from-violet-600 to-fuchsia-500",
    icon: <Smartphone className="w-6 h-6" />,
    link: "https://github.com/glenjaysondmello/FluentEdge",
    github: "https://github.com/glenjaysondmello/FluentEdge",
    type: "mobile",
    imgSrc: "/fluent_edge.jpeg",
  },
  {
    title: "PG Finder",
    category: "Full Stack PG Platform",
    description:
      "A comprehensive marketplace for finding and booking hostel accommodations. Users can easily search, filter, and secure PG listings with integrated payments while getting instant help from an AI-powered property assistant.",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Razorpay",
      "Cloudinary",
      "Tailwind CSS",
      "Redis",
      "Qdrant",
      "Groq AI",
    ],
    color: "from-orange-500 to-amber-500",
    icon: <Search className="w-6 h-6" />,
    link: "https://pgfinder-wheat.vercel.app",
    github: "https://github.com/glenjaysondmello/pgfinder",
    type: "browser",
    imgSrc: "/pgfinder.jpeg",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- STATE FOR MOBILE TOOLTIPS ---
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.1,
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
      onClick={() => setActiveTooltip(null)}
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-400">
              Projects.
            </span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0" />
        </div>

        <div className="flex flex-col items-center pb-20">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              // FIX: Re-enabled "sticky" for all screens
              // Added "top-16" for mobile offset (sticks below header)
              // Added "max-h-[85vh]" to prevent it from being taller than the screen
              className="project-card sticky w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-2 mb-20 lg:mb-[40vh] last:mb-0 top-16 lg:top-[var(--stack-top)] max-h-[85vh] lg:max-h-none"
              style={
                {
                  zIndex: projectIndex + 1,
                  "--stack-top": `calc(5rem + ${projectIndex * 15}px)`,
                } as CSSProperties
              }
            >
              {/* --- 1. IMAGE SECTION --- */}
              <div
                className={`relative overflow-hidden bg-linear-to-br ${project.color} bg-opacity-5 
                  order-1 lg:order-2 
                  h-32 sm:h-56 lg:h-auto lg:min-h-125 
                  flex items-center justify-center p-4 lg:p-8 shrink-0`}
                // Added "h-32" (smaller image on mobile) and "shrink-0" so it doesn't get squashed
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

                <div
                  className={`relative shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${
                    project.type === "mobile"
                      ? "w-30 h-60 sm:w-40 sm:h-80 lg:w-65 lg:h-130 rounded-3xl lg:rounded-[3rem] border-4 lg:border-8 border-zinc-900 bg-zinc-950"
                      : "w-[90%] aspect-video rounded-lg lg:rounded-xl border border-white/10 bg-zinc-900 shadow-xl"
                  }`}
                >
                  <div
                    className={`relative w-full h-full overflow-hidden flex items-center justify-center bg-zinc-800 ${
                      project.type === "mobile"
                        ? "rounded-[1.2rem] lg:rounded-[2.5rem]"
                        : "rounded-md lg:rounded-lg"
                    }`}
                  >
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

                  {project.type === "mobile" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 lg:h-6 bg-zinc-900 rounded-b-md lg:rounded-b-xl z-20" />
                  )}
                </div>
              </div>

              {/* --- 2. TEXT CONTENT --- */}
              {/* FIX: Added "overflow-y-auto" and "flex-1"
                  This ensures that if the text/links are too tall, they scroll INSIDE the card
                  instead of being cut off by the next sticky card. */}
              <div className="p-5 md:p-12 flex flex-col justify-between relative z-10 order-2 lg:order-1 bg-[#0a0a0a] overflow-y-auto lg:overflow-visible flex-1 custom-scrollbar">
                <div
                  className={`absolute top-0 left-0 w-32 h-32 bg-linear-to-br ${project.color} blur-[100px] opacity-20 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center gap-2 mb-3 lg:mb-6">
                    <div
                      className={`p-1.5 lg:p-2.5 rounded-xl bg-linear-to-br ${project.color} bg-opacity-10 text-white border border-white/5`}
                    >
                      {project.icon}
                    </div>
                    <span className="text-[10px] lg:text-sm font-semibold text-zinc-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-4xl font-bold text-white mb-2 lg:mb-6">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-snug lg:leading-relaxed text-sm lg:text-lg mb-4 lg:mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-10">
                    {project.techStack.map((tech, i) => {
                      const tooltipId = `${projectIndex}-${i}`;
                      const isActive = activeTooltip === tooltipId;

                      return (
                        <div
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTooltip(isActive ? null : tooltipId);
                          }}
                          className="group relative flex items-center justify-center p-2.5 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <div className="text-lg lg:text-xl relative z-10">
                            {techIcons[tech] || (
                              <FaCode className="text-gray-400" />
                            )}
                          </div>
                          <div
                            className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none transform z-20
                              ${
                                isActive
                                  ? "opacity-100 -translate-y-1"
                                  : "opacity-0 group-hover:opacity-100 group-hover:-translate-y-1"
                              }
                            `}
                          >
                            <div className="relative px-3 py-1.5 bg-zinc-800 border border-white/10 text-white text-xs font-medium rounded-md shadow-xl whitespace-nowrap">
                              {tech}
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-r border-b border-white/10 rotate-45 transform" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:gap-6 pb-2">
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
            className="project-card sticky w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center py-20 px-6 top-16 lg:top-[var(--stack-top)]"
            style={
              {
                zIndex: 99,
                "--stack-top": `calc(5rem + ${projects.length * 15}px)`,
              } as CSSProperties
            }
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
              className="group relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-px"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-linear(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
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
