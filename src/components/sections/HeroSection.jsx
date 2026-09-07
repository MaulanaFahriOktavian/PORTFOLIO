import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, FileText } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiLaravel,
  SiMysql,
} from "react-icons/si";
import fahriPhoto from "../../assets/images/fahri.png";
import heroCardElement from "../../assets/images/hero-card-element.png";
import { FloatingLightning } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

export default function HeroSection({ onExploreClick, onOpenResume }) {
  const [radius, setRadius] = useState(230);

  const mobileTechBadges = [
    { name: "React", icon: SiReact, color: "#61DAFB", pos: "top-4 left-3", floatDuration: 3.2, delay: 0 },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", pos: "top-[47%] -translate-y-1/2 left-2", floatDuration: 2.8, delay: 0.1 },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20", pos: "bottom-12 left-3", floatDuration: 3.4, delay: 0.2 },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", pos: "top-4 right-3", floatDuration: 3.0, delay: 0.15 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", pos: "top-[47%] -translate-y-1/2 right-2", floatDuration: 3.5, delay: 0.25 },
    { name: "MySQL", icon: SiMysql, color: "#00758F", pos: "bottom-12 right-3", floatDuration: 2.9, delay: 0.3 },
  ];

  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 1024) {
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

  const orbitItems = [
    { name: "React", icon: SiReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.12)", border: "rgba(97, 218, 251, 0.4)" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", bg: "rgba(242, 78, 30, 0.12)", border: "rgba(242, 78, 30, 0.4)" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.4)" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.12)", border: "rgba(247, 223, 30, 0.4)" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20", bg: "rgba(255, 45, 32, 0.12)", border: "rgba(255, 45, 32, 0.4)" },
    { name: "MySQL", icon: SiMysql, color: "#00758F", bg: "rgba(0, 117, 143, 0.12)", border: "rgba(0, 117, 143, 0.4)" },
  ];

  return (
    <section
      id="hero"
      className="relative flex items-start lg:items-center pt-20 pb-10 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 border-b border-gray-200/80 dark:border-white/10 overflow-hidden select-none bg-transparent"
    >
      {/* Desktop ambient glow */}
      <div
        className="hidden lg:block absolute top-1/3 right-24 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#22C55E]/20 via-[#16A34A]/10 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute top-1/4 left-1/4 w-[320px] h-[320px] rounded-full bg-[#16A34A]/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Mobile ambient glow */}
      <div
        className="block lg:hidden absolute top-20 right-0 w-[180px] h-[180px] rounded-full bg-gradient-to-bl from-[#22C55E]/18 to-transparent blur-[50px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Desktop lightning accents */}
      <FloatingLightning className="hidden lg:block top-14 right-24" scale={1} rotate={22} delay={0} />
      <FloatingLightning className="hidden lg:block bottom-16 left-10" scale={0.78} rotate={-28} delay={1.2} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ─────────── MOBILE LAYOUT (< lg) ─────────── */}
        <div className="lg:hidden flex flex-col gap-5">

          {/* 1. Header & Text Introduction */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-xs mb-3 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E] animate-pulse" />
              <span className="font-mono text-[10px] text-[#15803D] dark:text-emerald-400 tracking-wider uppercase font-semibold">
                Siswa SMKN 1 Bangsri · Kelas 12 PPLG
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-2.5 font-sans">
              Web Developer{" "}
              <span className="bg-gradient-to-r from-gray-900 dark:from-white via-[#16A34A] dark:via-[#22C55E] to-[#16A34A] dark:to-[#4ADE80] bg-clip-text text-transparent">
                & UI/UX Designer
              </span>
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-300/90 font-light leading-relaxed mb-3">
              Halo, saya <span className="text-gray-900 dark:text-white font-medium">Maulana Fahri Oktavian</span>. Berfokus pada perancangan UI/UX antarmuka modern di Figma dan pengembangan sistem web dengan ekosistem Laravel, MySQL, dan Tailwind CSS.
            </p>
          </motion.div>

          <motion.div
            className="relative w-full flex justify-center py-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-emerald-500/25 dark:border-emerald-500/30 bg-[#06190e] p-4 pb-0 shadow-[0_14px_36px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              {/* Reference background graphic element */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                <img
                  src={heroCardElement}
                  alt=""
                  className="w-full h-full object-cover object-[center_15%] scale-100 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04140a]/80 via-transparent to-[#04140a]/20" />
              </div>

              {/* Floating tech stack logos placed around portrait */}
              {mobileTechBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [-3, 3, -3],
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.15 + badge.delay },
                      scale: { duration: 0.4, delay: 0.15 + badge.delay },
                      y: {
                        repeat: Infinity,
                        duration: badge.floatDuration,
                        ease: "easeInOut",
                      },
                    }}
                    className={`absolute ${badge.pos} z-20 flex items-center justify-center w-10 h-10 rounded-2xl bg-black/55 dark:bg-black/70 border border-white/20 dark:border-emerald-500/35 shadow-[0_4px_16px_rgba(0,0,0,0.45)] backdrop-blur-md cursor-pointer group`}
                    title={badge.name}
                  >
                    <Icon
                      className="w-5 h-5 transition-transform duration-200 group-hover:scale-115 group-active:scale-95"
                      style={{ color: badge.color }}
                    />
                  </motion.div>
                );
              })}

              {/* Portrait photo */}
              <div
                className="w-full flex justify-center relative z-10 pt-2"
                style={{
                  maskImage: "linear-gradient(to bottom, black 76%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 76%, transparent 100%)",
                }}
              >
                <img
                  src={fahriPhoto}
                  alt="Maulana Fahri Oktavian"
                  className="w-full max-w-[210px] h-auto object-contain select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Bottom location badge */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/65 dark:bg-black/75 border border-emerald-500/40 shadow-lg backdrop-blur-md flex items-center gap-1.5 z-20 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-100 font-medium">Jepara, ID · SMKN 1 Bangsri</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Action Buttons (Placed directly below the photo) */}
          <motion.div
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] text-white font-sans text-xs font-semibold shadow-[0_4px_16px_rgba(22,163,74,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lihat CV / Resume</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
              className="px-4 py-2.5 rounded-full bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 hover:border-emerald-500 text-gray-800 dark:text-white font-sans text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E]" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:border-emerald-500 font-sans text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] flex items-center cursor-pointer transition-all shadow-xs"
            >
              WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              href="mailto:jeparafahri982@gmail.com"
              aria-label="Email Fahri"
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:border-emerald-500 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] cursor-pointer transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* ─────────── DESKTOP LAYOUT (lg+) ─────────── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[80vh]">

          {/* Left: Text content */}
          <div className="col-span-6 flex flex-col justify-center relative z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 shadow-sm mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] dark:bg-[#22C55E] animate-pulse" />
              <span className="font-mono text-[11px] text-[#15803D] dark:text-emerald-300 tracking-wider uppercase font-semibold">
                Siswa SMKN 1 Bangsri · Kelas 12 PPLG
              </span>
            </div>

            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-300 font-light tracking-wide">
                Halo, saya{" "}
                <span className="text-[#16A34A] dark:text-[#22C55E] font-semibold">Maulana Fahri Oktavian</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] dark:text-white tracking-tight leading-[1.12] mb-5 font-sans">
              Web Developer{" "}
              <span className="bg-gradient-to-r from-[#111827] dark:from-white via-[#16A34A] dark:via-[#22C55E] to-[#22C55E] dark:to-[#4ADE80] bg-clip-text text-transparent">
                & UI/UX Designer
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg mb-8">
              Siswa SMK Negeri 1 Bangsri jurusan PPLG. Berpengalaman merancang antarmuka UI/UX di Figma dan mengembangkan sistem web fungsional menggunakan Laravel, MySQL, dan Tailwind CSS.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="group px-6 py-3.5 rounded-full bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] text-white font-sans text-sm font-semibold tracking-wide shadow-[0_6px_20px_rgba(22,163,74,0.3)] hover:shadow-[0_10px_28px_rgba(22,163,74,0.45)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat CV / Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
                className="px-5 py-3.5 rounded-full bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] border border-gray-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500 text-[#111827] dark:text-white font-sans text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E]" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] hover:border-emerald-300 dark:hover:border-emerald-500 font-sans text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                href="mailto:jeparafahri982@gmail.com"
                aria-label="Email Fahri"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] hover:bg-emerald-50/60 dark:hover:bg-white/[0.1] hover:border-emerald-300 dark:hover:border-emerald-500 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-all shadow-xs cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right: Portrait + Orbit */}
          <motion.div
            className="col-span-6 flex justify-center items-center relative min-h-[540px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Orbit rings + animated icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="rounded-full border border-emerald-200/70 dark:border-emerald-700/40 absolute" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }} />
              <div className="rounded-full border border-dashed border-emerald-300/50 dark:border-emerald-600/30 absolute" style={{ width: `${radius * 1.5}px`, height: `${radius * 1.5}px` }} />

              <div
                className="rounded-full relative animate-spin pointer-events-auto"
                style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, animationDuration: "28s" }}
              >
                {orbitItems.map((item, index) => {
                  const angle = (index * (360 / orbitItems.length) * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="absolute top-1/2 left-1/2"
                      style={{ transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` }}
                    >
                      <div
                        className="animate-spin group cursor-pointer transition-transform hover:scale-125"
                        style={{ animationDuration: "28s", animationDirection: "reverse" }}
                      >
                        <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(22,163,74,0.12)] dark:shadow-[0_4px_14px_rgba(0,0,0,0.6)] bg-white/95 dark:bg-[#111827]/90 border border-emerald-100 dark:border-emerald-800/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:border-emerald-300">
                          <IconComp className="w-5 h-5 md:w-7 md:h-7 transition-transform group-hover:scale-110" style={{ color: item.color }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Central portrait */}
            <div className="relative z-10 w-full max-w-[270px] md:max-w-[360px] flex flex-col items-center">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-[#22C55E]/25 via-[#16A34A]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

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
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-0 px-4 py-2 rounded-full bg-white/90 dark:bg-[#111827]/90 border border-emerald-200/80 dark:border-emerald-800/80 shadow-[0_6px_20px_rgba(22,163,74,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2 z-20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E] animate-pulse" />
                <span className="font-mono text-xs text-gray-700 dark:text-gray-200 font-medium">
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
