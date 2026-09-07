import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiGit,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const capabilitiesList = [
  {
    index: "01",
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building responsive interfaces, reusable component architectures, micro-interactions, and modern web experiences with clean client state.",
  },
  {
    index: "02",
    title: "UI / UX DESIGN",
    description:
      "Designing clear visual hierarchies, typography systems, auto-layout prototypes, and thoughtful user flows in Figma.",
  },
  {
    index: "03",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Building web applications connecting frontend views to Laravel backend logic, relational MySQL schemas, and role authorizations.",
  },
  {
    index: "04",
    title: "PRACTICAL PROBLEM SOLVING",
    description:
      "Translating school and real-world administrative requirements into dependable, accessible digital tools.",
  },
];

// Constellation graph nodes
const constellationNodes = [
  // Frontend Cluster
  { id: "react", label: "React", icon: SiReact, x: 28, y: 32, category: "frontend", desc: "Component architecture, hooks state management, and fluid UI systems." },
  { id: "javascript", label: "JavaScript", icon: SiJavascript, x: 18, y: 55, category: "frontend", desc: "ES6+ asynchronous workflows, DOM events, and logic modularity." },
  { id: "tailwind", label: "Tailwind CSS", icon: SiTailwindcss, x: 42, y: 48, category: "frontend", desc: "Utility-first design tokens, responsive breakpoints, and dark themes." },
  { id: "html", label: "HTML5", icon: SiHtml5, x: 12, y: 28, category: "frontend", desc: "Semantic markup, accessible tree structures, and metadata." },
  { id: "css", label: "CSS3", icon: SiCss, x: 34, y: 16, category: "frontend", desc: "Modern layouts, GPU transforms, keyframe motion, and flexbox." },

  // Backend Cluster
  { id: "laravel", label: "Laravel", icon: SiLaravel, x: 72, y: 35, category: "backend", desc: "MVC application structure, Eloquent ORM, and role-based middleware." },
  { id: "php", label: "PHP", icon: SiPhp, x: 62, y: 55, category: "backend", desc: "Server-side processing, session management, and backend scripting." },
  { id: "mysql", label: "MySQL", icon: SiMysql, x: 84, y: 52, category: "backend", desc: "Relational database schema modeling, indexing, and foreign constraints." },

  // Design & Workflow Cluster
  { id: "figma", label: "Figma", icon: SiFigma, x: 50, y: 78, category: "design", desc: "Component variants, auto-layout 5.0, wireframing, and design tokens." },
  { id: "git", label: "Git", icon: SiGit, x: 68, y: 82, category: "tools", desc: "Distributed version control, branching workflows, and commit integrity." },
  { id: "github", label: "GitHub", icon: FaGithub, x: 86, y: 78, category: "tools", desc: "Remote repository hosting, issue tracking, and collaborative pushes." },
];

// Edges connecting related technologies
const constellationEdges = [
  ["react", "javascript"],
  ["react", "tailwind"],
  ["react", "css"],
  ["html", "javascript"],
  ["html", "css"],
  ["javascript", "tailwind"],
  ["laravel", "php"],
  ["laravel", "mysql"],
  ["php", "mysql"],
  ["react", "laravel"], // bridge between frontend and backend
  ["tailwind", "figma"], // bridge between design and styling
  ["figma", "git"],
  ["git", "github"],
  ["laravel", "git"],
];

export default function CapabilitiesSection() {
  const [activeNodeId, setActiveNodeId] = useState("react");

  const activeNode =
    constellationNodes.find((n) => n.id === activeNodeId) || constellationNodes[0];

  // Find connected node IDs
  const connectedIds = constellationEdges
    .filter(([a, b]) => a === activeNodeId || b === activeNodeId)
    .map(([a, b]) => (a === activeNodeId ? b : a));

  return (
    <section
      id="capabilities"
      className="py-24 sm:py-36 border-b border-border bg-transparent relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-bright animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-soft font-semibold">
              03 — CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            What I Like to Build.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-base sm:text-lg text-foreground-muted font-normal leading-relaxed"
          >
            Core pillars of my frontend engineering, interface craft, and system implementation.
          </motion.p>
        </div>

        {/* ── 4 Core Capabilities (Editorial Rows, NOT rounded cards) ── */}
        <div className="divide-y divide-border/80 border-y border-border mb-20 sm:mb-28">
          {capabilitiesList.map((item, idx) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-6 sm:py-8 group flex flex-col md:flex-row md:items-baseline justify-between gap-4 transition-colors duration-200 hover:bg-surface/30 px-2 sm:px-4"
            >
              <div className="flex items-baseline gap-4 md:w-1/3">
                <span className="font-mono text-xs font-semibold text-accent-bright">
                  {item.index}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-accent-bright transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="md:w-2/3 text-xs sm:text-sm text-foreground-muted leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── SIGNATURE INTERACTIVE TECHNOLOGY CONSTELLATION ─────────── */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-soft block mb-1">
                TECHNOLOGY GRAPH // CONSTELLATION
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Connected Stack & Tooling
              </h3>
            </div>
            <span className="font-mono text-xs text-foreground-subtle">
              Hover nodes to inspect architecture & connections
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Constellation Canvas (SVG + HTML nodes) */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0c0c12] border border-border rounded-xl overflow-hidden shadow-inner">
              
              {/* Subtle Grid in Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {constellationEdges.map(([fromId, toId], edgeIdx) => {
                  const fromNode = constellationNodes.find((n) => n.id === fromId);
                  const toNode = constellationNodes.find((n) => n.id === toId);
                  if (!fromNode || !toNode) return null;

                  const isConnectedToActive =
                    fromId === activeNodeId || toId === activeNodeId;

                  return (
                    <line
                      key={edgeIdx}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke={
                        isConnectedToActive
                          ? "#8B5CF6"
                          : "rgba(255, 255, 255, 0.08)"
                      }
                      strokeWidth={isConnectedToActive ? 1.5 : 0.8}
                      strokeDasharray={isConnectedToActive ? "none" : "3 3"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Constellation Interactive Nodes */}
              {constellationNodes.map((node) => {
                const Icon = node.icon;
                const isActive = node.id === activeNodeId;
                const isConnected = connectedIds.includes(node.id);

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/node flex items-center gap-2 transition-all duration-300 focus:outline-none"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    aria-label={`Inspect ${node.label}`}
                  >
                    {/* Node Dot / Glow */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 h-8 bg-accent-bright text-white shadow-[0_0_16px_rgba(139,92,246,0.8)] scale-110"
                          : isConnected
                          ? "w-7 h-7 bg-surface-elevated text-accent-soft border border-accent/60 scale-105"
                          : "w-6 h-6 bg-surface text-foreground-subtle border border-border hover:border-accent/40"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Node Label */}
                    <span
                      className={`font-mono text-xs transition-all duration-200 hidden sm:inline ${
                        isActive
                          ? "text-foreground font-bold tracking-wider"
                          : isConnected
                          ? "text-accent-soft font-medium"
                          : "text-foreground-subtle opacity-60"
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Technical Specification Panel */}
            <div className="lg:col-span-4 border border-border bg-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent-bright animate-ping" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-soft font-semibold">
                      NODE // {activeNode.category.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                    {activeNode.label}
                  </h4>

                  <p className="text-sm text-foreground-muted leading-relaxed font-normal mb-6">
                    {activeNode.desc}
                  </p>

                  <div className="pt-4 border-t border-border/80">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle block mb-2">
                      Connected Nodes in System:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {connectedIds.map((cId) => {
                        const cNode = constellationNodes.find((n) => n.id === cId);
                        return (
                          <span
                            key={cId}
                            onClick={() => setActiveNodeId(cId)}
                            className="cursor-pointer px-2 py-0.5 rounded bg-surface-elevated border border-border text-[11px] font-mono text-foreground hover:border-accent-bright transition-colors"
                          >
                            {cNode?.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
