import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Layout,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SiFigma } from "react-icons/si";

export default function ProjectDetailPage({ project, nextProject, onBack, onNavigateNext }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project?.slug]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-[#F8FAFC] dark:bg-[#090D14]">
        <h2 className="text-2xl font-bold text-[#111827] dark:text-white mb-3">
          Project Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          The requested project case study could not be located.
        </p>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16A34A] text-white text-xs font-mono font-medium shadow-sm hover:bg-[#22C55E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </button>
      </div>
    );
  }

  const {
    title,
    categoryLabel,
    statement,
    year,
    role,
    type,
    status,
    image,
    liveUrl,
    githubUrl,
    prototypeUrl,
    techStack = {},
    overview,
    roleDetails,
    features,
    designAndDevelopment,
    challenge,
    solution,
    result,
  } = project;

  let sectionIndex = 1;
  const getSectionNumber = () => {
    const num = sectionIndex < 10 ? `0${sectionIndex}` : `${sectionIndex}`;
    sectionIndex++;
    return num;
  };

  const getCategoryFallback = () => {
    switch (project.category) {
      case "fullstack":
        return <Database className="w-12 h-12 text-[#16A34A] dark:text-[#22C55E] stroke-[1.5]" />;
      case "uiux":
        return <Layout className="w-12 h-12 text-[#16A34A] dark:text-[#22C55E] stroke-[1.5]" />;
      case "frontend":
      default:
        return <Code2 className="w-12 h-12 text-[#16A34A] dark:text-[#22C55E] stroke-[1.5]" />;
    }
  };

  return (
    <article className="min-h-screen bg-[#F8FAFC] dark:bg-[#090D14] text-[#111827] dark:text-white pb-24 sm:pb-36 pt-20 sm:pt-24 relative transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gray-200 dark:bg-white/10 z-50">
        <div
          className="h-full bg-[#16A34A] dark:bg-[#22C55E] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Breadcrumbs & Back Bar */}
      <div className="border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#090D14]/90 backdrop-blur-md sticky top-14 sm:top-16 z-30 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-md">
            <span>WORK</span>
            <span>/</span>
            <span className="text-[#111827] dark:text-white truncate font-medium">{title.split("—")[0].trim()}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pb-10 border-b border-gray-200 dark:border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#16A34A] dark:text-[#22C55E] font-semibold">
              {categoryLabel}
            </span>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase">
              {year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#111827] dark:text-white tracking-tight mb-6 leading-[1.1]">
            {title}
          </h1>

          {statement && (
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl leading-relaxed mb-8">
              {statement}
            </p>
          )}

          {/* Quick Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-gray-200 dark:border-white/10 text-xs font-mono">
            <div>
              <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider mb-1">
                Year
              </span>
              <span className="text-[#111827] dark:text-white font-medium">{year}</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider mb-1">
                Role
              </span>
              <span className="text-[#111827] dark:text-white font-medium">{role}</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider mb-1">
                Project Type
              </span>
              <span className="text-[#111827] dark:text-white font-medium">{type}</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider mb-1">
                Status
              </span>
              <span className="text-[#16A34A] dark:text-[#22C55E] font-semibold">{status}</span>
            </div>
          </div>

          {/* Action Links */}
          {(liveUrl || githubUrl || prototypeUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-6">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#22C55E] text-white text-xs font-mono font-medium shadow-md transition-all"
                >
                  <span>Live Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {prototypeUrl && (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] hover:border-[#16A34A] dark:hover:border-[#22C55E] text-[#111827] dark:text-white text-xs font-mono transition-colors shadow-xs"
                >
                  <SiFigma className="w-3 h-3 text-[#F24E1E]" />
                  <span>Figma Prototype</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] hover:border-[#16A34A] dark:hover:border-[#22C55E] text-[#111827] dark:text-white text-xs font-mono transition-colors shadow-xs"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Large Visual Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 sm:my-14"
        >
          <div className="border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-sm">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[620px] object-cover object-top"
                loading="eager"
              />
            ) : (
              <div className="w-full aspect-[16/9] flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-[#0B111A] text-gray-500 dark:text-gray-400">
                {getCategoryFallback()}
                <span className="font-mono text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300 mt-4">
                  {categoryLabel} — Architecture Preview
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Editorial 2-Column Grid (Main Case Study Content + Sticky Specs Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {/* 01 — OVERVIEW */}
            {overview && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Overview
                  </h2>
                </div>

                {overview.about && (
                  <p className="text-base sm:text-lg text-[#111827] dark:text-white leading-relaxed font-light mb-6">
                    {overview.about}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-white/10">
                  {overview.targetUser && (
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#16A34A] dark:text-[#22C55E] block mb-1.5 font-semibold">
                        Target Users
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        {overview.targetUser}
                      </p>
                    </div>
                  )}

                  {overview.goal && (
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#16A34A] dark:text-[#22C55E] block mb-1.5 font-semibold">
                        Primary Goal
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        {overview.goal}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 02 — MY ROLE */}
            {roleDetails && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    My Role
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {roleDetails}
                </p>
              </section>
            )}

            {/* 03 — PROBLEM */}
            {overview?.problem && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    The Problem
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {overview.problem}
                </p>
              </section>
            )}

            {/* 04 — KEY FEATURES */}
            {features && features.length > 0 && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Key Features
                  </h2>
                </div>

                <div className="space-y-4">
                  {features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] flex items-start gap-4 shadow-xs"
                    >
                      <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#111827] dark:text-white leading-relaxed font-light">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 05 — DESIGN & DEVELOPMENT */}
            {designAndDevelopment && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Design & Implementation
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {designAndDevelopment}
                </p>
              </section>
            )}

            {/* 06 — CHALLENGE & SOLUTION */}
            {(challenge || solution) && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Challenge & Solution
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {challenge && (
                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] shadow-xs">
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2 font-medium">
                        Technical Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        {challenge}
                      </p>
                    </div>
                  )}

                  {solution && (
                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] shadow-xs">
                      <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] uppercase tracking-wider block mb-2 font-semibold">
                        Engineered Solution
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                        {solution}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 07 — RESULT */}
            {result && (
              <section className="pt-8 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#16A34A] dark:text-[#22C55E] font-semibold">
                    {getSectionNumber()}
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 dark:bg-white/20" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Result & Takeaways
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {result}
                </p>
              </section>
            )}
          </div>

          {/* Sticky Technical Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2 font-semibold">
                  Technical Architecture
                </span>
                <div className="space-y-4 text-xs font-mono">
                  {techStack.frontend && techStack.frontend.length > 0 && (
                    <div>
                      <span className="text-[#16A34A] dark:text-[#22C55E] block mb-1 text-[11px] font-semibold">Frontend</span>
                      <div className="flex flex-wrap gap-1.5">
                        {techStack.frontend.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {techStack.backend && techStack.backend.length > 0 && (
                    <div>
                      <span className="text-[#16A34A] dark:text-[#22C55E] block mb-1 text-[11px] font-semibold">Backend</span>
                      <div className="flex flex-wrap gap-1.5">
                        {techStack.backend.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {techStack.design && techStack.design.length > 0 && (
                    <div>
                      <span className="text-[#16A34A] dark:text-[#22C55E] block mb-1 text-[11px] font-semibold">Design</span>
                      <div className="flex flex-wrap gap-1.5">
                        {techStack.design.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {nextProject && (
                <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2 font-semibold">
                    Next Case Study
                  </span>
                  <button
                    onClick={() => onNavigateNext(nextProject.slug)}
                    className="group flex items-center justify-between w-full text-left font-sans text-sm text-[#111827] dark:text-white hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-colors cursor-pointer"
                  >
                    <span className="font-semibold truncate">{nextProject.title.split("—")[0].trim()}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0 text-[#16A34A] dark:text-[#22C55E]" />
                  </button>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
