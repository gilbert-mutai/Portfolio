"use client";

import React from "react";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiHashicorp, SiRedhat, SiKubernetes } from "react-icons/si";
import { TbRocket } from "react-icons/tb";

interface CertificationsSectionProps {
  id?: string;
}

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Planned – May 2025",
    icon: <FaAws className="w-10 h-10 text-yellow-400" />,
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    date: "Planned – July 2025",
    icon: <SiHashicorp className="w-10 h-10 text-purple-400" />,
  },
  {
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    date: "Planned – Sept 2025",
    icon: <SiRedhat className="w-10 h-10 text-red-600" />,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    date: "Planned – Nov 2025",
    icon: <SiKubernetes className="w-10 h-10 text-blue-400" />,
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "Planned – Dec 2025",
    icon: <TbRocket className="w-10 h-10 text-green-400" />,
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "Planned – Feb 2026",
    icon: <FaDocker className="w-10 h-10 text-blue-500" />,
  },
];

const skills = [
  "AWS", "Terraform", "Ansible", "Kubernetes",
  "Docker", "Linux", "CI/CD", "GitHub Actions",
  "Jenkins", "Bash Scripting", "Monitoring & Logging",
  "Python", "Cloud Automation",
];

export default function CertificationsSection({ id }: CertificationsSectionProps) {
  return (
    <section id={id} className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        Certifications & Skills
      </h2>

      {/* Certifications */}
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
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mt-2 italic">{cert.date}</p>
          </div>
        ))}
      </div>

      {/* Core Skills */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6 text-white">Core Skills</h3>
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
