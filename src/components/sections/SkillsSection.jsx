import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-border bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted font-medium">
              Technical Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Skills & Engineering Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-base sm:text-lg text-foreground-muted font-normal leading-relaxed"
          >
            Practical technologies, frameworks, and design systems I use to build thoughtful web applications.
          </motion.p>
        </div>

        {/* Animated Horizontal Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-border/80 origin-left mb-12 sm:mb-16"
        />

        {/* Editorial Technical Index Layout */}
        <div className="divide-y divide-border/80 border-y border-border/80">
          {skillGroups.map((group, groupIdx) => {
            const groupNum = groupIdx < 9 ? `0${groupIdx + 1}` : `${groupIdx + 1}`;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className="py-8 sm:py-10 group/row"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left Column: Number, Category & Purpose Statement */}
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-mono text-sm font-semibold text-accent">
                        {groupNum}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover/row:text-accent transition-colors duration-200">
                        {group.category.toUpperCase()}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-normal">
                      {group.description}
                    </p>
                  </div>

                  {/* Right Column: Interactive Technology Cards / Pills */}
                  <div className="lg:col-span-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {group.skills.map((skill) => {
                        const Icon = skill.icon;
                        const isThisHovered = hoveredSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group/skill relative flex items-center justify-between p-3 sm:p-3.5 rounded-lg border transition-all duration-300 cursor-default ${
                              isThisHovered
                                ? "border-foreground/50 bg-surface shadow-sm -translate-y-0.5"
                                : "border-border/60 bg-surface/50 hover:border-foreground/30 hover:bg-surface"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                className="p-1 rounded transition-colors duration-200"
                                style={{
                                  color: isThisHovered ? skill.color : "inherit",
                                }}
                              >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                              </span>
                              <span className="font-mono text-xs sm:text-sm font-medium text-foreground transition-transform duration-200 group-hover/skill:translate-x-0.5 truncate">
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                isThisHovered
                                  ? "bg-accent scale-125"
                                  : "bg-border/60"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
