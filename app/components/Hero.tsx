"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Reveal Name (Staggered from bottom)
      tl.from(".hero-char", {
        y: 150,
        opacity: 0,
        rotateX: -90,
        stagger: 0.05,
        duration: 1.2,
      })
        // 2. Reveal Role line
        .from(
          roleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8",
        )
        // 3. Reveal Tech Stack & Links
        .from(
          techRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-size-[40px_40px] opacity-[0.05] pointer-events-none" />

      {/* Radial Gradient for Spotlight Effect */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="z-10 mt-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium tracking-wide">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Animated Name */}
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] mb-4"
        >
          <div className="overflow-hidden flex gap-2 md:gap-4">
            {"GLEN".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block">
                {char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden flex gap-2 md:gap-4 text-gray-500">
            {"DMELLO".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block">
                {char}
              </span>
            ))}
          </div>
        </h1>

        {/* Role & Subtext */}
        <div ref={roleRef} className="mt-6 md:mt-8 max-w-2xl">
          <h2 className="text-xl md:text-3xl text-gray-300 font-light">
            Building scalable{" "}
            <span className="text-accent font-medium">
              Digital Architectures
            </span>{" "}
            &{" "}
            <span className="text-accent font-medium">
              Cross-Platform Experiences
            </span>
            .
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Full Stack Developer specializing in the MERN Stack, NestJS, and
            Flutter. Crafting high-performance web and mobile applications with
            focus on AI integration and real-time systems.
          </p>
        </div>

        {/* Tech Stack & Links */}
        <div ref={techRef} className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105"
          >
            <span>Download Resume</span>
            <ArrowDown
              size={18}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
