import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, categories } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { Floating3DCube, Floating3DStar } from "../ui/Floating3DAssets";

export default function SelectedWorkSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setShowAll(false);
  };

  return (
    <section
      id="work"
      className="py-20 sm:py-28 border-b border-gray-200/80 dark:border-white/10 relative overflow-hidden bg-transparent"
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
          index="01"
          title="SELECTED WORK"
          action={
            /* Category Filter Links with natural green active pill */
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white font-semibold shadow-[0_4px_15px_rgba(22,163,74,0.35)]"
                        : "text-gray-600 dark:text-gray-300 hover:text-[#111827] dark:hover:text-white border border-gray-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-500 bg-white dark:bg-white/[0.04] shadow-xs"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          }
        />

        {/* 3-Column Modern Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* View All / Expand Toggle Button */}
        {filteredProjects.length > 3 && (
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
