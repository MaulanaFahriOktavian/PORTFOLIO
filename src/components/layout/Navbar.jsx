import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Language", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  isDetailPage = false,
  onNavigateHome,
  onOpenResume,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (!isDetailPage) {
        const sections = navLinks.map((link) => link.href.substring(1));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDetailPage]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isDetailPage && onNavigateHome) {
      onNavigateHome(href.substring(1));
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isDetailPage && onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        {/* Floating Pill Container */}
        <div className="bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md rounded-full px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_8px_30px_rgba(22,163,74,0.10)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.5)] border border-[rgba(22,163,74,0.14)] dark:border-[rgba(34,197,94,0.15)] transition-all duration-300">
          
          {/* Left: Brand "Portfolio." Wordmark */}
          <a
            href="/"
            onClick={handleBrandClick}
            className="group flex items-center select-none"
            aria-label="Portfolio Home"
          >
            <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-[#16A34A] dark:text-[#22C55E] transition-transform duration-200 group-hover:scale-105">
              Portfolio<span className="text-[#22C55E] dark:text-[#4ADE80]">.</span>
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#16A34A] dark:text-[#22C55E] font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[rgba(22,163,74,0.1)] dark:bg-[rgba(34,197,94,0.1)] hover:bg-[rgba(22,163,74,0.18)] dark:hover:bg-[rgba(34,197,94,0.18)] text-[#16A34A] dark:text-[#22C55E] flex items-center justify-center transition-colors border border-[rgba(22,163,74,0.2)] dark:border-[rgba(34,197,94,0.2)] cursor-pointer"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Floating Rounded Card) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border border-[rgba(22,163,74,0.14)] dark:border-[rgba(34,197,94,0.15)] rounded-3xl p-5 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium py-2 px-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-[rgba(22,163,74,0.08)] dark:bg-[rgba(34,197,94,0.1)] text-[#16A34A] dark:text-[#22C55E] font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:bg-[rgba(22,163,74,0.06)] dark:hover:bg-[rgba(34,197,94,0.07)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              {onOpenResume && (
                <div className="pt-2 border-t border-[rgba(22,163,74,0.14)] dark:border-[rgba(34,197,94,0.15)]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-white text-xs font-semibold shadow-sm text-center cursor-pointer"
                  >
                    Lihat CV / Resume
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
