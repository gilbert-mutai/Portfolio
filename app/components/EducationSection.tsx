"use client";

import React from "react";
import Image from "next/image";

// Types
interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  details?: string[];
  logo: string;
}

interface EducationSectionProps {
  id?: string;
}

// Constants
const STYLES = {
  section: "bg-gray-950 text-white py-16 px-6",
  container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
  heading: "text-4xl font-bold text-center mb-12 text-green-400",
  card: "bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center",
  logoContainer: "w-24 h-24 mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110",
  logo: "max-h-full object-contain",
  title: "text-xl font-semibold mb-2 text-center transition-transform duration-300 hover:scale-105",
  institution: "text-gray-400 text-center",
  period: "text-sm text-gray-500 italic mb-2",
  detailsList: "list-disc list-inside text-gray-400 text-sm text-center",
} as const;

const EDUCATION_LIST: EducationEntry[] = [
  {
    title: "Bachelor of Science in Information Technology (IT)",
    institution: "Karatina University, Nyeri",
    period: "August 2016 – March 2021",
    details: [
      "Grade: First Class Honours",
      "Major: Data Structures, Algorithms and Databases",
    ],
    logo: "/logos/karatina.png",
  },
  {
    title: "AWS re/Start Programme",
    institution: "Ajira Digital",
    period: "January 2024 – April 2024",
    details: [
      "Cloud Fundamentals: Linux, Python, Networking, Security, Compute, Storage, and Databases",
      "AWS Cloud Services",
    ],
    logo: "/logos/ajira.png",
  },
  {
    title: "Software Engineering",
    institution: "Moringa School",
    period: "February 2021 – August 2021",
    details: [
      "Core technologies: Linux, Python, JavaScript, Databases, Version Control (Git)",
    ],
    logo: "/logos/moringa-2.png",
  },
];

// Reusable Components
const EducationLogo = ({ logo, institution }: { logo: string; institution: string }) => (
  <div className={STYLES.logoContainer}>
    <Image
      src={logo}
      alt={institution}
      width={96}
      height={96}
      className={STYLES.logo}
    />
  </div>
);

const EducationDetails = ({ details }: { details?: string[] }) => {
  if (!details) return null;
  
  return (
    <ul className={STYLES.detailsList}>
      {details.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

const EducationCard = ({ education }: { education: EducationEntry }) => (
  <div className={STYLES.card}>
    <EducationLogo logo={education.logo} institution={education.institution} />
    <h3 className={STYLES.title}>{education.title}</h3>
    <p className={STYLES.institution}>{education.institution}</p>
    <p className={STYLES.period}>{education.period}</p>
    <EducationDetails details={education.details} />
  </div>
);

export default function EducationSection({ id }: EducationSectionProps) {
  return (
    <section id={id} className={STYLES.section}>
      <h2 className={STYLES.heading}>Education</h2>
      <div className={STYLES.container}>
        {EDUCATION_LIST.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}
