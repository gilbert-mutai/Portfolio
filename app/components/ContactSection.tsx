"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconType } from "react-icons";

// Types
interface ContactSectionProps {
  id?: string;
}

interface ContactInfo {
  label: string;
  value: string;
  copyText?: string;
  icon?: React.ReactNode;
}

interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
  hoverEffect?: { rotate?: number };
}

// Constants
const STYLES = {
  section: "py-16 px-6 bg-gray-900 text-white",
  container: "max-w-4xl mx-auto text-center",
  heading: "text-3xl font-bold text-green-400 mb-4",
  subtitle: "text-gray-300 mb-12",
  contactGrid: "flex flex-col md:flex-row justify-center items-center gap-10 mb-12",
  contactItem: "text-center flex flex-col items-center cursor-pointer relative",
  contactItemNoCursor: "text-center flex flex-col items-center",
  contactLabel: "font-semibold text-lg text-green-400 mb-1",
  contactValue: "text-gray-300 hover:text-green-300 transition",
  copiedTooltip: "absolute top-full mt-1 text-sm text-green-400",
  socialContainer: "flex justify-center items-center gap-6 mb-8",
  socialLink: "text-gray-400 hover:text-green-400 transition",
  footer: {
    container: "border-t border-gray-700 mt-10 pt-6",
    copyright: "text-gray-500 text-sm",
    builtWith: "text-gray-400 text-sm mt-2",
  },
} as const;

const MOTION_CONFIG = {
  section: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  socialLink: {
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 300 },
  },
} as const;

const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Email",
    value: "info@gilbertmutai.com",
    copyText: "info@gilbertmutai.com",
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    icon: <GoLocation className="text-green-400 text-2xl mb-1" />,
  },
  {
    label: "WhatsApp",
    value: "+254 725 060 098",
    copyText: "+254725060098",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/gilbert-mutai",
    icon: FaGithub,
    label: "GitHub",
    hoverEffect: { rotate: 5 },
  },
  {
    href: "https://linkedin.com/in/gilbertmutai",
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverEffect: { rotate: -5 },
  },
  {
    href: "https://wa.me/254725060098",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

// Reusable Components
const CopiedTooltip = ({ show }: { show: boolean }) => {
  if (!show) return null;
  return <span className={STYLES.copiedTooltip}>Copied!</span>;
};

const ContactInfoItem = ({
  info,
  onCopy,
  isCopied,
}: {
  info: ContactInfo;
  onCopy?: () => void;
  isCopied: boolean;
}) => {
  const isCopyable = !!info.copyText;
  const className = isCopyable ? STYLES.contactItem : STYLES.contactItemNoCursor;

  return (
    <div className={className} onClick={onCopy}>
      {info.icon}
      {info.label !== "Location" && (
        <h3 className={STYLES.contactLabel}>{info.label}</h3>
      )}
      <p className={STYLES.contactValue}>{info.value}</p>
      <CopiedTooltip show={isCopied} />
    </div>
  );
};

const SocialLinkItem = ({ link }: { link: SocialLink }) => {
  const Icon = link.icon;
  const whileHover = link.hoverEffect
    ? { scale: 1.2, ...link.hoverEffect }
    : { scale: 1.2 };

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={whileHover}
      {...MOTION_CONFIG.socialLink}
      className={STYLES.socialLink}
      aria-label={link.label}
    >
      <Icon size={28} />
    </motion.a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={STYLES.footer.container}>
      <p className={STYLES.footer.copyright}>
        © {currentYear} Gilbert Mutai. All rights reserved.
      </p>
      <p className={STYLES.footer.builtWith}>
        Built with React, Tailwind CSS, and Next.js
      </p>
    </footer>
  );
};

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.section id={id} {...MOTION_CONFIG.section} className={STYLES.section}>
      <div className={STYLES.container}>
        <h2 className={STYLES.heading}>Contact Me</h2>
        <p className={STYLES.subtitle}>
          I'm always open to new opportunities or collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className={STYLES.contactGrid}>
          {CONTACT_INFO.map((info, index) => (
            <ContactInfoItem
              key={index}
              info={info}
              onCopy={
                info.copyText
                  ? () => handleCopy(info.copyText!, info.label.toLowerCase())
                  : undefined
              }
              isCopied={copied === info.label.toLowerCase()}
            />
          ))}
        </div>

        {/* Social Links */}
        <div className={STYLES.socialContainer}>
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLinkItem key={index} link={link} />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </motion.section>
  );
};

export default ContactSection;
