import React from 'react';

/**
 * SectionHeader
 * Modern landing page section badge & header without artificial numbering.
 */
export default function SectionHeader({
  title,
  subcopy,
  action,
  className = '',
}) {
  return (
    <div className={`mb-6 sm:mb-10 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          {title && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10.5px] sm:text-[11.5px] font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
                {title}
              </span>
            </div>
          )}
          {subcopy && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-snug max-w-2xl">
              {subcopy}
            </h2>
          )}
        </div>
        {action && (
          <div className="flex-shrink-0 mt-3 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
