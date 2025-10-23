"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-12">
          I’m always open to new opportunities or collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          {/* Email */}
          <div className="text-center flex flex-col items-center">
            <h3 className="font-semibold text-lg text-green-400 mb-1">Email</h3>
            <p className="text-gray-300">info@gilbertmutai.com</p>
          </div>

          {/* Location */}
          <div className="text-center flex flex-col items-center">
            <GoLocation className="text-green-400 text-2xl mb-1" />
            <p className="text-gray-300">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://github.com/gilbert-mutai"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gilbertmutai"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://wa.me/254725060098"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Gilbert Mutai. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React, Tailwind CSS, and Next.js
          </p>
        </footer>
      </div>
    </section>
  );
}
