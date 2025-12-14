"use client";

import { useEffect, useState } from "react";

// Types
interface Position {
  x: number;
  y: number;
}

// Constants
const CURSOR_CONFIG = {
  size: 40,
  color: "rgba(0, 128, 0, 0.1)",
  glowColor: "rgba(0, 128, 0, 0.2)",
  glowSize: 30,
  transitionSpeed: "0.05s",
  zIndex: 9999,
} as const;

const STYLES = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  borderRadius: "50%",
  pointerEvents: "none" as const,
} as const;

// Custom Hook
const useMousePosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};

// Utility Function
const getCursorTransform = (x: number, y: number, size: number) => {
  const offset = size / 2;
  return `translate(${x - offset}px, ${y - offset}px)`;
};

export default function CursorShadow() {
  const position = useMousePosition();

  const cursorStyles = {
    ...STYLES,
    width: `${CURSOR_CONFIG.size}px`,
    height: `${CURSOR_CONFIG.size}px`,
    background: CURSOR_CONFIG.color,
    boxShadow: `0 0 ${CURSOR_CONFIG.glowSize}px ${CURSOR_CONFIG.glowColor}`,
    transform: getCursorTransform(position.x, position.y, CURSOR_CONFIG.size),
    transition: `transform ${CURSOR_CONFIG.transitionSpeed} ease-out`,
    zIndex: CURSOR_CONFIG.zIndex,
  };

  return <div style={cursorStyles} />;
}
