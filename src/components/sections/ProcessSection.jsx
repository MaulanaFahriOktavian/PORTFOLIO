import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DStar, Floating3DCube } from "../ui/Floating3DAssets";

const steps = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand the Problem",
    description: "Clarify user goals, core friction points, and constraints before writing code.",
  },
  {
    number: "02",
    phase: "STRUCTURE",
    title: "Plan Architecture",
    description: "Map information hierarchy, component boundaries, and data state flow.",
  },
  {
    number: "03",
    phase: "DESIGN",
    title: "Design System",
    description: "Craft interface tokens, typographic rhythm, and prototypes in Figma.",
  },
  {
    number: "04",
    phase: "BUILD",
    title: "Modular Code",
    description: "Build clean, accessible, reusable components with React and Tailwind CSS.",
  },
  {
    number: "05",
    phase: "REFINE",
    title: "Polish & Test",
    description: "Verify cross-device responsiveness, performance, and interaction feel.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-transparent"
    >
      {/* 3D Animated Moving Illustrations */}
      <Floating3DStar
        className="top-10 left-4 sm:left-12 opacity-80"
        size={38}
        delay={0.4}
      />
      <Floating3DCube
        className="bottom-8 right-6 sm:right-16 opacity-75"
        size={60}
        delay={1.5}
        rotate={25}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="06"
          title="HOW I BUILD"
          subcopy="Lima tahapan sistematis dari problem hingga produksi antarmuka."
        />

        {/* Desktop: Horizontal Progression | Mobile: Vertical Progression */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
          {/* Subtle horizontal connecting line on desktop with warm glow */}
          <div
            className="hidden md:block absolute top-3.5 left-3 right-3 h-[2px] bg-gradient-to-r from-[#FF6B00]/40 via-[#FF8800]/20 to-white/10 -z-0"
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="relative z-10 flex flex-col group p-3 rounded-2xl hover:bg-white/[0.02] transition-colors"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              {/* Step indicator dot in warm orange badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#1E0E08] border border-[#FF6B00]/40 flex items-center justify-center font-mono text-[11px] text-[#FF8800] font-bold shadow-[0_0_12px_rgba(255,107,0,0.3)] group-hover:scale-110 group-hover:border-[#FF6B00] transition-all">
                  {step.number}
                </div>
                <span className="font-mono text-xs tracking-wider uppercase text-gray-400 group-hover:text-gray-200 transition-colors">
                  {step.phase}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-white mb-2 group-hover:text-[#FFA000] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
