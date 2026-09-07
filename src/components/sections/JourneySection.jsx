import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { FloatingLightning, Floating3DSphere } from "../ui/Floating3DAssets";

const steps = [
  {
    year: "2024",
    headline: "Awal Mempelajari Pemrograman Web",
    detail:
      "Mempelajari dasar HTML, CSS, JavaScript, logika pemrograman, dan pembuatan website dinamis menggunakan PHP dan MySQL di SMKN 1 Bangsri.",
  },
  {
    year: "2025",
    headline: "Eksplorasi Modern Web & UI/UX",
    detail:
      "Mendalami React, Tailwind CSS, dan desain antarmuka di Figma untuk membangun antarmuka web yang rapi, responsif, dan interaktif.",
  },
  {
    year: "2026",
    headline: "Pengembangan Proyek Nyata DIDISPEN",
    detail:
      "Merancang dan membangun aplikasi web DIDISPEN sebagai proyek capstone UKK bersama Tim 3M, mencakup UI/UX dan integrasi sistem.",
    active: true,
  },
  {
    year: "SELANJUTNYA",
    headline: "Terus Belajar & Berkolaborasi",
    detail:
      "Terus meningkatkan kemampuan engineering web, mengikuti perkembangan teknologi modern, dan siap berkontribusi pada proyek digital.",
  },
];

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-20 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-transparent"
    >
      {/* 3D Moving Illustrations */}
      <FloatingLightning
        className="top-12 right-6 sm:right-16 opacity-75"
        scale={0.8}
        rotate={18}
        delay={0.6}
      />
      <Floating3DSphere
        className="bottom-14 -left-6 sm:left-6 opacity-70"
        size={48}
        delay={1.6}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          title="JOURNEY"
        />

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/[0.12] space-y-12 sm:space-y-16 max-w-3xl ml-2 sm:ml-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.year}
              className="relative group"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                  step.active
                    ? "bg-[#FF6B00] border-[#FF6B00] ring-4 ring-[#FF6B00]/25 shadow-[0_0_12px_rgba(255,107,0,0.6)]"
                    : "bg-transparent border-white/30 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/40"
                }`}
              />

              {/* Year & Headline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span
                  className={`font-mono text-lg sm:text-xl font-bold tracking-tight ${
                    step.active ? "text-[#FF8800]" : "text-white"
                  }`}
                >
                  {step.year}
                </span>
                <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-[#FFA000] transition-colors">
                  {step.headline}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300/80 font-light leading-relaxed max-w-2xl">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
