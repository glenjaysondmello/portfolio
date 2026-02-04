"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GraduationCap, Code, Brain } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".bento-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Education Block (Large) */}
          <div className="bento-item md:col-span-2 bg-card-bg border border-white/10 rounded-3xl p-8 md:p-12 hover:border-accent/30 transition-colors group">
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                <GraduationCap size={32} />
              </div>
              <span className="text-gray-500 font-mono text-sm">
                2022 — 2026
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
              Bachelor of Engineering in CS
            </h3>
            <p className="text-xl text-gray-400 mb-6">
              St. Joseph Engineering College (VTU)
            </p>
            <p className="text-gray-500 leading-relaxed">
              Focused on advanced algorithms, distributed systems, and AI
              integration. Consistently ranked among the top performers with a
              passion for practical application in hackathons.
            </p>
          </div>

          {/* 2. Philosophy Block (Small) */}
          <div className="bento-item bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-8 flex flex-col justify-center text-center">
            <div className="mx-auto p-4 bg-white/5 rounded-full mb-6 text-purple-400">
              <Brain size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">
              Problem Solver
            </h4>
            <p className="text-gray-400 text-sm">
              "I don't just write code; I architect solutions that scale and
              solve real user pain points."
            </p>
          </div>

          {/* 3. Tech Focus Block (Small) */}
          <div className="bento-item bg-card-bg border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
            <div className="mb-6 text-green-400">
              <Code size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Full Stack + Mobile
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Building bridges between complex backends and buttery smooth
              frontends.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-300">
                MERN
              </span>
              <span className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-300">
                Flutter
              </span>
            </div>
          </div>

          {/* 4. Availability Block (Wide) */}
          <div className="bento-item md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Open for Collaboration
              </h3>
              <p className="text-gray-400 text-sm">
                Interested in working on high-impact projects?
              </p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
          </div>
        </div>
      </div>
    </section>
  );
}
