"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items?: NavItem[];
  className?: string;
  onItemClick?: (item: NavItem, index: number) => void;
  defaultActiveIndex?: number;
}

export function SpotlightNavbar({
  items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  className,
  onItemClick,
  defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoverX, setHoverX] = useState<number | null>(null);

  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200; // Offset

      sections.forEach((section, index) => {
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  const handleItemClick = (item: NavItem, index: number) => {
    setActiveIndex(index);
    onItemClick?.(item, index);
    const target = document.querySelector(item.href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "relative h-12 md:h-14 rounded-full overflow-hidden transition-all duration-300",
        "bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50",
        className,
      )}
    >
      {/* Content */}
      <ul className="relative flex items-center h-full px-2 md:px-4 gap-1 md:gap-2 z-[10] overflow-x-auto no-scrollbar scroll-smooth">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative h-full flex-shrink-0 flex items-center"
          >
            <a
              href={item.href}
              data-index={idx}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item, idx);
              }}
              className={cn(
                "px-3 md:px-5 py-2 text-xs md:text-sm font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                activeIndex === idx
                  ? "text-white"
                  : "text-zinc-400 hover:text-white",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Lighting Layers */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
        style={{
          opacity: hoverX !== null ? 1 : 0,
          background: `radial-gradient(100px circle at var(--spotlight-x) 100%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
        style={{
          background: `radial-gradient(50px circle at var(--ambience-x) 0%, rgba(255,255,255,0.8) 0%, transparent 100%)`,
        }}
      />
    </nav>
  );
}
