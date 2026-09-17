import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, ArrowRight, FileText } from "lucide-react";
import fahriPhoto from "../../assets/images/fahri.png";
import { profileData } from "../../data/profile";

/* ─── One-shot entrance helpers ─── */
const fUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Ultra-Lightweight 120fps Developer ID Card ─── */
function DeveloperIdCard({ className = "max-w-[275px] sm:max-w-[290px]" }) {
  // Direct motion values for zero-latency 1:1 pointer tracking
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Soft physics spring for natural ribbon inertia & fluid cloth sway
  const ribbonSwayX = useSpring(cardX, { stiffness: 220, damping: 18, mass: 0.7 });
  const ribbonSwayY = useSpring(cardY, { stiffness: 220, damping: 18, mass: 0.7 });

  // Natural card rotation on drag
  const rotateCard = useTransform(cardX, [-140, 140], [-12, 12]);

  // Dynamic White Ribbon Strap Path (Fluid fabric curve with visible sway)
  const strapPath = useTransform([cardX, cardY, ribbonSwayX, ribbonSwayY], ([x, y, sx]) => {
    const bx = 180 + x;
    const by = 48 + y;
    // Dynamic sway inertia based on drag movement
    const swayDelta = (x - sx) * 0.38;
    const ctlX = (156 + bx - 24) / 2 + swayDelta;
    const ctrX = (204 + bx + 24) / 2 + swayDelta;
    const midY = (0 + by) / 2;
    return `M 156 -16 Q ${ctlX} ${midY} ${bx - 24} ${by} L ${bx + 24} ${by} Q ${ctrX} ${midY} 204 -16 Z`;
  });

  // Zero-CPU Shadow Path following the fluid strap
  const shadowPath = useTransform([cardX, cardY, ribbonSwayX, ribbonSwayY], ([x, y, sx]) => {
    const bx = 180 + x;
    const by = 51 + y;
    const swayDelta = (x - sx) * 0.38;
    const ctlX = (156 + bx - 24) / 2 + swayDelta;
    const ctrX = (204 + bx + 24) / 2 + swayDelta;
    const midY = (3 + by) / 2;
    return `M 156 -13 Q ${ctlX} ${midY} ${bx - 24} ${by} L ${bx + 24} ${by} Q ${ctrX} ${midY} 204 -13 Z`;
  });

  // Left stitch accent path
  const leftStitch = useTransform([cardX, cardY, ribbonSwayX, ribbonSwayY], ([x, y, sx]) => {
    const bx = 180 + x;
    const by = 48 + y;
    const swayDelta = (x - sx) * 0.38;
    const ctlX = (160 + bx - 20) / 2 + swayDelta;
    const midY = (0 + by) / 2;
    return `M 160 -16 Q ${ctlX} ${midY} ${bx - 20} ${by}`;
  });

  // Right stitch accent path
  const rightStitch = useTransform([cardX, cardY, ribbonSwayX, ribbonSwayY], ([x, y, sx]) => {
    const bx = 180 + x;
    const by = 48 + y;
    const swayDelta = (x - sx) * 0.38;
    const ctrX = (200 + bx + 20) / 2 + swayDelta;
    const midY = (0 + by) / 2;
    return `M 200 -16 Q ${ctrX} ${midY} ${bx + 20} ${by}`;
  });

  return (
    <div className={`relative w-full select-none flex flex-col items-center ${className}`}>
      {/* Lanyard Top Ceiling Anchor Bracket */}
      <div className="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700 -mb-0.5 shadow-sm z-20 pointer-events-none opacity-80" />

      {/* ── Photo 1: Dynamic Flat White Fabric Lanyard Strap (Zero Filter Overhead) ── */}
      <div className="w-full h-[52px] relative -mb-3 pointer-events-none z-10 flex justify-center">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 360 52"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Smooth Woven White Fabric Gradient (Lightweight CSS gradient, no raster filter) */}
            <linearGradient id="whiteFabricRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="8%" stopColor="#e5e7eb" />
              <stop offset="20%" stopColor="#f9fafb" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#f9fafb" />
              <stop offset="92%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>

          {/* Lightweight Vector Drop Shadow (Instantaneous GPU render, 0% CPU cost) */}
          <motion.path
            d={shadowPath}
            fill="#000000"
            opacity="0.16"
          />

          {/* Solid White Woven Ribbon Band */}
          <motion.path
            d={strapPath}
            fill="url(#whiteFabricRibbon)"
          />

          {/* Left Stitch Accent */}
          <motion.path
            d={leftStitch}
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            strokeDasharray="3 2"
            opacity="0.6"
          />

          {/* Right Stitch Accent */}
          <motion.path
            d={rightStitch}
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.2"
            strokeDasharray="3 2"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* ── Draggable Card Assembly (GPU Composited Layer) ── */}
      <motion.div
        drag
        dragSnapToOrigin={true}
        dragElastic={0.25}
        dragTransition={{ bounceStiffness: 420, bounceDamping: 20 }}
        style={{
          x: cardX,
          y: cardY,
          rotate: rotateCard,
          willChange: "transform",
        }}
        whileHover={{ scale: 1.015, cursor: "grab" }}
        whileDrag={{ scale: 1.035, cursor: "grabbing", zIndex: 60 }}
        className="relative w-full flex flex-col items-center"
      >
        {/* ── Photo 1: Chrome D-Ring & Lobster Clasp Assembly ── */}
        <div className="relative z-30 flex flex-col items-center -mb-4 pointer-events-none">
          {/* White Ribbon Bottom Fold Hem */}
          <div className="w-[48px] h-3 rounded-t-sm bg-gradient-to-b from-[#ffffff] via-[#f3f4f6] to-[#e5e7eb] border-t border-slate-300 shadow-sm flex items-center justify-between px-1">
            <span className="w-1 h-1.5 border-r border-slate-400 opacity-40" />
            <div className="w-6 h-[1px] bg-slate-400/40" />
            <span className="w-1 h-1.5 border-l border-slate-400 opacity-40" />
          </div>

          {/* Chrome D-Ring Loop */}
          <div className="relative -mt-1 flex flex-col items-center">
            <svg className="w-10 h-7 text-slate-300" viewBox="0 0 48 32" fill="none">
              <path
                d="M8 4 L40 4 C40 4, 40 27, 24 27 C8 27, 8 4, 8 4 Z"
                stroke="url(#chromeDring)"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="chromeDring" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#cbd5e1" />
                  <stop offset="50%" stopColor="#64748b" />
                  <stop offset="75%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Chrome Swivel Barrel */}
            <div
              className="w-3 h-2.5 rounded-[2px] border border-slate-400 -mt-2 z-10"
              style={{
                background: "linear-gradient(90deg, #64748b 0%, #ffffff 50%, #64748b 100%)",
              }}
            />
          </div>

          {/* Chrome Lobster Claw Snap Hook (Passes through oval slot) */}
          <div className="relative -mt-1 z-20">
            <svg className="w-7 h-11 text-slate-200" viewBox="0 0 32 48" fill="none">
              <circle cx="16" cy="6" r="4.5" stroke="url(#chromeHook)" strokeWidth="2.8" />
              
              <path
                d="M13.5 10 C13.5 15, 11 22, 11 29 C11 39, 21 41, 21 32 C21 27, 17 25, 17 20"
                stroke="url(#chromeHook)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              
              <path
                d="M19.5 22 L14 31.5"
                stroke="#64748b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              
              <rect x="7" y="19" width="3" height="6.5" rx="1.5" fill="url(#chromeHook)" stroke="#475569" strokeWidth="0.5" />

              {/* Front Claw Tip */}
              <path
                d="M11 34 C12 40, 20 40, 20 33 C20 29, 17 27, 17 24"
                stroke="url(#chromeHookTip)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient id="chromeHook" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e2e8f0" />
                  <stop offset="60%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="chromeHookTip" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ── Photo 1 Card Form Factor: Authentic Badge with Punched Oval Slot ── */}
        <div className="relative w-full rounded-[20px] p-[2px] bg-white dark:bg-white/95 shadow-[0_12px_32px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Outer Bevel Highlight */}
          <div className="absolute inset-0 rounded-[20px] border border-black/10 pointer-events-none z-30" />

          {/* ── Photo 2 Artwork Body: System Emerald-Teal Palette with Batik Motifs ── */}
          <div
            className="relative rounded-[17px] overflow-hidden flex flex-col justify-between"
            style={{
              background: "linear-gradient(180deg, #064e3b 0%, #047857 35%, #059669 70%, #022c22 100%)",
              aspectRatio: "1 / 1.58",
            }}
          >
            {/* Batik / Swirl Ornamental Flourish Watermark */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              viewBox="0 0 360 550"
              fill="none"
            >
              <path
                d="M-30 60 C50 10, 80 130, 160 70 C240 10, 270 140, 390 80"
                stroke="#a7f3d0"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M-20 150 C70 90, 110 210, 200 140 C290 70, 310 220, 390 150"
                stroke="#a7f3d0"
                strokeWidth="1.5"
              />
              <path
                d="M35 45 A25 25 0 0 1 75 80 A20 20 0 0 1 55 110 A10 10 0 0 1 45 95"
                stroke="#a7f3d0"
                strokeWidth="1.8"
              />
              <path
                d="M325 55 A35 35 0 0 0 280 100 A22 22 0 0 0 305 135 A12 12 0 0 0 320 120"
                stroke="#a7f3d0"
                strokeWidth="1.8"
              />
              <path
                d="M-10 320 C80 280, 120 360, 220 310 C320 260, 340 370, 380 320"
                stroke="#a7f3d0"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
            </svg>

            {/* ── Photo 1: Physical Oval Punched Hole ── */}
            <div className="pt-2.5 pb-0.5 flex justify-center relative z-20">
              <div
                className="w-11 h-2.5 rounded-full border border-black/25 flex items-center justify-center"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(6,78,59,0.9) 0%, rgba(2,44,34,0.95) 100%)",
                }}
              >
                <div className="w-7 h-[1px] rounded-full bg-white/20 -mt-0.5" />
              </div>
            </div>

            {/* ── Photo 2: Institution & Department Header Bar ── */}
            <div className="px-2.5 pt-0.5 pb-1 relative z-20 flex items-center justify-between text-white border-b border-emerald-400/20">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/25 flex items-center justify-center border border-emerald-300/40 text-[8px] font-bold text-emerald-300">
                  ★
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider leading-none">
                    SMKN 1 BANGSRI
                  </span>
                  <span className="text-[6.5px] sm:text-[7px] font-semibold text-emerald-200 tracking-tight mt-0.5">
                    REKAYASA PERANGKAT LUNAK &amp; GIM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-[6.5px] sm:text-[7px] font-mono font-bold tracking-wider text-emerald-200">
                  SMK BISA!
                </span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-[6.5px] sm:text-[7px] font-mono font-bold tracking-wider text-emerald-200">
                  MERDEKA
                </span>
              </div>
            </div>

            {/* ── Photo 2: Giant Vertical Background Typography Behind Subject ── */}
            <div className="absolute top-12 left-0.5 z-0 pointer-events-none select-none">
              <span
                className="text-[3.2rem] sm:text-[3.6rem] font-black text-white/[0.16] tracking-widest leading-none font-sans block uppercase"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                FAHRI
              </span>
            </div>

            <div className="absolute top-14 right-0.5 z-0 pointer-events-none select-none">
              <span
                className="text-[3.2rem] sm:text-[3.6rem] font-black text-white/[0.16] tracking-widest leading-none font-sans block uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                PPLG
              </span>
            </div>

            {/* ── Photo 2: Cutout Subject (Fahri uncropped, fully visible head to uniform) ── */}
            <div className="relative z-10 w-full flex-1 flex items-end justify-center overflow-visible pt-1">
              <img
                src={fahriPhoto}
                alt="Maulana Fahri Oktavian"
                className="w-[92%] max-h-[255px] sm:max-h-[285px] object-contain object-bottom select-none drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* ── Photo 2: Dual Identity Bottom Banner (No Truncation, Clean Sizing) ── */}
            <div className="relative z-20 px-2 pb-2 pt-1 flex items-stretch gap-1.5 bg-gradient-to-t from-[#022c22] via-[#022c22]/95 to-transparent">
              {/* Left Block: Solid Emerald Green Box */}
              <div className="bg-[#16a34a] rounded-lg px-2.5 py-1.5 flex items-center justify-center shadow-md flex-none border border-emerald-300/40">
                <span className="text-white text-xs sm:text-sm font-black tracking-wider uppercase leading-none">
                  FAHRI
                </span>
              </div>

              {/* Right Block: Clean White Rounded Card with Brand & Tagline */}
              <div className="flex-1 min-w-0 bg-white dark:bg-white rounded-lg px-2 py-1 flex items-center gap-1.5 shadow-md border border-white/80">
                {/* Monogram / Logo Mark */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-tr from-[#16a34a] to-[#22c55e] flex items-center justify-center text-white font-black text-[9px] sm:text-[10px] flex-none shadow-xs">
                  <span className="font-mono">&lt;/&gt;</span>
                </div>

                {/* Typography Block - No Cutoff! */}
                <div className="flex flex-col min-w-0 flex-1 justify-center">
                  <h4 className="text-slate-950 font-black text-[11px] sm:text-[12.5px] leading-tight tracking-tight whitespace-nowrap">
                    Web Developer
                  </h4>
                  <p className="text-emerald-800 text-[8px] sm:text-[9px] leading-tight font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    UI/UX Designer · PPLG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection({ onExploreClick, onOpenResume }) {
  const handleScrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex items-start lg:items-center pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-16 border-b border-gray-200/80 dark:border-white/10 overflow-hidden select-none bg-transparent"
    >
      {/* ── Static ambient blobs (Lightweight CSS blurs) ── */}
      <div
        className="absolute top-[-8%] right-[-6%] w-[420px] h-[420px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle,rgba(34,197,94,0.18) 0%,rgba(16,185,129,0.06) 50%,transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12%] left-[-5%] w-[320px] h-[320px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle,rgba(5,150,105,0.14) 0%,transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ════════════════ MOBILE (< lg) ════════════════ */}
        <div className="lg:hidden flex flex-col items-center text-center gap-6">

          {/* ── Hero Portrait ID Card (Mobile - Di Paling Atas, Proporsional) ── */}
          <motion.div {...fUp(0)} className="w-full flex justify-center pt-1 pb-1">
            <DeveloperIdCard className="max-w-[240px] sm:max-w-[275px]" />
          </motion.div>

          {/* Status badge */}
          <motion.div {...fUp(0.08)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10.5px] text-emerald-700 dark:text-emerald-400 tracking-wider uppercase font-semibold">
                Siswa SMKN 1 Bangsri · Kelas 12 PPLG
              </span>
            </div>
          </motion.div>

          {/* Headline + bio */}
          <motion.div {...fUp(0.14)} className="flex flex-col items-center gap-3.5 max-w-lg mx-auto">
            <h1 className="text-[1.95rem] sm:text-[2.35rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.2] pb-1">
              Web Developer
              <br />
              <span className="relative inline-block mt-0.5">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg,#22c55e,#34d399,#2dd4bf)" }}
                >
                  &amp; UI/UX Designer
                </span>
                <span
                  className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#10b981,#2dd4bf)" }}
                />
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-[1.75] max-w-[340px] sm:max-w-md mx-auto">
              Halo, saya{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Maulana Fahri Oktavian</span>
              {" "}— merancang UI/UX modern di Figma serta membangun sistem web dengan Laravel, MySQL, dan Tailwind CSS.
            </p>
          </motion.div>

          {/* CTA Buttons (Balanced 2-tier layout) */}
          <motion.div {...fUp(0.20)} className="flex flex-col gap-2.5 w-full max-w-sm mx-auto pt-1">
            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-5 rounded-full font-semibold text-xs text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
              style={{ background: "linear-gradient(135deg,#16a34a,#22c55e,#16a34a)", boxShadow: "0 6px 20px rgba(22,163,74,0.35)" }}
            >
              <FileText className="w-3.5 h-3.5" /> Lihat CV / Resume
            </button>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
                className="py-2.5 px-2 rounded-full text-xs font-semibold text-gray-800 dark:text-white flex items-center justify-center gap-1 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] cursor-pointer active:scale-95 transition-transform truncate"
              >
                Proyek <ArrowRight className="w-3 h-3 text-emerald-500" />
              </button>

              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center justify-center gap-1 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] cursor-pointer active:scale-95 transition-transform truncate"
              >
                WhatsApp
              </a>

              <a
                href="mailto:jeparafahri982@gmail.com"
                aria-label="Email Fahri"
                className="py-2.5 px-2 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center justify-center gap-1 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] cursor-pointer active:scale-95 transition-transform truncate"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" /> Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* ════════════════ DESKTOP (lg+) ════════════════ */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center min-h-[78vh]">

          {/* Left: Text */}
          <div className="col-span-6 flex flex-col justify-center relative z-20 gap-5">

            <motion.div {...fUp(0)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] text-emerald-700 dark:text-emerald-300 tracking-widest uppercase font-semibold">
                  Siswa SMKN 1 Bangsri · Kelas 12 PPLG
                </span>
              </div>
            </motion.div>

            <motion.div {...fUp(0.06)}>
              <span className="font-mono text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                Halo, saya —{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Maulana Fahri Oktavian</span>
              </span>
            </motion.div>

            <motion.h1
              {...fUp(0.12)}
              className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.18]"
            >
              Web Developer{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg,#22c55e,#34d399,#2dd4bf)" }}
                >
                  &amp; UI/UX Designer
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full"
                  style={{ backgroundImage: "linear-gradient(90deg,#22c55e,#2dd4bf)", width: "100%" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p {...fUp(0.18)} className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-[1.75] max-w-xl">
              Siswa SMK Negeri 1 Bangsri jurusan PPLG. Berpengalaman merancang antarmuka UI/UX di Figma serta mengembangkan sistem web fungsional menggunakan{" "}
              <strong className="text-gray-800 dark:text-gray-100 font-semibold">Laravel, MySQL,</strong> dan{" "}
              <strong className="text-gray-800 dark:text-gray-100 font-semibold">Tailwind CSS</strong>.
            </motion.p>

            {/* CTA */}
            <motion.div {...fUp(0.22)} className="flex flex-wrap items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-full font-semibold text-sm text-white flex items-center gap-2 cursor-pointer transition-shadow"
                style={{ background: "linear-gradient(135deg,#16a34a,#22c55e,#16a34a)", boxShadow: "0 6px 24px rgba(22,163,74,0.35)" }}
              >
                <FileText className="w-4 h-4" /> Lihat CV / Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
                className="px-5 py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] text-gray-800 dark:text-white font-semibold text-sm flex items-center gap-2 cursor-pointer hover:border-emerald-400 transition-colors"
              >
                Lihat Proyek <ArrowRight className="w-4 h-4 text-emerald-500" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] text-gray-700 dark:text-gray-200 font-semibold text-sm cursor-pointer hover:border-emerald-400 transition-colors"
              >
                WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                href="mailto:jeparafahri982@gmail.com"
                aria-label="Email Fahri"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 flex items-center justify-center cursor-pointer hover:border-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Balanced & Ultra-Lightweight ID Card */}
          <motion.div
            className="col-span-6 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <DeveloperIdCard className="max-w-[275px] xl:max-w-[290px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
