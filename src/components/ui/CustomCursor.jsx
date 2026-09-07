import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState("default"); // "default" | "hover" | "view"
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(pointer: fine)").matches;
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 450, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isProject = Boolean(
        target.closest("[data-cursor='view'], [data-project-row='true'], [data-project-card='true']")
      );
      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']")
      );

      if (isProject) {
        setCursorMode("view");
      } else if (isInteractive) {
        setCursorMode("hover");
      } else {
        setCursorMode("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Center Dot */}
      {cursorMode !== "view" && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#16A34A]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* Trailing Outer Ring / Subtle VIEW indicator */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono text-[9px] font-semibold tracking-wider border transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorMode === "view" ? 50 : cursorMode === "hover" ? 36 : 22,
          height: cursorMode === "view" ? 50 : cursorMode === "hover" ? 36 : 22,
          borderColor:
            cursorMode === "view"
              ? "rgba(22, 163, 74, 0.9)"
              : cursorMode === "hover"
              ? "rgba(22, 163, 74, 0.45)"
              : "rgba(17, 24, 39, 0.25)",
          backgroundColor:
            cursorMode === "view"
              ? "rgba(22, 163, 74, 0.95)"
              : cursorMode === "hover"
              ? "rgba(22, 163, 74, 0.08)"
              : "transparent",
          scale: isClicking ? 0.88 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorMode === "view" && <span className="text-white text-[9px] font-bold">VIEW</span>}
      </motion.div>
    </div>
  );
}
