import React from "react";
import { motion } from "framer-motion";
import { Layers, Database, GitBranch, Users, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DCube, FloatingLightning } from "../ui/Floating3DAssets";

const pillars = [
  {
    icon: Layers,
    badge: "DUAL COMPETENCY",
    title: "Bridge UI/UX ke Full-Stack Code",
    description:
      "Mampu merancang antarmuka terstruktur di Figma (Auto Layout, Tokens) dan langsung mewujudkannya menjadi kode fungsional dengan React, Tailwind CSS, dan Laravel tanpa distorsi desain.",
    points: ["Desain Sistem & Prototyping Figma", "Komponen Modular & Responsif", "Integrasi Backend Laravel & Blade"],
  },
  {
    icon: Database,
    badge: "PRODUCTION TESTED",
    title: "Terbukti Membangun Sistem Nyata",
    description:
      "Bukan sekadar latihan tutorial. Berhasil menyelesaikan dan men-deploy sistem DIDISPEN yang aktif digunakan di lingkungan SMKN 1 Bangsri dengan alur izin multi-peran yang ketat.",
    points: ["Arsitektur Database Relasional MySQL", "Autentikasi Multi-Peran (Role-based)", "Diuji untuk Penilaian UKK Resmi"],
  },
  {
    icon: GitBranch,
    badge: "INDUSTRY STANDARDS",
    title: "Workflow & Tooling Standar Industri",
    description:
      "Terbiasa menggunakan version control Git & GitHub, pengujian RESTful API dengan Postman, serta penulisan kode bersih yang mudah dipelihara oleh tim pengembang.",
    points: ["Git Version Control & Branching", "API Testing & HTTP Debugging", "Struktur Folder & Penamaan Standar"],
  },
  {
    icon: Users,
    badge: "WORK ETHIC",
    title: "Kolaborasi Tim & Cepat Beradaptasi",
    description:
      "Memiliki pengalaman kerja tim solid dalam Tim 3M dan divisi TIK organisasi sekolah. Memiliki komitmen tinggi, disiplin waktu, dan haus mempelajari teknologi baru yang digunakan perusahaan.",
    points: ["Komunikasi Teknis yang Terbuka", "Tanggung Jawab Penyelesaian Tugas", "Siap Belajar Tech Stack Baru"],
  },
];

export default function WhyHireSection({ onOpenResume }) {
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
          index="02"
          title="KOMITMEN & NILAI TAMBAH"
        />

        {/* Introduction Pitch */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] dark:text-white tracking-tight leading-snug mb-3">
            Mengapa Maulana Fahri siap berkontribusi dalam tim Anda?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            Sebagai siswa jurusan PPLG dari SMK Negeri 1 Bangsri, saya tidak hanya membawa pemahaman dasar, melainkan antusiasme belajar tinggi dan kesiapan praktik langsung dengan etos kerja yang disiplin.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] hover:shadow-[0_12px_32px_rgba(22,163,74,0.12)] dark:hover:shadow-[0_12px_32px_rgba(34,197,94,0.2)] hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-[#16A34A] dark:text-[#22C55E] group-hover:scale-110 group-hover:border-[#16A34A] dark:group-hover:border-[#22C55E] group-hover:shadow-[0_0_20px_rgba(22,163,74,0.25)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/10 space-y-2">
                  {pillar.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
