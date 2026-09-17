import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, CheckCircle2, MapPin, Calendar, ChevronDown, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DSphere, Floating3DStar } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

const timelineItems = [
  // ── 1. Proyek: DIDISPEN ──
  {
    id: "didispen",
    type: "project",
    category: "PENGALAMAN PROYEK",
    badge: "Official School Project",
    period: "2026",
    role: "UI/UX Designer & Web Developer",
    title: "DIDISPEN – Sistem Informasi Dispensasi Sekolah",
    institution: "SMK Negeri 1 Bangsri",
    location: "Bangsri, Jepara",
    shortSummary:
      "Sistem informasi web perizinan digital resmi SMKN 1 Bangsri berbasis Laravel 11 dan MySQL dengan autentikasi multi-peran.",
    bullets: [
      "Merancang dokumentasi sistem (PRD, ERD, Flowchart) dan struktur basis data relasional MySQL.",
      "Membuat wireframe dan prototype interaktif antarmuka di Figma.",
      "Mengembangkan sistem informasi web berbasis Laravel dan MySQL dengan pengajuan izin digital.",
      "Mengimplementasikan hak akses multi-peran (Siswa, Guru Piket, Satpam Gerbang)."
    ],
    tags: ["Laravel", "MySQL", "Tailwind CSS", "Figma", "PRD/ERD", "Multi-Role Auth"]
  },

  // ── 2. Proyek: BeWood ──
  {
    id: "bewood",
    type: "project",
    category: "PENGALAMAN PROYEK",
    badge: "E-Commerce Platform",
    period: "2025",
    role: "Full-Stack Web Developer",
    title: "BeWood (Gembol Jati Furniture)",
    institution: "Produksi Mebel Jepara",
    location: "Jepara, Jawa Tengah",
    shortSummary:
      "Platform e-commerce dan katalog interaktif mebel Jepara dengan dashboard manajemen inventaris toko berbasis Laravel & Livewire.",
    bullets: [
      "Membangun platform e-commerce dan katalog produk mebel Jepara interaktif berbasis Laravel, Livewire, dan MySQL.",
      "Mengembangkan tampilan antarmuka responsif dengan Tailwind CSS.",
      "Mengimplementasikan dashboard manajemen inventaris bagi admin toko mebel."
    ],
    tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "E-Commerce", "Inventory"]
  },

  // ── 3. Organisasi: PASSUS WIRA ADHI DAYA ──
  {
    id: "passus",
    type: "organization",
    category: "PENGALAMAN ORGANISASI",
    badge: "Ekstrakurikuler Khusus",
    period: "2024 — Sekarang",
    role: "Divisi TIK & Dokumentator",
    title: "PASSUS WIRA ADHI DAYA",
    institution: "SMKN 1 Bangsri",
    location: "Bangsri, Jepara",
    shortSummary:
      "Pengelolaan publikasi TIK, perancangan pamflet hari-hari besar, serta dokumentasi visual kegiatan resmi ekstrakurikuler.",
    bullets: [
      "Divisi TIK: Bertanggung jawab membuat pamflet peringatan hari-hari besar untuk kebutuhan ekstrakurikuler.",
      "Dokumentator: Mengelola dokumentasi visual dalam berbagai kegiatan organisasi."
    ],
    tags: ["Divisi TIK", "Desain Pamflet", "Dokumentasi Visual", "Canva", "Teamwork"]
  },

  // ── 4. Organisasi: PRAMUKA SMKN 1 BANGSRI ──
  {
    id: "pramuka",
    type: "organization",
    category: "PENGALAMAN ORGANISASI",
    badge: "Kepemimpinan & Publikasi",
    period: "2024 — Sekarang",
    role: "Divisi HUMAS, Desainer & Dokumentator",
    title: "PRAMUKA SMKN 1 BANGSRI",
    institution: "SMKN 1 Bangsri",
    location: "Bangsri, Jepara",
    shortSummary:
      "Manajemen komunikasi publik (HUMAS 2025–2026), produksi aset grafis publikasi, dan dokumentasi agenda kepramukaan.",
    bullets: [
      "Divisi HUMAS (Masa Bhakti 2025–2026): Mengelola komunikasi publik dan hubungan masyarakat.",
      "Desainer & Dokumentator: Merancang aset visual serta mendokumentasikan seluruh rangkaian acara Pramuka."
    ],
    tags: ["Divisi HUMAS", "Komunikasi Publik", "Desain Grafis", "Dokumentasi Acara"]
  },

  // ── 5. Pendidikan: SMKN 1 Bangsri (PPLG) ──
  {
    id: "pplg",
    type: "education",
    category: "PENDIDIKAN FORMAL",
    badge: "Vokasi Unggulan",
    period: "2023 — 2026",
    role: "Siswa Tingkat Akhir (Kelas 12)",
    title: "SMK Negeri 1 Bangsri",
    institution: "Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)",
    location: "Bangsri, Jepara",
    shortSummary:
      "Studi kejuruan rekayasa web (Laravel, MySQL), desain UI/UX di Figma, serta arsitektur basis data dan komputasi dasar.",
    bullets: [
      "Pemrograman & Web: Mempelajari logika coding dan pengembangan situs web menggunakan HTML, CSS, JavaScript, dan Laravel.",
      "Desain & UI/UX: Mempelajari perancangan antarmuka serta pembuatan aset desain visual untuk aplikasi web dan mobile.",
      "Basis Data: Mempelajari perancangan alur sistem, pengolahan data, dan pengelolaan basis data relasional (MySQL).",
      "Teknologi Pendukung: Mempelajari konsep dasar pengoperasian sistem, perangkat mobile, dan pemanfaatan IoT."
    ],
    tags: ["PPLG", "Web Development", "UI/UX", "MySQL", "IoT Dasar"]
  }
];

export default function ExperienceSection() {
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
      id="experience"
      className="py-12 sm:py-20 md:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
    >
      {/* 3D Visual Accents */}
      <Floating3DSphere
        className="top-12 -left-6 sm:left-6 opacity-75 dark:opacity-60"
        size={52}
        delay={0.5}
      />
      <Floating3DStar
        className="bottom-14 right-6 sm:right-16 opacity-80 dark:opacity-70"
        size={44}
        delay={1.3}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Pengalaman & Rekam Jejak"
        />

        <div className="max-w-3xl mb-6 sm:mb-10 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#111827] dark:text-white tracking-tight leading-snug mb-2 sm:mb-2.5 font-sans">
            Pengalaman Proyek Nyata, Organisasi & Pendidikan
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-light leading-[1.75]">
            Rekam jejak otentik sesuai Curriculum Vitae: implementasi sistem web nyata, kontribusi kepemimpinan organisasi, serta pembelajaran kejuruan PPLG.
          </p>
        </div>

        {/* ── Sertifikasi & Prestasi Cards (Highlight from CV) ── */}
        <div className="mb-8 sm:mb-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 dark:from-[#0E1A14] dark:via-[#111827] dark:to-[#0B150F] border border-emerald-200 dark:border-emerald-800/80 shadow-[0_10px_30px_rgba(22,163,74,0.08)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between text-center sm:text-left gap-3 mb-4">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#16A34A] dark:bg-[#22C55E] flex items-center justify-center text-white shadow-md">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-[#16A34A] dark:text-[#22C55E] font-bold tracking-wider uppercase block">
                  PENGHARGAAN & PRESTASI
                </span>
                <h3 className="text-base sm:text-xl font-bold text-[#111827] dark:text-white">
                  Sertifikasi & Prestasi Kejuaraan
                </h3>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-white dark:bg-white/[0.06] px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/10">
              Kedisiplinan & Kerjasama Tim
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {profileData.achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#111827]/90 border border-emerald-100 dark:border-emerald-900/50 hover:border-[#16A34A] dark:hover:border-[#22C55E] transition-all shadow-xs group"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] dark:text-[#22C55E] font-mono">
                    <Award className="w-3.5 h-3.5" />
                    {ach.year}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.06] px-2 py-0.5 rounded-full">
                    {ach.scope}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors mb-1">
                  {ach.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ach.category} — Bukti etos disiplin, fokus tinggi, dan kerja sama tim solid.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Vertical Timeline of Experience (Ringkas by Default) ── */}
        <div className="relative pl-5 sm:pl-10 border-l border-emerald-200 dark:border-emerald-900/60 space-y-4 sm:space-y-6 max-w-4xl ml-2 sm:ml-4">
          {timelineItems.map((item, idx) => {
            const isProject = item.type === "project";
            const isOrg = item.type === "organization";
            const isExpanded = expandedIds.has(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[27px] sm:-left-[47px] top-4 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                    isProject
                      ? "bg-[#16A34A] dark:bg-[#22C55E] border-[#16A34A] dark:border-[#22C55E] shadow-[0_0_12px_rgba(22,163,74,0.6)] dark:shadow-[0_0_12px_rgba(34,197,94,0.7)]"
                      : isOrg
                      ? "bg-emerald-100 dark:bg-emerald-950 border-[#16A34A] dark:border-[#22C55E]"
                      : "bg-white dark:bg-[#111827] border-emerald-300 dark:border-emerald-700"
                  }`}
                />

                {/* Card Container */}
                <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] dark:hover:shadow-[0_8px_24px_rgba(34,197,94,0.15)] transition-all duration-300 shadow-xs">
                  {/* Top Bar: Category, Period & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#16A34A] dark:text-[#22C55E] tracking-wider uppercase">
                        {item.category}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600">·</span>
                      <span className="font-mono text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E]" />
                        {item.period}
                      </span>
                    </div>

                    <span className="font-mono text-[9.5px] sm:text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 text-[#16A34A] dark:text-[#22C55E] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111827] dark:text-white tracking-tight mb-1 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-gray-500 dark:text-gray-400 mb-2 font-mono">
                    <span className="text-[#111827] dark:text-gray-200 font-semibold">{item.role}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E]" />
                      {item.institution} ({item.location})
                    </span>
                  </div>

                  {/* Ringkas: One-line concise summary */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-3">
                    {item.shortSummary}
                  </p>

                  {/* Bottom Row: Preview Tags + Tombol Detail */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2.5 border-t border-gray-100 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && !isExpanded && (
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
                          +{item.tags.length - 3} lainnya
                        </span>
                      )}
                    </div>

                    {/* Tombol Detail Interaktif */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#16A34A] dark:text-[#22C55E] bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      <span>{isExpanded ? "Tutup Detail" : "Lihat Detail"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded Detail View: Rincian Poin & Full Tags */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3.5 mt-3 border-t border-dashed border-gray-200 dark:border-white/10">
                          <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#16A34A] dark:text-[#22C55E] mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Rincian Tanggung Jawab & Kontribusi
                          </h4>
                          <ul className="space-y-1.5 mb-3.5">
                            {item.bullets.map((b, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] dark:text-[#22C55E] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div>
                            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1.5">
                              Seluruh Kompetensi & Tools:
                            </span>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-mono bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
