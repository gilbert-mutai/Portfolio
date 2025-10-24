"use client";

import React from "react";
import { FaAws } from "react-icons/fa";
import { SiKubernetes, SiLinuxfoundation, SiCisco } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface CertificationsSectionProps {
  id?: string;
}

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Issued Apr 17, 2024 · Expires Apr 17, 2027",
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

const skills = [
  "AWS", "Terraform", "Ansible", "Kubernetes",
  "Docker", "OpenShift", "Linux", "CI/CD",
  "GitHub Actions", "GitLab CI", "Jenkins",
  "Bash Scripting", "Monitoring & Logging",
  "Python", "Cloud Automation",
];

export default function CertificationsSection({ id }: CertificationsSectionProps) {
  return (
    <section id={id} className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        Certifications
      </h2>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800
                       hover:border-green-400 hover:shadow-2xl hover:scale-105
                       transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-3">{cert.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mt-2 italic">{cert.date}</p>

            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-green-400 text-sm font-medium
                           hover:text-green-300 transition-colors duration-200"
              >
                Verify <FiExternalLink className="ml-1 w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Core Skills & Tools */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-white">Core Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium
                         transform transition-all duration-300
                         hover:bg-green-400/30 hover:text-green-100 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
