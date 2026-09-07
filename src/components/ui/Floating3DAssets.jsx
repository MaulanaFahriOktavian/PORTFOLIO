import React from "react";
import { motion } from "framer-motion";

/**
 * 3D Stylized Glossy Lightning Bolt
 */
export function FloatingLightning({
  className = "",
  delay = 0,
  scale = 1,
  rotate = 15,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: scale,
        y: [0, -16, 0],
        rotate: [rotate - 4, rotate + 4, rotate - 4],
      }}
      transition={{
        y: {
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        rotate: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        opacity: { duration: 0.8 },
      }}
      className={`pointer-events-none absolute z-20 ${className}`}
    >
      <svg
        width="110"
        height="150"
        viewBox="0 0 110 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_15px_30px_rgba(34,197,94,0.45)]"
      >
        <defs>
          <linearGradient id="boltFrontGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D1FAE5" />
            <stop offset="35%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
          <linearGradient id="boltDepthGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>
          <linearGradient id="boltRimGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#B6EFAC" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* 3D Extrusion Layer */}
        <path
          d="M62 4L14 82H50L36 146L96 66H58L62 4Z"
          transform="translate(10, 8)"
          fill="url(#boltDepthGlow)"
        />

        {/* Front Face */}
        <path
          d="M62 4L14 82H50L36 146L96 66H58L62 4Z"
          fill="url(#boltFrontGlow)"
        />

        {/* Glossy Highlights */}
        <path d="M62 4L14 82H26L66 16L62 4Z" fill="url(#boltRimGlow)" opacity="0.85" />
        <path d="M50 82L36 146L44 140L56 86H50Z" fill="#D1FAE5" opacity="0.65" />
      </svg>
    </motion.div>
  );
}

/**
 * 3D Isometric Glowing Tech Cube
 */
export function Floating3DCube({
  className = "",
  size = 70,
  delay = 0,
  rotate = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -14, 0],
        rotate: [rotate - 3, rotate + 5, rotate - 3],
      }}
      transition={{
        y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.8 },
      }}
      className={`pointer-events-none absolute z-10 ${className}`}
    >
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_12px_24px_rgba(34,197,94,0.35)]"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D1FAE5" />
            <stop offset="100%" stopColor="#B6EFAC" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>
        </defs>

        {/* Top Face */}
        <polygon points="50,5 92,28 50,52 8,28" fill="url(#cubeTop)" />
        {/* Left Face */}
        <polygon points="8,28 50,52 50,105 8,81" fill="url(#cubeLeft)" />
        {/* Right Face */}
        <polygon points="50,52 92,28 92,81 50,105" fill="url(#cubeRight)" />

        {/* Top highlight line */}
        <line x1="50" y1="5" x2="92" y2="28" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
        <line x1="50" y1="5" x2="8" y2="28" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
      </svg>
    </motion.div>
  );
}

/**
 * 3D Glossy Sphere / Planetoid
 */
export function Floating3DSphere({
  className = "",
  size = 50,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
        x: [0, 6, 0],
      }}
      transition={{
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.8 },
      }}
      className={`pointer-events-none absolute z-10 ${className}`}
    >
      <div
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 32% 28%, #D1FAE5 0%, #22C55E 45%, #16A34A 85%, #14532D 100%)",
          boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4), inset -2px -2px 8px rgba(0,0,0,0.3)",
        }}
        className="rounded-full relative"
      >
        {/* Glossy specular reflection */}
        <div className="absolute top-2 left-2 w-3 h-2 rounded-full bg-white/70 blur-[1px] rotate-[-30deg]" />
      </div>
    </motion.div>
  );
}

/**
 * 3D Floating 4-Point Star / Crystal Sparkle
 */
export function Floating3DStar({
  className = "",
  size = 40,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: [1, 1.15, 1],
        rotate: [0, 180, 360],
        y: [0, -10, 0],
      }}
      transition={{
        scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 20, repeat: Infinity, ease: "linear", delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.8 },
      }}
      className={`pointer-events-none absolute z-10 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
      >
        <defs>
          <linearGradient id="starGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
        </defs>
        <path
          d="M30 0C30 16 35 25 60 30C35 35 30 44 30 60C30 44 25 35 0 30C25 25 30 16 30 0Z"
          fill="url(#starGlow)"
        />
      </svg>
    </motion.div>
  );
}
