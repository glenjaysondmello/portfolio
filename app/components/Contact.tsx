"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const email = "glendmello04@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(
    () => {
      gsap.from(".contact-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
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
    // FIX: z-50 forces this section to slide ON TOP of the projects
    // bg-background ensures it's solid black and covers the projects underneath
    <footer
      ref={containerRef}
      className="relative z-50 py-24 bg-background overflow-hidden"
    >
      {/* Visual Separation from Projects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="contact-item text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Let’s Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            Something Epic.
          </span>
        </h2>

        <p className="contact-item text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          I’m currently available for freelance work and full-time positions. If
          you have a project that needs some creative coding magic, let`&apos;`s
          hear it.
        </p>

        {/* Copy Email Button */}
        <div className="contact-item flex justify-center mb-16">
          <button
            onClick={handleCopy}
            className="group relative flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all active:scale-95"
          >
            <Mail className="text-gray-300" />
            <span className="text-xl md:text-2xl font-mono text-white">
              {email}
            </span>
            <div className="ml-4 p-2 bg-white/10 rounded-lg">
              {copied ? (
                <Check className="text-green-500 w-5 h-5" />
              ) : (
                <Copy className="text-gray-400 w-5 h-5 group-hover:text-white" />
              )}
            </div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {copied ? "Copied!" : "Click to Copy"}
            </span>
          </button>
        </div>

        <div className="contact-item flex justify-center gap-8 mb-16">
          <a
            href="#"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white group"
          >
            <Github className="w-6 h-6 group-hover:text-accent transition-colors" />
          </a>
          <a
            href="#"
            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-accent transition-colors" />
          </a>
        </div>

        <div className="contact-item pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Glen Jayson Dmello. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Built with Next.js, Tailwind & GSAP</p>
        </div>
      </div>
    </footer>
  );
}
