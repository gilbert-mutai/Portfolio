"use client";

import React from "react";
import Image from "next/image";

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

const educationList: EducationEntry[] = [
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
    logo: "/logos/moringa.png",
  },
];

export default function EducationSection({ id }: EducationSectionProps) {
  return (
    <section id={id} className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        Education & Professional Development
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 
                       hover:border-green-500 hover:shadow-2xl hover:scale-105 
                       transition-all duration-300 flex flex-col items-center"
          >
            {/* Logo */}
            <div className="w-24 h-24 mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Image
                src={edu.logo}
                alt={edu.institution}
                width={96}
                height={96}
                className="max-h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center transition-transform duration-300 hover:scale-105">
              {edu.title}
            </h3>
            <p className="text-gray-400 text-center">{edu.institution}</p>
            <p className="text-sm text-gray-500 italic mb-2">{edu.period}</p>

            {edu.details && (
              <ul className="list-disc list-inside text-gray-400 text-sm text-center">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
