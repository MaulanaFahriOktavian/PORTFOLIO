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
      className="py-20 sm:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
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
        <div className="max-w-2xl mb-12">
          <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Teknologi, bahasa pemrograman, dan perangkat industri otentik yang aktif saya gunakan dalam perancangan serta pengembangan sistem web.
          </p>
        </div>

        {/* Direct Logos with Drop Shadows (No columns / No box cards) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-14 max-w-4xl mx-auto py-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -8, scale: 1.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Logo Container with Physical Drop Shadow & Ambient Glow */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  {/* Subtle ambient volumetric color glow beneath the logo */}
                  <div
                    className="absolute inset-1 rounded-full blur-md sm:blur-xl opacity-30 group-hover:opacity-75 transition-opacity duration-300 scale-90"
                    style={{ background: tech.color }}
                  />

                  {/* Direct Logo Icon with Layered Drop Shadows */}
                  {tech.name === "JavaScript" ? (
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F7DF1E] text-black font-extrabold flex items-end justify-end p-1.5 text-base sm:text-lg tracking-tighter leading-none relative z-10 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        boxShadow:
                          "0 12px 20px -3px rgba(247, 223, 30, 0.55), 0 4px 8px rgba(0,0,0,0.12)",
                      }}
                    >
                      JS
                    </div>
                  ) : tech.name === "Canva" ? (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 shadow-md">
                      <Icon className="w-full h-full" />
                    </div>
                  ) : (
                    <Icon
                      className="text-5xl sm:text-6xl relative z-10 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        color: tech.color,
                        filter: `drop-shadow(0 12px 18px ${tech.color}45) drop-shadow(0 4px 6px rgba(0,0,0,0.12))`,
                      }}
                    />
                  )}
                </div>

                {/* Tech Name Label */}
                <span className="font-sans font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-200 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors mt-3 text-center tracking-tight">
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
