"use client";
import { motion } from "framer-motion";

const skillsRow1 = [
  { name: "React.js", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Flutter", color: "#02569B" },
  { name: "Tailwind CSS", color: "#38B2AC" },
  { name: "Redux", color: "#764ABC" },
  { name: "Dart", color: "#0175C2" },
  { name: "Java", color: "#007396" },
];

const skillsRow2 = [
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#FFFFFF" },
  { name: "NestJS", color: "#E0234E" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Docker", color: "#2496ED" },
  { name: "Linux", color: "#FCC624" },
];

const MarqueeItem = ({ item }: { item: { name: string; color: string } }) => (
  <div className="mx-4 md:mx-8 flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 group cursor-default">
    <span
      className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
      style={{ backgroundColor: item.color, color: item.color }}
    />
    <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
      {item.name}
    </span>
  </div>
);

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-white">Technical </span>
          <span className="text-gray-500">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A robust suite of tools for building scalable cross-platform
          applications.
        </p>
      </div>

      {/* Row 1: Left to Right */}
      <div className="flex overflow-hidden mb-8 relative z-10">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-background to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-background to-transparent z-20" />

        <motion.div
          className="flex"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
        >
          {/* We repeat the array twice to ensure seamless looping */}
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
            <MarqueeItem key={`row1-${index}`} item={skill} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex overflow-hidden relative z-10">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-background to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-background to-transparent z-20" />

        <motion.div
          className="flex"
          animate={{ x: [-1000, 0] }} // Reverse direction
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Slightly slower for visual contrast
          }}
        >
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
            <MarqueeItem key={`row2-${index}`} item={skill} />
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-75 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
