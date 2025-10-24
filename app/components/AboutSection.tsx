"use client";

import { User } from "lucide-react";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="bg-gray-950 text-white py-20 px-6 sm:py-24 lg:py-28"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <User className="w-12 h-12 text-green-400 mx-auto mb-4 transition-transform duration-500 hover:scale-125 hover:rotate-12 hover:text-green-300" />

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-green-400 transition-all duration-500 hover:text-green-300 hover:tracking-wider hover:drop-shadow-lg">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed transition-colors duration-500 hover:text-white hover:drop-shadow-md">
          <strong>Cloud & DevOps Engineer</strong> — shipping scalable cloud
          infrastructure, automation pipelines, and robust DevOps solutions with
          a focus on reliability and efficiency.
        </p>

        {/* Divider */}
        <hr className="border-gray-800 mb-10 transition-colors duration-500 hover:border-green-500" />

        {/* What I Do */}
        <h3 className="text-2xl font-semibold mb-3 text-white transition-colors duration-500 hover:text-green-400 hover:drop-shadow-md">
          What I Do
        </h3>
        <p className="text-gray-300 mb-10 text-base sm:text-lg leading-relaxed transition-colors duration-500 hover:text-white hover:drop-shadow-md">
          I design, deploy, and manage cloud-native solutions leveraging
          containerization (Docker, Docker Compose) and orchestration (OpenShift,
          Kubernetes). I automate deployments, improve system performance, and
          enable teams to ship faster with confidence.
        </p>

        {/* Divider */}
        <hr className="border-gray-800 mb-10 transition-colors duration-500 hover:border-green-500" />

        {/* Focus Areas */}
        <h3 className="text-2xl font-semibold mb-4 text-white transition-colors duration-500 hover:text-green-400">
          Focus Areas
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Infrastructure as Code & Cloud Automation",
            "Terraform, Ansible",
            "Containerization & Orchestration",
            "Docker, Kubernetes, OpenShift",
            "DevOps Enablement & CI/CD",
          ].map((focus, idx) => (
            <span
              key={idx}
              className="bg-green-600/10 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 hover:bg-green-500/20 hover:text-white"
            >
              {focus}
            </span>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-10 transition-colors duration-500 hover:border-green-500" />

        {/* Community & Learning */}
        <h3 className="text-2xl font-semibold mb-3 text-white transition-colors duration-500 hover:text-green-400 hover:drop-shadow-md">
          Community & Learning
        </h3>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed transition-colors duration-500 hover:text-white hover:drop-shadow-md">
          Mentorship & Knowledge Sharing<br />
          Technical Writing on{" "}
          <a
            href="http://blog.gilbertmutai.com"
            className="text-green-400 hover:text-green-300 underline transition-colors duration-300"
          >
            my blog
          </a>
        </p>
      </div>
    </section>
  );
}
