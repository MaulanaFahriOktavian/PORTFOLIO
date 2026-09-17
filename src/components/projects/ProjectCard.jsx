import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0, onSelectProject }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onSelectProject) {
      onSelectProject(project.slug);
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else if (onSelectProject) {
      onSelectProject(project.slug);
    }
  };

  const isFeatured = project.featured;

  return (
    <motion.article
      data-project-card="true"
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex flex-col justify-between rounded-xl sm:rounded-2xl md:rounded-3xl p-2.5 sm:p-4 md:p-6 transition-all duration-300 cursor-pointer ${
        isFeatured
          ? "bg-white dark:bg-[#111827] border-2 border-[#16A34A] dark:border-[#22C55E] shadow-[0_8px_30px_rgba(22,163,74,0.18)] dark:shadow-[0_8px_30px_rgba(34,197,94,0.25)] -translate-y-1"
          : "bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 hover:border-[#16A34A] dark:hover:border-[#22C55E] hover:shadow-[0_8px_30px_rgba(22,163,74,0.12)] dark:hover:shadow-[0_8px_30px_rgba(34,197,94,0.2)] hover:-translate-y-1"
      }`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Top Preview Image Container */}
      <div className="relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 dark:bg-[#0B111A] border border-gray-100 dark:border-white/5 mb-2 sm:mb-3 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Modern Wireframe Line Graphic Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 relative bg-gradient-to-br from-[#ECFDF5] to-[#F0FDF4] dark:from-[#091E13] dark:to-[#0D281A]">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 text-[#16A34A] dark:text-[#22C55E]"
              viewBox="0 0 300 180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="20,130 80,65 140,115 210,45 285,100" />
              <circle cx="80" cy="65" r="3.5" fill="#16A34A" />
              <circle cx="140" cy="115" r="3.5" fill="#16A34A" />
              <circle cx="210" cy="45" r="3.5" fill="#16A34A" />
            </svg>
            <div className="relative z-10 px-2 py-0.5 sm:px-3 sm:py-1 rounded bg-white/90 dark:bg-[#111827]/90 border border-emerald-200/80 dark:border-emerald-700/60 backdrop-blur-sm text-[9px] sm:text-xs font-mono text-emerald-900 dark:text-emerald-300 shadow-xs">
              Preview
            </div>
          </div>
        )}

        {/* Top-Right Action Button with [ ↗ ] icon */}
        <button
          type="button"
          onClick={handleLinkClick}
          aria-label={`Open ${project.title}`}
          className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#16A34A] dark:bg-[#22C55E] hover:bg-[#22C55E] dark:hover:bg-[#16A34A] text-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 z-10 cursor-pointer"
        >
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Content Info */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <h3
          className={`text-xs sm:text-base md:text-xl font-bold tracking-tight mb-1 sm:mb-1.5 transition-colors duration-200 line-clamp-1 sm:line-clamp-2 ${
            isFeatured
              ? "text-[#16A34A] dark:text-[#22C55E] group-hover:text-[#22C55E]"
              : "text-[#111827] dark:text-white group-hover:text-[#16A34A] dark:group-hover:text-[#22C55E]"
          }`}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light leading-snug line-clamp-2 mb-2 sm:mb-3">
          {project.shortDescription || project.statement}
        </p>

        {/* Tech Stack Pills (at bottom of card) */}
        <div className="flex flex-wrap gap-1 mt-auto pt-2 sm:pt-3 border-t border-gray-100 dark:border-white/10">
          {(project.techSummary || []).slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-full font-mono text-[8.5px] sm:text-[10.5px] text-emerald-900 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 group-hover:border-[#16A34A]/50 dark:group-hover:border-[#22C55E]/60 transition-colors truncate"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
