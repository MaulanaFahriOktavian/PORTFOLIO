import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, FileText, MapPin } from "lucide-react";
import fahriPhoto from "../../assets/images/fahri.png";
import { FloatingLightning } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

/* ─── One-shot entrance helpers (zero infinite loops) ─── */
const fUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Instagram Card Component ─── */
function InstagramCard({ className = "max-w-[340px] sm:max-w-[360px]" }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {/* IG Card body */}
      <div
        className="relative rounded-[20px] overflow-hidden border border-white/[0.08] dark:border-white/[0.08] shadow-[0_22px_70px_rgba(0,0,0,0.55)] select-none"
        style={{ background: "#0e0e0e" }}
      >
        {/* ─── IG Top bar ─── */}
        <div className="flex items-center justify-between px-3.5 py-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            {/* Story ring avatar */}
            <div
              className="w-9 h-9 rounded-full p-[2.5px] flex-none"
              style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
            >
              <div className="w-full h-full rounded-full border-2 border-[#0e0e0e] overflow-hidden">
                <img
                  src={fahriPhoto}
                  alt="avatar"
                  className="w-full h-full object-cover object-top scale-[1.8]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-white text-xs font-semibold leading-tight tracking-tight">fhrimlnn__</p>
                {/* Verified badge */}
                <svg className="w-3.5 h-3.5 text-[#0095f6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-gray-400" />
                <p className="text-gray-400 text-[10px] leading-none">Jepara, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setFollowing(!following)}
              className={`px-3 py-1 rounded-md text-[10.5px] font-semibold transition-all cursor-pointer ${
                following
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-[#0095f6] text-white hover:bg-[#1877f2]"
              }`}
            >
              {following ? "Following" : "Follow"}
            </button>
            <div className="flex flex-col gap-[3.5px] items-center p-1 cursor-default">
              <span className="w-[3px] h-[3px] rounded-full bg-gray-400" />
              <span className="w-[3px] h-[3px] rounded-full bg-gray-400" />
              <span className="w-[3px] h-[3px] rounded-full bg-gray-400" />
            </div>
          </div>
        </div>

        {/* ─── Photo ─── */}
        <div
          className="relative w-full aspect-[4/5] overflow-hidden bg-black/40 cursor-pointer"
          onDoubleClick={() => setLiked(true)}
        >
          <img
            src={fahriPhoto}
            alt="Maulana Fahri Oktavian"
            className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>

        {/* ─── Action bar ─── */}
        <div className="px-3.5 pt-2.5 pb-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3.5">
              {/* Heart button */}
              <button
                onClick={() => setLiked(!liked)}
                className="cursor-pointer active:scale-90 transition-transform"
                aria-label="Like post"
              >
                {liked ? (
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-[#ed4956] text-[#ed4956]">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="white" strokeWidth={1.8}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )}
              </button>
              {/* Comment */}
              <button className="cursor-pointer active:scale-90 transition-transform" aria-label="Comment">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="white" strokeWidth={1.8}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              {/* Share */}
              <button className="cursor-pointer active:scale-90 transition-transform" aria-label="Share">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="white" strokeWidth={1.8}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            {/* Bookmark */}
            <button
              onClick={() => setSaved(!saved)}
              className="cursor-pointer active:scale-90 transition-transform"
              aria-label="Save"
            >
              {saved ? (
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white text-white">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="white" strokeWidth={1.8}>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Likes */}
          <p className="text-white text-[11px] font-semibold">
            {liked ? "1.248 suka" : "1.247 suka"}
          </p>

          {/* Caption */}
          <p className="text-white text-[11px] leading-snug mt-0.5">
            <span className="font-semibold">fhrimlnn__ </span>
            Web Developer &amp; UI/UX Designer 🚀✨
          </p>
          <p className="text-[#0095f6] text-[10.5px] mt-0.5">#webdev #uiux #laravel #react #figma</p>

          {/* View comments */}
          <p className="text-gray-500 text-[10.5px] mt-1 cursor-pointer hover:text-gray-400">
            Lihat semua 48 komentar
          </p>

          {/* Timestamp */}
          <p className="text-gray-500 text-[9.5px] uppercase tracking-widest mt-1">
            2 jam yang lalu
          </p>
        </div>
      </div>

      {/* Glow halo */}
      <div
        className="absolute -inset-1.5 rounded-[24px] -z-10 pointer-events-none opacity-50"
        style={{
          background: "linear-gradient(135deg,rgba(240,148,51,0.25),rgba(220,39,67,0.2),rgba(188,24,136,0.15))",
          filter: "blur(22px)",
        }}
      />
    </div>
  );
}

export default function HeroSection({ onExploreClick, onOpenResume }) {
  const handleScrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex items-start lg:items-center pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 border-b border-gray-200/80 dark:border-white/10 overflow-hidden select-none bg-transparent"
    >
      {/* ── Static ambient blobs — no JS animation, pure CSS ── */}
      <div
        className="absolute top-[-8%] right-[-6%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(34,197,94,0.18) 0%,rgba(16,185,129,0.08) 45%,transparent 75%)", filter: "blur(90px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-12%] left-[-5%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(5,150,105,0.14) 0%,transparent 70%)", filter: "blur(80px)" }}
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute top-1/4 left-1/3 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "rgba(34,197,94,0.07)", filter: "blur(70px)" }}
        aria-hidden="true"
      />

      {/* Desktop lightning accents only (hidden on mobile) */}
      <FloatingLightning className="hidden lg:block top-14 right-24"   scale={1}    rotate={22}  delay={0}   />
      <FloatingLightning className="hidden lg:block bottom-16 left-10" scale={0.78} rotate={-28} delay={1.2} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ════════════════ MOBILE (< lg) ════════════════ */}
        <div className="lg:hidden flex flex-col gap-5">

          {/* Status badge */}
          <motion.div {...fUp(0)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 tracking-widest uppercase font-semibold">
                Siswa SMKN 1 Bangsri · Kelas 12 PPLG
              </span>
            </div>
          </motion.div>

          {/* Headline + bio */}
          <motion.div {...fUp(0.08)} className="flex flex-col gap-2">
            <h1 className="text-[2rem] sm:text-[2.4rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Web Developer
              <br />
              <span className="relative">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg,#22c55e,#34d399,#2dd4bf)" }}
                >
                  &amp; UI/UX Designer
                </span>
                <span
                  className="absolute left-0 -bottom-0.5 h-[2.5px] w-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#10b981,#2dd4bf)" }}
                />
              </span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[92%]">
              Halo, saya{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Maulana Fahri Oktavian</span>
              {" "}— merancang UI/UX modern di Figma &amp; membangun sistem web dengan Laravel, MySQL, dan Tailwind CSS.
            </p>
          </motion.div>

          {/* ── Hero Portrait Card (Instagram Style) ── */}
          <motion.div {...fUp(0.16)} className="w-full flex justify-center">
            <InstagramCard />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fUp(0.22)} className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex-1 min-w-[140px] px-4 py-2.5 rounded-full font-semibold text-xs text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
              style={{ background: "linear-gradient(135deg,#16a34a,#22c55e,#16a34a)", boxShadow: "0 6px 22px rgba(22,163,74,0.35)" }}
            >
              <FileText className="w-3.5 h-3.5" /> Lihat CV / Resume
            </button>

            <button
              onClick={() => (onExploreClick ? onExploreClick() : handleScrollTo("work"))}
              className="flex-1 min-w-[100px] px-4 py-2.5 rounded-full text-xs font-semibold text-gray-800 dark:text-white flex items-center justify-center gap-1.5 border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] cursor-pointer active:scale-95 transition-transform"
            >
              Proyek <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
            </button>

            <a
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] px-4 py-2.5 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center justify-center border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] cursor-pointer active:scale-95 transition-transform"
            >
              WhatsApp
            </a>

            <a
              href="mailto:jeparafahri982@gmail.com"
              aria-label="Email Fahri"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.05] flex items-center justify-center text-gray-600 dark:text-gray-300 cursor-pointer active:scale-95 transition-transform"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* ════════════════ DESKTOP (lg+) ════════════════ */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center min-h-[82vh]">

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
              className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]"
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

            <motion.p {...fUp(0.18)} className="text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Siswa SMK Negeri 1 Bangsri jurusan PPLG. Berpengalaman merancang antarmuka UI/UX di Figma dan mengembangkan sistem web fungsional menggunakan{" "}
              <strong className="text-gray-700 dark:text-gray-200 font-semibold">Laravel, MySQL,</strong> dan{" "}
              <strong className="text-gray-700 dark:text-gray-200 font-semibold">Tailwind CSS</strong>.
            </motion.p>

            {/* Stats */}
            <motion.div {...fUp(0.22)} className="flex gap-7">
              {[
                { label: "Proyek Selesai", value: "10+" },
                { label: "Teknologi",      value: "6+"  },
                { label: "Desain UI",      value: "15+" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-2xl font-black bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg,#22c55e,#2dd4bf)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fUp(0.28)} className="flex flex-wrap items-center gap-3.5">
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

          {/* Right: Instagram Portrait Card */}
          <motion.div
            className="col-span-6 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <InstagramCard className="max-w-[390px] xl:max-w-[410px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
