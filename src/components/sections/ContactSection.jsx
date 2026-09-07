import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { profileData } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";
import { FloatingLightning, Floating3DCube } from "../ui/Floating3DAssets";

export default function ContactSection() {
  const contactLinks = [
    {
      label: "WHATSAPP",
      value: profileData.whatsappNumber,
      href: profileData.whatsapp,
    },
    {
      label: "EMAIL",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
    },
    {
      label: "LINKEDIN",
      value: profileData.fullName,
      href: profileData.linkedin,
    },
    {
      label: "GITHUB",
      value: `@${profileData.githubUser}`,
      href: profileData.github,
    },
  ];

  return (
    <section
      id="contact"
      className="py-14 sm:py-24 md:py-32 relative overflow-hidden border-b border-gray-200/80 dark:border-white/10 bg-transparent"
    >
      {/* Fresh Mint Ambient Volumetric Glowing Backdrop */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#16A34A]/15 via-[#22C55E]/10 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3D Animated Moving Illustrations */}
      <FloatingLightning
        className="top-14 right-8 sm:right-24"
        scale={0.95}
        rotate={25}
        delay={0.3}
      />
      <Floating3DCube
        className="bottom-14 -left-6 sm:left-10 opacity-80 dark:opacity-60"
        size={64}
        delay={1.2}
        rotate={-18}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="06"
          title="KONTAK & TERHUBUNG"
        />

        <div className="max-w-3xl mb-8 sm:mb-14">
          <motion.h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] dark:text-white tracking-tight leading-[1.15] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tertarik berkolaborasi atau ingin berdiskusi seputar web development?{" "}
            <span className="bg-gradient-to-r from-[#16A34A] to-[#22C55E] bg-clip-text text-transparent font-bold">
              Mari terhubung bersama saya.
            </span>
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Saya selalu terbuka untuk berdiskusi, belajar hal baru, dan berbagi ide seputar pengembangan web maupun desain antarmuka.
          </p>

          {/* Focal CTA Buttons: WhatsApp + Official Email */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#16A34A] via-[#1EB352] to-[#22C55E] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgba(22,163,74,0.35)] hover:shadow-[0_12px_40px_rgba(22,163,74,0.5)] transition-all duration-300"
            >
              <span>Hubungi via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white dark:bg-white/[0.06] hover:bg-gray-50 dark:hover:bg-white/[0.1] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] text-[#111827] dark:text-white font-sans text-xs sm:text-sm font-medium shadow-xs transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] dark:text-[#22C55E]" />
              <span>Kirim Email</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Editorial Direct Links Grid */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "EMAIL" ? "_blank" : undefined}
              rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
              className="group flex flex-col focus:outline-none"
            >
              <div className="flex items-center gap-1 font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors">
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#16A34A] dark:text-[#22C55E]" />
              </div>
              <span className="font-sans text-sm text-[#111827] dark:text-white font-medium group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E] transition-colors truncate">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
