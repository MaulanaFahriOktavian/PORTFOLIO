import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight, FileText } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiLaravel,
  SiMysql,
} from "react-icons/si";
import fahriPhoto from "../../assets/images/fahri.png";
import { FloatingLightning } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

export default function HeroSection({ onExploreClick, onOpenResume }) {
  const [radius, setRadius] = useState(240);

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setRadius(120);
        } else if (window.innerWidth < 1024) {
          setRadius(175);
        } else {
          setRadius(230);
        }
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Orbit tech icons around Fahri (6 icons spaced evenly at 60 degrees)
  const orbitItems = [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      bg: "rgba(97, 218, 251, 0.12)",
      border: "rgba(97, 218, 251, 0.4)",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
      bg: "rgba(242, 78, 30, 0.12)",
      border: "rgba(242, 78, 30, 0.4)",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#38BDF8",
      bg: "rgba(56, 189, 248, 0.12)",
      border: "rgba(56, 189, 248, 0.4)",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      bg: "rgba(247, 223, 30, 0.12)",
      border: "rgba(247, 223, 30, 0.4)",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "#FF2D20",
      bg: "rgba(255, 45, 32, 0.12)",
      border: "rgba(255, 45, 32, 0.4)",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#00758F",
      bg: "rgba(0, 117, 143, 0.12)",
      border: "rgba(0, 117, 143, 0.4)",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center pt-20 pb-12 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 border-b border-gray-200/80 dark:border-white/10 overflow-hidden select-none bg-transparent"
    >
      {/* Soft Ambient Volumetric Glowing Spotlights in Emerald/Mint (Desktop only to keep mobile lightweight) */}
      <div
        className="hidden sm:block absolute top-1/3 right-6 sm:right-24 -translate-y-1/2 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#22C55E]/20 via-[#16A34A]/10 to-transparent blur-[110px] sm:blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden sm:block absolute top-1/4 left-1/4 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full bg-[#16A34A]/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating 3D Lightning Bolt Illustrations */}
      <FloatingLightning
        className="top-10 sm:top-14 right-4 sm:right-16 md:right-24"
        scale={1}
        rotate={22}
        delay={0}
      />
      <FloatingLightning
        className="bottom-12 sm:bottom-16 left-3 sm:left-10"
        scale={0.78}
        rotate={-28}
        delay={1.2}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ──────────────── Left Column (Hero Content) ──────────────── */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            {/* Student Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 shadow-sm mb-3 sm:mb-4 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#16A34A] dark:bg-[#22C55E] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] text-[#15803D] dark:text-emerald-300 tracking-wider uppercase font-semibold">
                Siswa SMKN 1 Bangsri · Kelas 12 PPLG
              </span>
            </div>

            {/* Friendly Greeting */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="font-sans text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-light tracking-wide">
                Halo, saya{" "}
                <span className="text-[#16A34A] dark:text-[#22C55E] font-semibold">Maulana Fahri Oktavian</span>
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#22C55E] animate-pulse" />
            </div>

            {/* Clean Professional Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] dark:text-white tracking-tight leading-[1.12] mb-3 sm:mb-5 font-sans">
              Web Developer{" "}
              <span className="bg-gradient-to-r from-[#111827] dark:from-white via-[#16A34A] dark:via-[#22C55E] to-[#22C55E] dark:to-[#4ADE80] bg-clip-text text-transparent">
                & UI/UX Designer
              </span>
            </h1>

            {/* Credible Subtext for SMK Student */}
            <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg mb-5 sm:mb-8">
              Siswa SMK Negeri 1 Bangsri jurusan PPLG. Berpengalaman merancang antarmuka UI/UX di Figma dan mengembangkan sistem web fungsional menggunakan Laravel, MySQL, dan Tailwind CSS.
            </p>

            {/* Action Buttons: CV Modal + WhatsApp + Email */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              {/* Primary "Lihat CV / Resume" */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="group px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-[0_6px_20px_rgba(22,163,74,0.3)] hover:shadow-[0_10px_28px_rgba(22,163,74,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Lihat CV / Resume</span>
              </motion.button>

              {/* Secondary Action: Lihat Proyek */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
                className="px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] border border-gray-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500 text-[#111827] dark:text-white font-sans text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-xs cursor-pointer"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] dark:text-[#22C55E]" />
              </motion.button>

              {/* Tertiary WhatsApp Contact */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/6282325433087?text=Halo%20Fahri,%20saya%20tertarik%20dengan%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] hover:border-emerald-300 dark:hover:border-emerald-500 font-sans text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-all shadow-xs flex items-center gap-1.5 sm:gap-2 cursor-pointer"
              >
                <span>WhatsApp</span>
              </motion.a>

              {/* Quick Email Icon */}
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                href="mailto:jeparafahri982@gmail.com"
                aria-label="Email Fahri"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] hover:border-emerald-300 dark:hover:border-emerald-500 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-all shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </div>

          {/* ──────────────── Right Column (Person with Rotating Orbit Tech Badges) ──────────────── */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center relative min-h-[440px] sm:min-h-[540px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ── ROTATING ORBIT CONTAINER (Behind Person) ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Outer Static Track Line */}
              <div
                className="rounded-full border border-emerald-200/70 dark:border-emerald-700/40 absolute"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                }}
              />

              {/* Inner Static Track Line */}
              <div
                className="rounded-full border border-dashed border-emerald-300/50 dark:border-emerald-600/30 absolute"
                style={{
                  width: `${radius * 1.5}px`,
                  height: `${radius * 1.5}px`,
                }}
              />

              {/* ROTATING ORBIT (Continuous Animation on Desktop, static on mobile for peak performance) */}
              <div
                className="rounded-full relative md:animate-spin pointer-events-auto"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  animationDuration: "28s",
                }}
              >
                {orbitItems.map((item, index) => {
                  const angle = (index * (360 / orbitItems.length) * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const IconComp = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Counter-rotating badge so icon stays upright! */}
                      <div
                        className="md:animate-spin group cursor-pointer transition-transform hover:scale-125"
                        style={{
                          animationDuration: "28s",
                          animationDirection: "reverse",
                        }}
                      >
                        <div
                          className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(22,163,74,0.12)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.6)] bg-white/95 dark:bg-[#111827]/90 border border-emerald-100 dark:border-emerald-800/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:border-emerald-300"
                        >
                          <IconComp
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 transition-transform group-hover:scale-110"
                            style={{ color: item.color }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── CENTRAL PORTRAIT OF FAHRI (In Front of Rotating Orbit) ── */}
            <div className="relative z-10 w-full max-w-[190px] sm:max-w-[270px] md:max-w-[360px] flex flex-col items-center">
              
              {/* Soft Green Backlight Glow behind Fahri */}
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-gradient-to-t from-[#22C55E]/25 via-[#16A34A]/10 to-transparent blur-2xl sm:blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Cutout Photo with Clean Natural Vignette Bottom Mask */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                }}
              >
                <img
                  src={fahriPhoto}
                  alt="Maulana Fahri Oktavian"
                  className="w-full h-auto object-contain select-none drop-shadow-[0_12px_24px_rgba(22,163,74,0.12)] dark:drop-shadow-[0_16px_28px_rgba(34,197,94,0.2)]"
                  priority="true"
                />
              </div>

              {/* Floating Verified Student Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-2 sm:bottom-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 dark:bg-[#111827]/90 border border-emerald-200/80 dark:border-emerald-800/80 shadow-[0_6px_20px_rgba(22,163,74,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2 z-20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs text-gray-700 dark:text-gray-200 font-medium">
                  Jepara, ID <span className="text-gray-300 dark:text-gray-600">·</span>{" "}
                  <span className="text-[#16A34A] dark:text-[#22C55E] font-semibold">PPLG SMK</span>
                </span>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
