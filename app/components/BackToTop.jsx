"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

// Constants
const STYLES = {
  button: "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600 transition",
  visible: "opacity-100",
  hidden: "opacity-0 pointer-events-none",
};

const CONFIG = {
  scrollThreshold: 300,
  iconSize: 18,
};

// Custom Hook
const useScrollVisibility = (threshold = CONFIG.scrollThreshold) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return visible;
};

// Utility Function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function BackToTop() {
  const visible = useScrollVisibility();
  const visibilityClass = visible ? STYLES.visible : STYLES.hidden;

  return (
    <button
      onClick={scrollToTop}
      className={`${STYLES.button} ${visibilityClass}`}
      aria-label="Back to top"
    >
      <FaArrowUp size={CONFIG.iconSize} />
    </button>
  );
}
