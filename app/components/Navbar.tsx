"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Close menu when link clicked
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 bg-gray-900/80 backdrop-blur-md text-white shadow-md transition-all duration-300">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold transform hover:scale-110 transition duration-300">
          GM
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-400">Gilbert Mutai</span>
          <span className="text-sm text-gray-300">DevOps Engineer</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="space-x-6 hidden md:flex">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`relative transition-all duration-300 ${
              activeSection === href.substring(1)
                ? "text-green-400 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-400 after:rounded-full"
                : "text-gray-300 hover:text-green-400"
            } hover:scale-105`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://blog.gilbertmutai.com"
          target="_blank"
          className="px-3 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-600/20 hover:scale-105 transition duration-300"
        >
          Blog
        </a>

        <a
          href="https://docs.google.com/document/d/1WrsGoZBDFpeCh7jpk5gkubqRJaU0nW59LGAzeoACi0c/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-400 text-gray-950 rounded-lg font-medium hover:bg-green-500 hover:scale-105 transition duration-300"
        >
          Download CV
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/gilbert-mutai"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gilbertmutai"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transform hover:scale-110 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-green-400 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-lg transition-all ${
                    activeSection === href.substring(1)
                      ? "text-green-400 font-semibold"
                      : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/gilbert-mutai"
                  target="_blank"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/gilbertmutai"
                  target="_blank"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  <Linkedin size={24} />
                </a>
              </div>

              <a
                href="https://docs.google.com/document/d/1WrsGoZBDFpeCh7jpk5gkubqRJaU0nW59LGAzeoACi0c/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-green-400 text-gray-950 rounded-lg font-medium hover:bg-green-500 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
