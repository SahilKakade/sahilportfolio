"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics configuration for that fluid, high-tech trailing lag
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Center the custom cursor dot on the native cursor position
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the cursor is interacting with a link or button
      if (target.tagName === "A" || target.closest("a") || target.tagName === "BUTTON") {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-50 hidden md:block mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovered ? 1.6 : 1,
        backgroundColor: isHovered ? "rgba(77, 124, 255, 0.15)" : "rgba(77, 124, 255, 0.03)",
        borderColor: isHovered ? "#4D7CFF" : "rgba(77, 124, 255, 0.4)",
        boxShadow: isHovered ? "0 0 20px rgba(77, 124, 255, 0.4)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
}