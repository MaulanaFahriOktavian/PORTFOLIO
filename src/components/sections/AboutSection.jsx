import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DStar, Floating3DCube } from "../ui/Floating3DAssets";
import { profileData } from "../../data/profile";

export default function AboutSection() {
  const specs = [
    { label: "SEKOLAH", value: `${profileData.school}` },
    { label: "JURUSAN", value: profileData.major },
    { label: "STATUS", value: "Kelas 12 · Angkatan 2026" },
    { label: "FOKUS KEAHLIAN", value: "Web Development, UI/UX Design, Basis Data" },
    { label: "ALAMAT", value: profileData.address },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
    >
      {/* 3D Moving Illustrations */}
      <Floating3DStar
        className="top-12 right-6 sm:right-16 opacity-80 dark:opacity-70"
        size={46}
        delay={0.7}
      />
      <Floating3DCube
        className="bottom-12 -left-6 sm:left-6 opacity-70 dark:opacity-60"
        size={58}
        delay={1.4}
        rotate={-15}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          title="PROFIL & SPESIFIKASI"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Personal Narrative from CV (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p>
              Halo! Saya <strong className="text-[#111827] dark:text-white font-semibold">{profileData.fullName}</strong>, siswa SMK Negeri 1 Bangsri jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) yang memiliki minat besar dalam dunia <span className="text-[#16A34A] dark:text-[#22C55E] font-medium">web development</span>.
            </p>

            <p>
              Berpengalaman merancang dan mengembangkan aplikasi web menggunakan <strong className="text-[#111827] dark:text-white font-medium">HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel</strong>, serta mengelola basis data <strong className="text-[#111827] dark:text-white font-medium">MySQL</strong> menggunakan Visual Studio Code dan Git/GitHub.
            </p>

            <p>
              Memiliki semangat belajar tinggi, terbiasa berpikir logis, mampu bekerja sama dalam tim, serta siap berkontribusi aktif dalam proyek pengembangan perangkat lunak yang inovatif baik untuk kesempatan <strong className="text-[#16A34A] dark:text-[#22C55E] font-medium">Magang Industri (PKL)</strong> maupun posisi <strong className="text-[#16A34A] dark:text-[#22C55E] font-medium">Junior Web Developer</strong>.
            </p>
          </motion.div>

          {/* Right Column: Editorial Specification Grid (5 cols) */}
          <motion.div
            className="lg:col-span-5 border-t border-l border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#111827] shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {specs.map((item) => (
              <div
                key={item.label}
                className="p-3.5 sm:p-4 border-b border-r border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-colors"
              >
                <span className="block font-mono text-[10px] text-[#16A34A] dark:text-[#22C55E] uppercase tracking-widest mb-1 font-semibold">
                  {item.label}
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#111827] dark:text-white font-normal">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
