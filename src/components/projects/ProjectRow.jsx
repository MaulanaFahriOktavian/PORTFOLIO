import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({
  project,
  index,
  onSelectProject,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, "0");

  const handleClick = (e) => {
    e.preventDefault();
    if (onSelectProject) {
      onSelectProject(project.slug);
    }
  };

  return (
    <motion.article
      className="group relative border-t border-white/[0.08] py-8 md:py-10 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-project-row="true"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <a
        href={`/projects/${project.slug}`}
        onClick={handleClick}
        className="block focus:outline-none"
        aria-label={`View case study for ${project.title}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Content Column (7 cols = ~58% width) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Metadata Line */}
            <div className="flex items-center gap-3 font-mono text-xs mb-3">
              <span
                className={`font-semibold tracking-wider transition-colors duration-200 ${
                  isHovered ? "text-[#FF6B00]" : "text-gray-400"
                }`}
              >
                {formattedIndex}
              </span>
              <span className="text-white/20">/</span>
              <span className="text-gray-400 uppercase tracking-wider">
                {project.year || "2026"}
              </span>
              <span className="text-white/20">/</span>
              <span className="text-gray-400 uppercase tracking-wider truncate">
                {project.role || "Frontend Development"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-2 group-hover:text-[#FFA000] transition-colors">
              {project.title.split("—")[0].trim()}
            </h3>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-gray-300/80 font-light leading-relaxed line-clamp-2 max-w-xl mb-4">
              {project.shortDescription || project.statement}
            </p>

            {/* Tech Stack & Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-gray-400">
                {(project.techSummary || []).slice(0, 4).map((tech, i) => (
                  <span key={tech} className="inline-flex items-center gap-1.5">
                    <span className="text-gray-300">{tech}</span>
                    {i < Math.min((project.techSummary || []).length, 4) - 1 && (
                      <span className="text-white/20">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* View Indicator */}
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-white group-hover:text-[#FF8800] transition-colors">
                <span className="tracking-wider uppercase">View Case Study</span>
                <motion.span
                  animate={{ x: isHovered ? 4 : 0, y: isHovered ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8800]" />
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Column (5 cols = ~42% width) */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#140A06] border border-white/[0.08] group-hover:border-[#FF6B00]/50 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.35)] transition-all duration-300">
              {project.image ? (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter contrast-[102%]"
                  loading="lazy"
                  animate={{ scale: isHovered ? 1.03 : 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#140A06] font-mono text-xs text-gray-400">
                  <span>{project.title}</span>
                </div>
              )}

              {/* Subtle warm gradient vignette overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A0604]/50 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}
