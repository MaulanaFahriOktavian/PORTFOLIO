import React from 'react';

/**
 * SectionHeader
 * Editorial section header with index, title, subcopy, and thin structural divider line.
 */
export default function SectionHeader({
  index = '01',
  title,
  subcopy,
  action,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200/80 dark:border-white/10">
        <div>
          <div className={`flex items-center gap-3 ${subcopy ? "mb-3" : "mb-0"}`}>
            <span className="font-mono text-xs font-bold tracking-widest text-[#16A34A] dark:text-[#22C55E] uppercase">
              {index}
            </span>
            <span className="w-6 h-[1.5px] bg-[#22C55E]" />
            <span className="font-mono text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase font-semibold">
              {title}
            </span>
          </div>
          {subcopy && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111827] dark:text-white tracking-tight max-w-2xl">
              {subcopy}
            </h2>
          )}
        </div>
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
