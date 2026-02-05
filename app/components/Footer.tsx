"use client";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-8 bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-zinc-500 text-sm font-medium text-center md:text-left">
          © {currentYear}{" "}
          <span className="text-zinc-300">Glen Jayson Dmello</span>. All rights
          reserved.
        </div>

        {/* Right Side: Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-accent transition-colors"
          >
            TOP
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
