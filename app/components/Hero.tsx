"use client";

import { Mail, CalendarDays, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Intro */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 transform transition-transform duration-300 hover:scale-105 hover:text-green-300">
          Hi, I'm <span className="text-green-400">Gilbert Mutai</span>
        </h1>

        {/* Role badge */}
        <span className="inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:bg-green-500/30 hover:text-green-200">
          Cloud & DevOps Engineer
        </span>

        {/* About / summary */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg transition-transform duration-300 hover:-translate-y-1">
          As a dedicated Cloud and DevOps Engineer, I design, deploy, and manage cloud-native solutions leveraging containerization and orchestration tools like Docker and OpenShift. Passionate about automation, CI/CD, and delivering resilient systems.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 items-center">
          {/* Book a Call first */}
          <a
            href="#contact"
            className="flex items-center gap-2 border border-green-400 px-5 py-3 rounded-lg text-green-400 font-medium transition-transform duration-300 hover:bg-green-600/20 hover:scale-105"
          >
            <CalendarDays size={20} /> Book a Call
          </a>

          {/* Email Me second */}
          <a
            href="mailto:info@gilbertmutai.com"
            className="flex items-center gap-2 bg-green-400 text-gray-950 px-5 py-3 rounded-lg font-medium transition-transform duration-300 hover:bg-green-500 hover:scale-105"
          >
            <Mail size={20} /> Email Me
          </a>

          {/* Small icons only */}
          <a
            href="https://github.com/gilbert-mutai"
            target="_blank"
            className="text-gray-400 transition-transform duration-300 hover:text-green-400 hover:scale-125"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gilbert-mutai"
            target="_blank"
            className="text-gray-400 transition-transform duration-300 hover:text-green-400 hover:scale-125"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Location & contact */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm transition-all duration-300 hover:text-green-400">
          <span>Nairobi, Kenya</span>
          <span>•</span>
          <span>info@gilbertmutai.com</span>
        </div>
      </div>
    </section>
  );
}
