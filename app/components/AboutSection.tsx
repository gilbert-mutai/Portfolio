"use client";

import { User } from "lucide-react";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <User className="w-12 h-12 text-green-400 mx-auto mb-4 transition-transform duration-300 hover:scale-125" />

        <h2 className="text-4xl font-bold mb-4 text-green-400 transition-transform duration-300 hover:scale-105">
          About Me
        </h2>

        <p className="text-gray-300 mb-6 transition-transform duration-300 hover:-translate-y-1">
          <strong>Cloud & DevOps Engineer</strong><br />
          Shipping scalable cloud infrastructure, automation pipelines, and robust DevOps solutions with a focus on reliability and efficiency.
        </p>

        <h3 className="text-2xl font-bold mb-2 text-white transition-transform duration-300 hover:scale-105">
          What I do
        </h3>
        <p className="text-gray-300 mb-6 transition-transform duration-300 hover:-translate-y-1">
          I design, deploy, and manage cloud-native solutions leveraging containerization (Docker, Docker Compose) and orchestration (OpenShift, Kubernetes). I automate deployments, improve system performance, and enable teams to ship faster with confidence.
        </p>

        <h3 className="text-2xl font-bold mb-2 text-white transition-transform duration-300 hover:scale-105">
          Focus Areas
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {[
            "Infrastructure as Code & Cloud Automation",
            "Terraform, Ansible",
            "Containerization & Orchestration",
            "Docker, Kubernetes, OpenShift",
            "DevOps Enablement & CI/CD",
          ].map((focus, idx) => (
            <span
              key={idx}
              className="bg-green-600/10 text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-green-500/20 hover:text-white hover:scale-105"
            >
              {focus}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white transition-transform duration-300 hover:scale-105">
          Community & Learning
        </h3>
        <p className="text-gray-300 transition-transform duration-300 hover:-translate-y-1">
          Mentorship & Knowledge Sharing<br />
          Technical Writing on{" "}
          <a
            href="http://blog.gilbertmutai.com"
            className="text-gray-200 hover:text-white underline transition-colors duration-300"
          >
            my blog
          </a>
        </p>
      </div>
    </section>
  );
}
