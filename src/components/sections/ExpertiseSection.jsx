import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFigma,
  SiGithub,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import CanvaIcon from "../ui/CanvaIcon";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DSphere, FloatingLightning } from "../ui/Floating3DAssets";

const technologies = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#087EA4" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Canva", icon: CanvaIcon, color: "#00C4CC" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Git & GitHub", icon: SiGithub, color: "#16A34A" },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-14 sm:py-20 md:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
    >
      {/* 3D Animated Moving Illustrations */}
      <Floating3DSphere
        className="top-16 right-6 sm:right-16 opacity-75 dark:opacity-60"
        size={54}
        delay={0.8}
      />
      <FloatingLightning
        className="bottom-10 -left-6 sm:left-4 opacity-70 dark:opacity-55"
        scale={0.7}
        rotate={-20}
        delay={1.8}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          title="KEAHLIAN & TECH STACK"
        />

        {/* Intro text */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Teknologi, bahasa pemrograman, dan tools pengembangan web yang aktif saya pelajari dan gunakan dalam pembuatan proyek web.
          </p>
        </div>

        {/* Direct Logos with Drop Shadows - Responsive 4 cols on mobile, 6 cols on desktop */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-y-6 sm:gap-y-10 gap-x-2 sm:gap-x-8 max-w-4xl mx-auto py-2 sm:py-6 place-items-center">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -6, scale: 1.08 }}
                className="flex flex-col items-center group cursor-pointer w-full max-w-[90px]"
              >
                {/* Logo Container with Physical Drop Shadow & Ambient Glow */}
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  {/* Subtle ambient volumetric color glow beneath the logo */}
                  <div
                    className="absolute inset-1 rounded-full blur-sm sm:blur-md md:blur-lg opacity-30 group-hover:opacity-75 transition-opacity duration-300 scale-90"
                    style={{ background: tech.color }}
                  />

                  {/* Direct Logo Icon with Layered Drop Shadows */}
                  {tech.name === "JavaScript" ? (
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg md:rounded-xl bg-[#F7DF1E] text-black font-extrabold flex items-end justify-end p-1 text-xs sm:text-sm md:text-base tracking-tighter leading-none relative z-10 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        boxShadow:
                          "0 8px 16px -2px rgba(247, 223, 30, 0.45), 0 3px 6px rgba(0,0,0,0.12)",
                      }}
                    >
                      JS
                    </div>
                  ) : tech.name === "Canva" ? (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 shadow-sm sm:shadow-md">
                      <Icon className="w-full h-full" />
                    </div>
                  ) : (
                    <Icon
                      className="text-3xl sm:text-4xl md:text-5xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        color: tech.color,
                        filter: `drop-shadow(0 8px 14px ${tech.color}40) drop-shadow(0 3px 5px rgba(0,0,0,0.12))`,
                      }}
                    />
                  )}
                </div>

                {/* Tech Name Label */}
                <span className="font-sans font-medium text-[11px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-200 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors mt-1.5 sm:mt-2 text-center tracking-tight truncate w-full">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
