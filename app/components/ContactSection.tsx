"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000); // tooltip hides after 2s
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-12">
          I’m always open to new opportunities or collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          {/* Email */}
          <div
            className="text-center flex flex-col items-center cursor-pointer relative"
            onClick={() => handleCopy("info@gilbertmutai.com", "email")}
          >
            <h3 className="font-semibold text-lg text-green-400 mb-1">Email</h3>
            <p className="text-gray-300 hover:text-green-300 transition">
              info@gilbertmutai.com
            </p>
            {copied === "email" && (
              <span className="absolute top-full mt-1 text-sm text-green-400">
                Copied!
              </span>
            )}
          </div>

          {/* Location */}
          <div className="text-center flex flex-col items-center">
            <GoLocation className="text-green-400 text-2xl mb-1" />
            <p className="text-gray-300">Nairobi, Kenya</p>
          </div>

          {/* WhatsApp */}
          <div
            className="text-center flex flex-col items-center cursor-pointer relative"
            onClick={() => handleCopy("+254725060098", "whatsapp")}
          >
            <h3 className="font-semibold text-lg text-green-400 mb-1">WhatsApp</h3>
            <p className="text-gray-300 hover:text-green-300 transition">
              +254 725 060 098
            </p>
            {copied === "whatsapp" && (
              <span className="absolute top-full mt-1 text-sm text-green-400">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Social Links with motion effects */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <motion.a
            href="https://github.com/gilbert-mutai"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/gilbertmutai"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="https://wa.me/254725060098"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaWhatsapp size={28} />
          </motion.a>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gilbert Mutai. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React, Tailwind CSS, and Next.js
          </p>
        </footer>
      </div>
    </motion.section>
  );
};

export default ContactSection;
