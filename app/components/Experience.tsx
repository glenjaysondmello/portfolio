"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: "Full Stack Developer (Team Epsilon)",
    company: "Hackfest '24 - SAP PSG iTech Hackathon",
    date: "March 2024",
    location: "Coimbatore, India",
    description:
      "Secured Top 93 out of 2,500+ teams. Developed 'DConnect', a dynamic carpooling platform with real-time role switching. Implemented secure auth and responsive UI under tight deadlines.",
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    role: "Hackathon Finalist",
    company: "SAP National Hackathon",
    date: "2022",
    location: "Mangaluru, Karnataka",
    description:
      "Ranked among the Top 4% of nationwide participants. Delivered a working prototype with event-driven workflows and scalable full-stack architecture.",
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate the timeline line drawing down
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Animate items popping in
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -50,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-20 pl-4 md:pl-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Journey & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Experience.
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* The Glowing Line */}
          <div className="absolute left-4 md:left-9 top-0 bottom-0 w-1 bg-white/10 rounded-full">
            <div className="timeline-line w-full h-full bg-accent shadow-[0_0_15px_#3b82f6] origin-top" />
          </div>

          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative pl-16 md:pl-32 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[10px] md:left-[28px] top-0 w-6 h-6 md:w-8 md:h-8 bg-background border-2 border-accent rounded-full z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#3b82f6]">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full" />
                </div>

                {/* Content Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-accent font-medium">{item.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
