import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Mail, Phone, MapPin, Globe, Award, CheckCircle2 } from "lucide-react";
import { profileData } from "../../data/profile";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0B111A] border border-emerald-200 dark:border-emerald-800/80 rounded-3xl shadow-2xl overflow-hidden text-gray-700 dark:text-gray-200 font-sans"
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-emerald-50/70 dark:bg-[#0E1724]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#111827] dark:text-white uppercase">
                Curriculum Vitae — {profileData.fullName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:bg-[#16A34A] dark:hover:bg-[#16A34A] hover:text-white text-gray-700 dark:text-gray-200 text-xs font-mono transition-colors shadow-xs cursor-pointer"
                title="Cetak atau Simpan sebagai PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cetak / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#111827] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-7 print:p-0 print:bg-white print:text-black">
            
            {/* 1. Header Profile (Nama & Kontak sesuai CV) */}
            <div className="border-b border-gray-200 dark:border-white/10 pb-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] dark:text-white tracking-tight mb-2 uppercase">
                {profileData.fullName}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E]" />
                  <span>{profileData.phoneRaw}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E]" />
                  <a href={`mailto:${profileData.email}`} className="hover:underline">
                    {profileData.email}
                  </a>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#16A34A] dark:text-[#22C55E]" />
                  <span>{profileData.address}</span>
                </div>
              </div>
            </div>

            {/* 2. Objektif (Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-2">
                OBJEKTIF
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                {profileData.objective}
              </p>
            </div>

            {/* 3. Pendidikan (Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-3">
                PENDIDIKAN
              </h2>
              <div className="bg-slate-50 dark:bg-[#111827] p-4 rounded-xl border border-gray-200 dark:border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <h3 className="text-sm font-semibold text-[#111827] dark:text-white">
                    {profileData.education.school}
                  </h3>
                  <span className="text-xs font-mono text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {profileData.education.period}
                  </span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                  {profileData.education.major}
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-gray-600 dark:text-gray-300">
                  {profileData.education.curriculum.map((item) => (
                    <li key={item.topic} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E] mt-1.5 shrink-0" />
                      <span>
                        <strong className="text-[#111827] dark:text-white font-semibold">{item.topic}:</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Keahlian (Hard, Soft, Software Skills Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-3">
                KEAHLIAN
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <span className="font-mono text-[#16A34A] dark:text-[#22C55E] block mb-1.5 font-bold uppercase tracking-wider">
                    Hard Skills
                  </span>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    {profileData.skills.hard.map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <span className="font-mono text-[#16A34A] dark:text-[#22C55E] block mb-1.5 font-bold uppercase tracking-wider">
                    Soft Skills
                  </span>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    {profileData.skills.soft.map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <span className="font-mono text-[#16A34A] dark:text-[#22C55E] block mb-1.5 font-bold uppercase tracking-wider">
                    Software Skills
                  </span>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    {profileData.skills.software.map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#16A34A] dark:text-[#22C55E] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Pengalaman Proyek (DIDISPEN & BeWood Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-3">
                PENGALAMAN PROYEK
              </h2>
              <div className="space-y-3.5">
                {/* DIDISPEN */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                      DIDISPEN – Sistem Informasi Dispensasi Sekolah
                    </h3>
                    <span className="text-xs font-mono text-[#16A34A] dark:text-[#22C55E] font-semibold">
                      UI/UX Designer & Web Developer
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 pt-1">
                    <li>Merancang dokumentasi sistem (PRD, ERD, Flowchart), struktur basis data, serta wireframe/prototype aplikasi pada Figma.</li>
                    <li>Mengembangkan sistem informasi web berbasis Laravel dan MySQL dengan fitur pengajuan dispensasi digital dan hak akses multi-peran (role-based access).</li>
                  </ul>
                </div>

                {/* BeWood */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                      BeWood (Gembol Jati Furniture)
                    </h3>
                    <span className="text-xs font-mono text-[#16A34A] dark:text-[#22C55E] font-semibold">
                      Full-Stack Web Developer
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 pt-1">
                    <li>Membangun platform e-commerce dan katalog produk mebel Jepara interaktif menggunakan Laravel, Livewire, dan MySQL.</li>
                    <li>Mengembangkan tampilan antarmuka yang responsif dengan Tailwind CSS serta mengimplementasikan dashboard manajemen inventaris bagi admin.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Pengalaman Organisasi (PASSUS & Pramuka Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-3">
                PENGALAMAN ORGANISASI
              </h2>
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                      PASSUS WIRA ADHI DAYA | Bangsri
                    </h3>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      2024 – Sekarang
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 pt-1">
                    <li><strong className="text-[#111827] dark:text-white">Divisi TIK:</strong> Bertanggung jawab membuat pamflet peringatan hari-hari besar untuk kebutuhan ekstrakurikuler.</li>
                    <li><strong className="text-[#111827] dark:text-white">Dokumentator:</strong> Mengelola dokumentasi visual dalam berbagai kegiatan organisasi.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                      PRAMUKA SMKN 1 BANGSRI | Bangsri
                    </h3>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      2024 – Sekarang
                    </span>
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 pt-1">
                    <li><strong className="text-[#111827] dark:text-white">Divisi HUMAS (Masa Bhakti 2025–2026):</strong> Mengelola komunikasi publik dan hubungan masyarakat.</li>
                    <li><strong className="text-[#111827] dark:text-white">Desainer & Dokumentator:</strong> Merancang aset visual serta mendokumentasikan seluruh rangkaian acara Pramuka.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Sertifikasi & Prestasi (Sesuai CV) */}
            <div>
              <h2 className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider font-bold mb-3">
                SERTIFIKASI & PRESTASI
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {profileData.achievements.map((ach) => (
                  <div key={ach.title} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#111827] border border-emerald-200/70 dark:border-emerald-800/60 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-[#16A34A] dark:text-[#22C55E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#111827] dark:text-white block">
                        {ach.title}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-[11px] font-mono">
                        {ach.scope} · {ach.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Footer in Modal */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-white/10 bg-emerald-50/50 dark:bg-[#0E1724] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-600 dark:text-gray-300 font-mono">
              Status: <span className="text-[#16A34A] dark:text-[#22C55E] font-semibold">Siswa Aktif PPLG (Kelas 12)</span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white text-xs font-semibold shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                Hubungi via WhatsApp
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 text-xs font-mono transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
