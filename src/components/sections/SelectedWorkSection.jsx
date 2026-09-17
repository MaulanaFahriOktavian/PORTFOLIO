import React, { useState } from "react";
import { Code2, Palette, ChevronDown, Sparkles } from "lucide-react";
import { projects, categories } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DCube, Floating3DStar } from "../ui/Floating3DAssets";

export default function SelectedWorkSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [showAll, setShowAll] = useState(false);

  const activeCategoryData =
    categories.find((cat) => cat.id === activeCategory) || categories[0];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  return (
    <section
      id="work"
      className="py-12 sm:py-20 md:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
    >
      {/* 3D Animated Moving Illustrations in Background */}
      <Floating3DCube
        className="top-12 -left-6 sm:left-4 opacity-75 dark:opacity-60"
        size={65}
        delay={0.5}
        rotate={18}
      />
      <Floating3DStar
        className="top-24 right-4 sm:right-12 opacity-80 dark:opacity-70"
        size={42}
        delay={1.5}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Karya & Proyek Terpilih"
          subcopy="Portofolio Proyek Nyata & Eksplorasi Digital"
          action={
            /* Professional Segmented Toggle Switcher: Coding vs Figma Design */
            <div className="inline-flex p-1 rounded-2xl bg-gray-100/90 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const isCode = cat.id === "fullstack";
                const Icon = isCode ? Code2 : Palette;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-medium transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? "bg-white dark:bg-[#111827] text-gray-900 dark:text-white shadow-xs border border-gray-200/80 dark:border-white/15"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-lg transition-colors ${
                        isActive
                          ? isCode
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : "bg-purple-500/15 text-purple-600 dark:text-purple-400"
                          : "bg-transparent text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold tracking-tight">{cat.label}</span>
                    <span
                      className={`hidden sm:inline-flex px-1.5 py-0.5 rounded text-[9.5px] font-mono uppercase tracking-wider ${
                        isActive
                          ? isCode
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                          : "bg-gray-200/60 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          }
        />

        {/* Professional Discipline Brief & Tech Focus Bar */}
        <div className="mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#0B1120]/70 border border-gray-200/80 dark:border-white/10 backdrop-blur-sm shadow-xs transition-colors duration-150">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  activeCategory === "fullstack"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                }`}
              >
                {activeCategory === "fullstack" ? (
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                    {activeCategory === "fullstack" ? "Fokus Rekayasa Kode" : "Fokus Riset & Desain"}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span
                    className={`text-[11px] sm:text-xs font-semibold ${
                      activeCategory === "fullstack"
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {activeCategoryData.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 max-w-2xl leading-relaxed">
                  {activeCategoryData.description}
                </p>
              </div>
            </div>

            {/* Focus List Pill Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-white/5">
              {activeCategoryData.focusList.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/[0.04] border border-gray-200/70 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid (2 Cards Side-by-Side on Mobile & Desktop) */}
        <div className={`grid grid-cols-2 ${filteredProjects.length <= 2 ? "lg:grid-cols-2 max-w-4xl" : "lg:grid-cols-3"} gap-2.5 sm:gap-5 lg:gap-8 mx-auto mb-8`}>
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* View All / Expand Toggle Button if projects exceed visible limit */}
        {filteredProjects.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white dark:bg-[#111827] border border-emerald-500/30 dark:border-emerald-700/50 hover:border-emerald-600 dark:hover:border-[#22C55E] text-[#111827] dark:text-white font-mono text-xs tracking-wider transition-all duration-300 hover:shadow-[0_4px_25px_rgba(22,163,74,0.2)] dark:hover:shadow-[0_4px_25px_rgba(34,197,94,0.25)] hover:-translate-y-0.5"
            >
              <span>
                {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua (${filteredProjects.length} Proyek)`}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#16A34A] dark:text-[#22C55E] transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
