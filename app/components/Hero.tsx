"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import Image from "next/image";

// Replace with your actual paths
import ProfileImg1 from "@/public/profile1.jpeg";
import ProfileImg2 from "@/public/profile2.jpeg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      // FIX: Added 'delay: 2.8' to sync with Preloader (2s duration + 0.8s exit)
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 2.8,
      });

      // 1. Reveal Name
      tl.from(".hero-char", {
        y: 150,
        opacity: 0,
        rotateX: -90,
        stagger: 0.05,
        duration: 1.2,
      })
        // 2. Reveal Role
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
        )
        // 4. Reveal Image
        .from(
          imageRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.0",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-24 overflow-hidden py-24 md:py-0 gap-8 md:gap-10"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05] pointer-events-none" />

      {/* Radial Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* --- RIGHT SIDE: IMAGE --- */}
      <div
        ref={imageRef}
        className="z-10 flex-shrink-0 order-1 md:order-2 mb-4 md:mb-0"
      >
        <div
          className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 relative rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-300 hover:border-accent/50 mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Base image */}
          <Image
            src={ProfileImg1}
            alt="Glen Jayson Dmello"
            fill
            className={`object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          {/* Hover image */}
          <Image
            src={ProfileImg2}
            alt="Glen Jayson Dmello Hover"
            fill
            className={`object-cover absolute top-0 left-0 transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </div>

        {/* Glow behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-accent/20 blur-[80px] rounded-full -z-10 pointer-events-none" />
      </div>

      {/* --- LEFT SIDE: TEXT CONTENT --- */}
      <div className="z-10 flex-1 order-2 md:order-1 text-center md:text-left">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-4 md:mb-6 mx-auto md:mx-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Animated Name */}
        <h1
          ref={nameRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] mb-4"
        >
          {/* Line 1: GLEN JAYSON */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-3 md:gap-x-4 overflow-hidden pb-2">
            {["GLEN", "JAYSON"].map((word, wordIndex) => (
              <span key={wordIndex} className="whitespace-nowrap inline-flex">
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    className="hero-char inline-block"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </div>

          {/* Line 2: DMELLO */}
          <div className="flex justify-center md:justify-start text-gray-500 overflow-hidden">
            <span className="whitespace-nowrap inline-flex">
              {"DMELLO".split("").map((char, i) => (
                <span key={`last-${i}`} className="hero-char inline-block">
                  {char}
                </span>
              ))}
            </span>
          </div>
        </h1>

        {/* Role & Subtext */}
        <div ref={roleRef} className="mt-4 md:mt-8 max-w-2xl mx-auto md:mx-0">
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light leading-tight">
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
          <p className="mt-4 text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Full Stack Developer specializing in the MERN Stack, NestJS, and
            Flutter. Crafting high-performance web and mobile applications with
            focus on AI integration and real-time systems.
          </p>
        </div>

        {/* Tech Stack & Links */}
        <div
          ref={techRef}
          className="mt-6 md:mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6"
        >
          <a
            href="#"
            className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black rounded-full font-medium text-sm md:text-base transition-transform hover:scale-105"
          >
            <span>Download Resume</span>
            <ArrowDown
              size={18}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2.5 md:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
