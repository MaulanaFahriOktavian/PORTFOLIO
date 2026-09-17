import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Database, GitBranch, Users, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DCube, FloatingLightning } from "../ui/Floating3DAssets";

const pillars = [
  {
    id: "dual-competency",
    icon: Layers,
    badge: "DUAL COMPETENCY",
    title: "Bridge UI/UX ke Full-Stack Code",
    shortDesc: "Mampu merancang antarmuka di Figma dan langsung mengeksekusinya menjadi kode fungsional tanpa distorsi desain.",
    description:
      "Mampu merancang antarmuka terstruktur di Figma (Auto Layout, Design System, Tokens) dan langsung mewujudkannya menjadi kode fungsional dengan React, Tailwind CSS, dan Laravel tanpa distorsi desain.",
    points: [
      "Desain Sistem & Prototyping Figma Terstandar",
      "Komponen Modular & Antarmuka Responsif",
      "Integrasi Backend Laravel, Blade & REST API"
    ],
  },
  {
    id: "production-tested",
    icon: Database,
    badge: "PRODUCTION TESTED",
    title: "Terbukti Membangun Sistem Nyata",
    shortDesc: "Menyelesaikan dan men-deploy sistem DIDISPEN yang aktif digunakan di SMKN 1 Bangsri dengan alur multi-peran.",
    description:
      "Bukan sekadar latihan tutorial. Berhasil menyelesaikan dan men-deploy sistem DIDISPEN yang aktif digunakan di lingkungan SMKN 1 Bangsri dengan alur izin digital multi-peran yang ketat dan aman.",
    points: [
      "Arsitektur Database Relasional MySQL Terstruktur",
      "Autentikasi Multi-Peran (Role-Based Access Control)",
      "Diuji Nyata untuk Penilaian Uji Kompetensi Keahlian (UKK)"
    ],
  },
  {
    id: "industry-standards",
    icon: GitBranch,
    badge: "INDUSTRY STANDARDS",
    title: "Workflow & Tooling Standar Industri",
    shortDesc: "Terbiasa version control Git/GitHub, pengujian API Postman, dan penulisan kode bersih yang mudah dipelihara.",
    description:
      "Terbiasa menggunakan version control Git & GitHub secara disiplin, pengujian RESTful API dengan Postman, serta penulisan kode bersih yang terstruktur dan mudah dipelihara oleh tim pengembang.",
    points: [
      "Git Version Control, Branching & Commit Disiplin",
      "API Testing & HTTP Debugging via Postman",
      "Struktur Folder Rapi & Standar Penamaan Bersih"
    ],
  },
  {
    id: "work-ethic",
    icon: Users,
    badge: "WORK ETHIC",
    title: "Kolaborasi Tim & Cepat Beradaptasi",
    shortDesc: "Berpengalaman kerja tim solid di divisi TIK organisasi, disiplin waktu, dan antusias mempelajari tech stack baru.",
    description:
      "Memiliki pengalaman kerja tim solid dalam Tim 3M dan divisi TIK organisasi sekolah. Memiliki komitmen tinggi, disiplin waktu, dan haus mempelajari teknologi baru yang digunakan perusahaan.",
    points: [
      "Komunikasi Teknis yang Terbuka & Solutif",
      "Tanggung Jawab Penuh atas Penyelesaian Tugas",
      "Siap & Cepat Belajar Tech Stack Baru Perusahaan"
    ],
  },
];

export default function WhyHireSection({ onOpenResume }) {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="why-hire"
      className="py-12 sm:py-20 md:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
    >
      {/* 3D Visual Accents */}
      <Floating3DCube
        className="top-10 right-8 sm:right-20 opacity-70 dark:opacity-60"
        size={52}
        delay={0.6}
        rotate={20}
      />
      <FloatingLightning
        className="bottom-12 -left-6 sm:left-8 opacity-65 dark:opacity-55"
        scale={0.75}
        rotate={-18}
        delay={1.3}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Komitmen & Nilai Tambah"
        />

        {/* Introduction Pitch */}
        <div className="max-w-3xl mb-6 sm:mb-10 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#111827] dark:text-white tracking-tight leading-snug mb-2 sm:mb-2.5">
            Mengapa Maulana Fahri siap berkontribusi dalam tim Anda?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-light leading-[1.75]">
            Sebagai siswa jurusan PPLG dari SMK Negeri 1 Bangsri, saya tidak hanya membawa pemahaman dasar, melainkan antusiasme belajar tinggi dan kesiapan praktik langsung dengan etos kerja yang disiplin.
          </p>
        </div>

        {/* 4 Pillars Grid (2 Columns on Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isExpanded = expandedIds.has(pillar.id);

            return (
              <div
                key={pillar.id}
                className="group p-3 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] dark:hover:shadow-[0_8px_24px_rgba(34,197,94,0.15)] transition-colors duration-150 sm:transition-all sm:duration-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-3 mb-2 sm:mb-4">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-[#16A34A] dark:text-[#22C55E] group-hover:scale-105 transition-transform">
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-mono text-[7.5px] sm:text-[9.5px] text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 truncate">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#111827] dark:text-white mb-1 sm:mb-1.5 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-2.5 sm:mb-3">
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Detail Button */}
                <div className="pt-2 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <span className="hidden sm:inline-block text-[10px] font-mono text-gray-400 dark:text-gray-500">
                    {isExpanded ? "Rincian lengkap" : "3 poin pembuktian"}
                  </span>
                  <button
                    onClick={() => toggleExpand(pillar.id)}
                    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 w-full sm:w-auto px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-[#16A34A] dark:text-[#22C55E] bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 transition-colors cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>{isExpanded ? "Tutup Detail" : "Lihat Detail"}</span>
                    <ChevronDown
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Full Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2.5 sm:pt-3.5 mt-2 sm:mt-2.5 border-t border-dashed border-gray-200 dark:border-white/10">
                        {/* Full Detailed Description */}
                        <p className="text-[10.5px] sm:text-xs md:text-sm text-gray-700 dark:text-gray-200 font-light leading-relaxed mb-2.5">
                          {pillar.description}
                        </p>

                        {/* Full Bullet Checklist */}
                        <div className="space-y-1.5">
                          <span className="text-[9.5px] sm:text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#16A34A] dark:text-[#22C55E] block mb-1">
                            Poin Pembuktian:
                          </span>
                          {pillar.points.map((pt) => (
                            <div key={pt} className="flex items-start gap-1.5 text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 leading-snug">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
