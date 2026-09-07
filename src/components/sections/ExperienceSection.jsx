import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, GraduationCap, Trophy, Award, CheckCircle2, MapPin, Calendar } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DSphere, Floating3DStar } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

const timelineItems = [
  // ── 1. Proyek: DIDISPEN ──
  {
    type: "project",
    category: "PENGALAMAN PROYEK",
    badge: "Official School Project",
    period: "2026",
    role: "UI/UX Designer & Web Developer",
    title: "DIDISPEN – Sistem Informasi Dispensasi Sekolah",
    institution: "SMK Negeri 1 Bangsri",
    location: "Bangsri, Jepara",
    description:
      "Merancang dokumentasi sistem (PRD, ERD, Flowchart), struktur basis data, serta wireframe/prototype aplikasi pada Figma. Mengembangkan sistem informasi web berbasis Laravel dan MySQL dengan fitur pengajuan dispensasi digital dan hak akses multi-peran (role-based access).",
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
    type: "project",
    category: "PENGALAMAN PROYEK",
    badge: "E-Commerce Platform",
    period: "2025",
    role: "Full-Stack Web Developer",
    title: "BeWood (Gembol Jati Furniture)",
    institution: "Produksi Mebel Jepara",
    location: "Jepara, Jawa Tengah",
    description:
      "Membangun platform e-commerce dan katalog produk mebel Jepara interaktif menggunakan Laravel, Livewire, dan MySQL. Mengembangkan tampilan antarmuka yang responsif dengan Tailwind CSS serta mengimplementasikan dashboard manajemen inventaris bagi admin.",
    bullets: [
      "Membangun platform e-commerce dan katalog produk mebel Jepara interaktif berbasis Laravel, Livewire, dan MySQL.",
      "Mengembangkan tampilan antarmuka responsif dengan Tailwind CSS.",
      "Mengimplementasikan dashboard manajemen inventaris bagi admin toko mebel."
    ],
    tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "E-Commerce", "Inventory"]
  },

  // ── 3. Organisasi: PASSUS WIRA ADHI DAYA ──
  {
    type: "organization",
    category: "PENGALAMAN ORGANISASI",
    badge: "Ekstrakurikuler Khusus",
    period: "2024 — Sekarang",
    role: "Divisi TIK & Dokumentator",
    title: "PASSUS WIRA ADHI DAYA",
    institution: "SMKN 1 Bangsri",
    location: "Bangsri, Jepara",
    description:
      "Bertanggung jawab membuat pamflet peringatan hari-hari besar untuk kebutuhan ekstrakurikuler serta mengelola dokumentasi visual dalam berbagai kegiatan organisasi.",
    bullets: [
      "Divisi TIK: Bertanggung jawab membuat pamflet peringatan hari-hari besar untuk kebutuhan ekstrakurikuler.",
      "Dokumentator: Mengelola dokumentasi visual dalam berbagai kegiatan organisasi."
    ],
    tags: ["Divisi TIK", "Desain Pamflet", "Dokumentasi Visual", "Canva", "Teamwork"]
  },

  // ── 4. Organisasi: PRAMUKA SMKN 1 BANGSRI ──
  {
    type: "organization",
    category: "PENGALAMAN ORGANISASI",
    badge: "Kepemimpinan & Publikasi",
    period: "2024 — Sekarang",
    role: "Divisi HUMAS, Desainer & Dokumentator",
    title: "PRAMUKA SMKN 1 BANGSRI",
    institution: "SMKN 1 Bangsri",
    location: "Bangsri, Jepara",
    description:
      "Mengelola komunikasi publik dan hubungan masyarakat (Masa Bhakti 2025–2026), serta merancang aset visual dan mendokumentasikan seluruh rangkaian acara Pramuka.",
    bullets: [
      "Divisi HUMAS (Masa Bhakti 2025–2026): Mengelola komunikasi publik dan hubungan masyarakat.",
      "Desainer & Dokumentator: Merancang aset visual serta mendokumentasikan seluruh rangkaian acara Pramuka."
    ],
    tags: ["Divisi HUMAS", "Komunikasi Publik", "Desain Grafis", "Dokumentasi Acara"]
  },

  // ── 5. Pendidikan: SMKN 1 Bangsri (PPLG) ──
  {
    type: "education",
    category: "PENDIDIKAN FORMAL",
    badge: "Vokasi Unggulan",
    period: "2023 — 2026",
    role: "Siswa Tingkat Akhir (Kelas 12)",
    title: "SMK Negeri 1 Bangsri",
    institution: "Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)",
    location: "Bangsri, Jepara",
    description:
      "Mempelajari logika pemrograman web (HTML, CSS, JS, Laravel), perancangan UI/UX di Figma, arsitektur basis data relasional MySQL, dan konsep dasar pengoperasian sistem, perangkat mobile, serta IoT.",
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
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
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
          index="04"
          title="PENGALAMAN & REKAM JEJAK"
        />

        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] dark:text-white tracking-tight leading-snug mb-3 font-sans">
            Pengalaman Proyek Nyata, Organisasi & Pendidikan
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Rekam jejak otentik sesuai Curriculum Vitae: implementasi sistem web nyata, kontribusi kepemimpinan organisasi, serta pembelajaran kejuruan PPLG.
          </p>
        </div>

        {/* ── Sertifikasi & Prestasi Cards (Highlight from CV) ── */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 dark:from-[#0E1A14] dark:via-[#111827] dark:to-[#0B150F] border border-emerald-200 dark:border-emerald-800/80 shadow-[0_10px_30px_rgba(22,163,74,0.08)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#16A34A] dark:bg-[#22C55E] flex items-center justify-center text-white shadow-md">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-bold tracking-wider uppercase block">
                  PENGHARGAAN & PRESTASI
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white">
                  Sertifikasi & Prestasi Kejuaraan
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-white dark:bg-white/[0.06] px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
              Kedisiplinan & Kerjasama Tim
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white dark:bg-[#111827]/90 border border-emerald-100 dark:border-emerald-900/50 hover:border-[#16A34A] dark:hover:border-[#22C55E] transition-all shadow-xs group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16A34A] dark:text-[#22C55E] font-mono">
                    <Award className="w-3.5 h-3.5" />
                    {ach.year}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.06] px-2.5 py-0.5 rounded-full">
                    {ach.scope}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#111827] dark:text-white group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors mb-1">
                  {ach.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {ach.category} — Bukti etos disiplin, fokus tinggi, dan kerja sama tim solid.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Vertical Timeline of Experience ── */}
        <div className="relative pl-6 sm:pl-10 border-l border-emerald-200 dark:border-emerald-900/60 space-y-10 sm:space-y-12 max-w-4xl ml-2 sm:ml-4">
          {timelineItems.map((item, idx) => {
            const isProject = item.type === "project";
            const isOrg = item.type === "organization";
            const isEdu = item.type === "education";

            return (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                    isProject
                      ? "bg-[#16A34A] dark:bg-[#22C55E] border-[#16A34A] dark:border-[#22C55E] shadow-[0_0_12px_rgba(22,163,74,0.6)] dark:shadow-[0_0_12px_rgba(34,197,94,0.7)]"
                      : isOrg
                      ? "bg-emerald-100 dark:bg-emerald-950 border-[#16A34A] dark:border-[#22C55E]"
                      : "bg-white dark:bg-[#111827] border-emerald-300 dark:border-emerald-700"
                  }`}
                />

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] hover:shadow-[0_12px_32px_rgba(22,163,74,0.12)] dark:hover:shadow-[0_12px_32px_rgba(34,197,94,0.2)] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  {/* Top Bar: Category, Period & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#16A34A] dark:text-[#22C55E] tracking-wider uppercase">
                        {item.category}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600">·</span>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E]" />
                        {item.period}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 text-[#16A34A] dark:text-[#22C55E] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-xl font-bold text-[#111827] dark:text-white tracking-tight mb-1 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono">
                    <span className="text-[#111827] dark:text-gray-200 font-semibold">{item.role}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E]" />
                      {item.institution} ({item.location})
                    </span>
                  </div>

                  {/* Bullet points from CV */}
                  <ul className="space-y-2 mb-5">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-white/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
