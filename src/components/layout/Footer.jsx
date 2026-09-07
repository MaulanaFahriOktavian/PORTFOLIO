import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "../../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-gray-200 dark:border-white/10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold text-base tracking-tight text-[#111827] dark:text-white">
                FAHRI
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] dark:bg-[#22C55E]" />
            </div>
            <p className="mt-1 text-xs font-mono text-gray-500 dark:text-gray-400">
              {profileData.fullName} · {profileData.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span>{profileData.location}</span>
            <span>© {profileData.year}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-[#16A34A] dark:hover:text-[#22C55E] transition-colors ml-auto sm:ml-0 group font-medium cursor-pointer"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-[#16A34A] dark:text-[#22C55E]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
