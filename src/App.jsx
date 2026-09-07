import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import SelectedWorkSection from "./components/sections/SelectedWorkSection";
import WhyHireSection from "./components/sections/WhyHireSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectDetailPage from "./components/projects/ProjectDetailPage";
import ResumeModal from "./components/ui/ResumeModal";
import CustomCursor from "./components/ui/CustomCursor";
import { projects } from "./data/projects";

// Force dark mode permanently on page load
if (typeof document !== "undefined") {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize route from current browser URL pathname: /projects/[slug]
  const [currentSlug, setCurrentSlug] = useState(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname.startsWith("/projects/")) {
        return pathname.replace("/projects/", "").replace(/\/$/, "");
      }
    }
    return null;
  });

  // Listen to browser Back and Forward navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname.startsWith("/projects/")) {
        const slug = pathname.replace("/projects/", "").replace(/\/$/, "");
        setCurrentSlug(slug || null);
      } else {
        setCurrentSlug(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Navigate to specific project case study
  const handleSelectProject = (slug) => {
    window.history.pushState({ slug }, "", `/projects/${slug}`);
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Navigate back to the Selected Work section on the main page
  const handleBackToWork = () => {
    window.history.pushState({}, "", "/#work");
    setCurrentSlug(null);
    setTimeout(() => {
      const workEl = document.getElementById("work");
      if (workEl) {
        workEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 60);
  };

  // Navigate back to home page and optionally jump to a target section
  const handleNavigateHome = (sectionId) => {
    window.history.pushState({}, "", sectionId ? `/#${sectionId}` : "/");
    setCurrentSlug(null);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Current project data and next project preview for sequential reading
  const currentProject = currentSlug ? projects.find((p) => p.slug === currentSlug) : null;
  const currentIndex = currentProject ? projects.findIndex((p) => p.slug === currentSlug) : -1;
  const nextProject =
    currentIndex !== -1 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <div className="min-h-screen bg-transparent text-[#111827] dark:text-[#F8FAFC] flex flex-col selection:bg-[#16A34A] selection:text-white font-sans antialiased transition-colors duration-300">
      {/* Precision Desktop Custom Cursor */}
      <CustomCursor />

      {/* Minimal Editorial Navigation with CV Trigger */}
      <Navbar
        isDetailPage={Boolean(currentProject)}
        onNavigateHome={handleNavigateHome}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentProject ? (
          /* Project Case Study Detail Page */
          <ProjectDetailPage
            project={currentProject}
            nextProject={nextProject}
            onBack={handleBackToWork}
            onNavigateNext={handleSelectProject}
          />
        ) : (
          /* DUDI-Oriented Portfolio Experience */
          <>
            {/* HERO (Identity, Work Readiness, Quick Recruiter Actions) */}
            <HeroSection
              onExploreClick={() => handleNavigateHome("work")}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* 01 — PROYEK UNGGULAN (Selected Work) */}
            <SelectedWorkSection onSelectProject={handleSelectProject} />

            {/* 02 — NILAI TAMBAH DUDI (Why Hire / Value Proposition) */}
            <WhyHireSection onOpenResume={() => setIsResumeOpen(true)} />

            {/* 03 — KEAHLIAN & TECH STACK (3D Illustrated Tech Badges) */}
            <ExpertiseSection />

            {/* 04 — REKAM JEJAK & PENGALAMAN (Experience & Organizations) */}
            <ExperienceSection />

            {/* 05 — PROFIL & SPESIFIKASI (About & Candidate Specs) */}
            <AboutSection />

            {/* 06 — KONTAK & REKRUTMEN (WhatsApp & Direct Channels) */}
            <ContactSection />
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Interactive Printable CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
