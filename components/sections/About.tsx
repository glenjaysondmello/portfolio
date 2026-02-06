"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-card", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-12 md:py-32 bg-background relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-8 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-400">
              Me.
            </span>
          </h2>
          <div className="h-1 w-16 md:w-20 bg-accent rounded-full mx-auto md:mx-0" />
        </div>

        {/* Unified Box */}
        <div className="about-card relative w-full bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-16 overflow-hidden group hover:border-accent/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Icon */}
            <div className="shrink-0 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 text-accent group-hover:scale-110 transition-transform duration-500 hidden sm:block">
              <Terminal size={32} className="md:w-10 md:h-10" />
            </div>

            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <div className="flex items-center gap-3 sm:hidden mb-2">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-accent">
                  <Terminal size={24} />
                </div>
                <span className="text-sm text-zinc-500 font-mono">
                  2026 Grad
                </span>
              </div>

              <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                Engineering Scalable <br />
                <span className="text-zinc-500">Digital Ecosystems.</span>
              </h3>

              <div className="text-sm md:text-xl text-zinc-400 leading-relaxed space-y-4 md:space-y-6">
                <p>
                  I am a{" "}
                  <strong className="text-white">Full Stack Engineer</strong>{" "}
                  currently pursuing Computer Science Engineering at{" "}
                  <span className="text-accent">SJEC Mangalore VTU</span>. My
                  expertise lies in building high-performance applications using
                  the <strong className="text-white">MERN Stack</strong>,{" "}
                  <strong className="text-white">Next.js</strong> and{" "}
                  <strong className="text-white">NestJS</strong>.
                </p>
                <p>
                  Beyond the web, I craft native mobile experiences with{" "}
                  <strong className="text-white">Flutter</strong>. I specialize
                  in seamlessly integrating complex front-end interfaces with{" "}
                  <strong className="text-white">robust backend systems</strong>
                  , focusing on performance, security, and intuitive user
                  experiences.
                </p>
              </div>

              <div className="pt-4 md:pt-6 flex items-start md:items-center gap-3 text-white font-medium text-xs md:text-base">
                <div className="p-1.5 md:p-2 bg-yellow-500/10 rounded-full text-yellow-500 shrink-0">
                  <Sparkles size={16} className="md:w-5 md:h-5" />
                </div>
                <span>
                  Always eager to collaborate on impactful projects—let’s
                  connect! 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
