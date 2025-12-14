"use client";

import React from "react";
import { FaAws, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiLinuxfoundation, SiCisco } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

// Types
interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  verifyUrl?: string;
}

interface CertificationsSectionProps {
  id?: string;
}

// Constants
const STYLES = {
  section: "bg-gray-950 text-white py-16 px-6",
  heading: "text-4xl font-bold text-center mb-12 text-green-400",
  certificationsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16",
  certCard: "bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center",
  certIcon: "mb-3",
  certName: "text-xl font-semibold mb-2",
  certIssuer: "text-gray-400 text-sm",
  certDate: "text-sm text-gray-500 mt-2 italic",
  verifyLink: "mt-3 inline-flex items-center text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-200",
  skillsContainer: "max-w-4xl mx-auto text-center",
  skillsHeading: "text-2xl font-bold mb-6 text-white",
  skillsGrid: "flex flex-wrap justify-center gap-3",
  skillBadge: "bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:bg-green-400/30 hover:text-green-100 hover:scale-105",
} as const;

const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Issued Dec 27, 2024 · Expires Dec 27, 2027",
    icon: <FaAws className="w-10 h-10 text-purple-400" />,
    verifyUrl: "#", // Replace with actual verification URL when available
  },
  {
    name: "GitHub Copilot",
    issuer: "Microsoft",
    date: "Issued Dec 12, 2025 · Expires Dec 13, 2027",
    icon: <FaGithub className="w-10 h-10 text-gray-300" />,
    verifyUrl: "https://learn.microsoft.com/en-gb/users/gilbertkiprotichmutai-2499/credentials/a81f3c36f5827ee2",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Issued Dec 27, 2025 · Expires Dec 27, 2028",
    icon: <FaAws className="w-10 h-10 text-yellow-400" />,
    verifyUrl: "https://www.credly.com/badges/8f8bae42-7e4c-459c-99c6-88e9fd84e577/public_url",
  },
  {
    name: "KCNA: Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    date: "Issued Jun 4, 2025 · Expires Jun 5, 2027",
    icon: <SiKubernetes className="w-10 h-10 text-blue-400" />,
    verifyUrl: "https://www.credly.com/badges/ed713936-2db2-4d69-83a5-b3849f0e30d4/public_url",
  },
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services Training and Certification",
    date: "Issued Apr 21, 2024",
    icon: <FaAws className="w-10 h-10 text-green-400" />,
    verifyUrl: "https://www.credly.com/badges/5e21539f-7366-4976-be43-e694ca508606/public_url",
  },
  {
    name: "LFS250: Kubernetes and Cloud Native Essentials",
    issuer: "The Linux Foundation",
    date: "Issued May 3, 2025",
    icon: <SiLinuxfoundation className="w-10 h-10 text-gray-300" />,
    verifyUrl: "https://www.credly.com/badges/4e7280d6-62ae-49ed-95a3-34b5a820703a/public_url",
  },
  {
    name: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Issued Jan 31, 2022",
    icon: <SiCisco className="w-10 h-10 text-blue-500" />,
    verifyUrl: "https://www.credly.com/badges/c74f9e94-1844-423a-8d13-825a23babd90/public_url",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Issued Feb 21, 2022",
    icon: <SiCisco className="w-10 h-10 text-blue-400" />,
    verifyUrl: "https://www.credly.com/badges/f7fa7336-b1ba-472b-a4f6-8edf693cfb17/public_url",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Issued May 3, 2022",
    icon: <SiCisco className="w-10 h-10 text-blue-300" />,
    verifyUrl: "https://www.credly.com/badges/680b55cf-d0eb-4634-b48c-f3e543fa74cf/public_url",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "Issued Jun 20, 2022",
    icon: <SiCisco className="w-10 h-10 text-green-400" />,
    verifyUrl: "https://www.credly.com/badges/39cdb704-fcb3-41a8-adbe-77919aee850c/public_url",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Issued Jun 22, 2022",
    icon: <SiCisco className="w-10 h-10 text-green-300" />,
    verifyUrl: "https://www.credly.com/badges/5388813f-50d0-4f54-a1df-97a75a2ab83e/public_url",
  },
];

const SKILLS = [
  "AWS", "Terraform", "Ansible", "Kubernetes",
  "Docker", "OpenShift", "Linux", "CI/CD",
  "GitHub Actions", "GitLab CI", "Jenkins",
  "Bash Scripting", "Monitoring & Logging",
  "Python", "Cloud Automation",
];

// Reusable Components
const CertificationIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className={STYLES.certIcon}>{icon}</div>
);

const VerifyLink = ({ url }: { url?: string }) => {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={STYLES.verifyLink}
    >
      Verify <FiExternalLink className="ml-1 w-4 h-4" />
    </a>
  );
};

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <div className={STYLES.certCard}>
    <CertificationIcon icon={cert.icon} />
    <h3 className={STYLES.certName}>{cert.name}</h3>
    <p className={STYLES.certIssuer}>{cert.issuer}</p>
    <p className={STYLES.certDate}>{cert.date}</p>
    <VerifyLink url={cert.verifyUrl} />
  </div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className={STYLES.skillBadge}>{skill}</span>
);

const SkillsSection = () => (
  <div className={STYLES.skillsContainer}>
    <h3 className={STYLES.skillsHeading}>Core Skills & Tools</h3>
    <div className={STYLES.skillsGrid}>
      {SKILLS.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export default function CertificationsSection({ id }: CertificationsSectionProps) {
  return (
    <section id={id} className={STYLES.section}>
      <h2 className={STYLES.heading}>Certifications</h2>

      {/* Certifications Grid */}
      <div className={STYLES.certificationsGrid}>
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>

      {/* Core Skills & Tools */}
      <SkillsSection />
    </section>
  );
}
