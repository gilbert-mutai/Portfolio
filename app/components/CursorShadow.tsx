"use client";

import { useEffect, useState } from "react";

export default function CursorShadow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    pointerEvents: "none",
    background: "rgba(0, 128, 0, 0.1)", // subtle green
    boxShadow: "0 0 30px rgba(0, 128, 0, 0.2)", // subtle glow
    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
    transition: "transform 0.05s ease-out",
    zIndex: 9999,
  }}
></div>


  );
}
