"use client";

import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 bg-gray-900 text-white shadow-md">
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        {/* Circle Logo with initials, green bg and white text */}
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold">
          GM
        </div>

        {/* Name and Role */}
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-green-400">Gilbert Mutai</span>
          <span className="text-sm text-gray-300">DevOps Engineer</span>
        </div>
      </div>

      {/* Menu Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-green-400 transition-colors">About</a>
        <a href="#experience" className="hover:text-green-400 transition-colors">Experience</a>
        <a href="#education" className="hover:text-green-400 transition-colors">Education</a>
        <a href="#certifications" className="hover:text-green-400 transition-colors">Certifications</a>
        <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
      </div>

      {/* Actions: Blog, Download CV, Social Icons */}
      <div className="flex items-center gap-4">
        <a
          href="https://blog.gilbertmutai.com"
          target="_blank"
          className="px-3 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-600/20 transition"
        >
          Blog
        </a>

        <a
          href="https://docs.google.com/document/d/1WrsGoZBDFpeCh7jpk5gkubqRJaU0nW59LGAzeoACi0c/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-400 text-gray-950 rounded-lg font-medium hover:bg-green-500 transition"
        >
          Download CV
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
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
      </div>
    </nav>
  );
}
