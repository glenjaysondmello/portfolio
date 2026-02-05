"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LayoutGrid, Play } from "lucide-react"; // Import icons for the toggle

// Data Mapping
const skillsRow1 = [
  { name: "React.js", imgSrc: "/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", imgSrc: "/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "TypeScript", imgSrc: "/icons/typescript.svg", color: "#3178C6" },
  { name: "JavaScript", imgSrc: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "Flutter", imgSrc: "/icons/flutter.svg", color: "#02569B" },
  { name: "Tailwind CSS", imgSrc: "/icons/tailwind.svg", color: "#38B2AC" },
  { name: "Redux", imgSrc: "/icons/redux.svg", color: "#764ABC" },
  { name: "Dart", imgSrc: "/icons/dart.svg", color: "#0175C2" },
  { name: "Java", imgSrc: "/icons/java.svg", color: "#007396" },
];

const skillsRow2 = [
  { name: "Node.js", imgSrc: "/icons/nodejs.svg", color: "#339933" },
  { name: "Express.js", imgSrc: "/icons/express.svg", color: "#FFFFFF" },
  { name: "NestJS", imgSrc: "/icons/nestjs.svg", color: "#E0234E" },
  { name: "Prisma", imgSrc: "/icons/prisma.svg", color: "#2D3748" },
  { name: "MongoDB", imgSrc: "/icons/mongodb.svg", color: "#47A248" },
  { name: "MySQL", imgSrc: "/icons/mysql.svg", color: "#4479A1" },
  { name: "Firebase", imgSrc: "/icons/firebase.svg", color: "#FFCA28" },
  { name: "Docker", imgSrc: "/icons/docker.svg", color: "#2496ED" },
  { name: "Git", imgSrc: "/icons/git.svg", color: "#F05032" },
  { name: "Linux", imgSrc: "/icons/linux.svg", color: "#FCC624" },
];

// Combine all for Grid View
const allSkills = [...skillsRow1, ...skillsRow2];

// Single Item Component (Shared)
const SkillCard = ({
  item,
}: {
  item: { name: string; imgSrc: string; color: string };
}) => (
  <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:bg-white/10 transition-colors duration-300">
    <Image
      src={item.imgSrc}
      alt={item.name}
      width={50}
      height={50}
      className={`w-10 h-10 md:w-12 md:h-12 object-contain ${
        item.name === "Express.js" || item.name === "Next.js" ? "invert" : ""
      }`}
    />
  </div>
);

export default function TechStack() {
  const [view, setView] = useState<"animated" | "grid">("animated");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header & Toggle */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Technical </span>
            <span className="text-zinc-500">Arsenal</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed mb-8">
            The battle-tested tools and frameworks I use to craft
            high-performance applications.
          </p>

          {/* View Toggle Button */}
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setView("animated")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                view === "animated"
                  ? "bg-accent text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Play size={16} /> Animated
            </button>
            <button
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                view === "grid"
                  ? "bg-accent text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={16} /> Grid View
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[300px]">
          {view === "animated" ? (
            // --- ANIMATED VIEW ---
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Row 1 */}
              <div className="flex overflow-hidden mb-12 relative group">
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
                <motion.div
                  className="flex items-center"
                  animate={{ x: [0, -1000] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40,
                  }}
                >
                  {[...skillsRow1, ...skillsRow1, ...skillsRow1].map(
                    (skill, index) => (
                      <div key={`row1-${index}`} className="mx-6 md:mx-10">
                        <SkillCard item={skill} />
                      </div>
                    ),
                  )}
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="flex overflow-hidden relative group">
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
                <motion.div
                  className="flex items-center"
                  animate={{ x: [-1000, 0] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 45,
                  }}
                >
                  {[...skillsRow2, ...skillsRow2, ...skillsRow2].map(
                    (skill, index) => (
                      <div key={`row2-${index}`} className="mx-6 md:mx-10">
                        <SkillCard item={skill} />
                      </div>
                    ),
                  )}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // --- GRID VIEW ---
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
            >
              {allSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group"
                >
                  <SkillCard item={skill} />
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
