"use client";

import Image from "next/image";
import { FaDocker, FaGitAlt, FaPython, FaDatabase, FaWindows,FaNetworkWired, FaFileExcel } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAnsible, SiAkiflow, SiSap, SiElasticsearch, SiGrafana, SiPrometheus, SiArgo, SiRedhat } from "react-icons/si";

type ExperienceProps = {
  id?: string;
};

export default function Experience({ id }: ExperienceProps) {
  const experiences = [
  {
      role: "DevOps Engineer | Cloud Support Engineer",
      company: "Angani Limited",
      logo: "/logos/angani.png",
      location: "Nairobi, Kenya",
      duration: "June 2024 – Present",
      description:
        "Designing scalable cloud solutions with Docker, Kubernetes, OpenShift, Terraform, and Ansible. Building and optimizing CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions, with GitOps practices through ArgoCD. Monitoring and observability implemented via Prometheus, Grafana, and the ELK stack to ensure high availability and system reliability.",
      tools: [
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
        { name: "OpenShift", icon: SiRedhat, color: "text-red-500" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-400" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-400" },
        { name: "GitLab CI", icon: FaGitAlt, color: "text-orange-400" },
        { name: "Jenkins", icon: SiArgo, color: "text-green-400" },
        { name: "ArgoCD", icon: SiArgo, color: "text-pink-400" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-orange-300" },
        { name: "Grafana", icon: SiGrafana, color: "text-red-400" },
        { name: "ELK Stack", icon: SiElasticsearch, color: "text-blue-300" },
      ],
    },

    {
      role: "Data Engineer",
      company: "NCBA Group",
      logo: "/logos/ncba.png",
      location: "Nairobi, Kenya",
      duration: "June 2023 – June 2024",
      description:
        "Designed and optimized ETL pipelines, developed PL/SQL scripts, and ensured reliable data integration and warehouse performance using SQL, PL/SQL, Airflow, Spark, SAP, and Python.",
      tools: [
        { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
        { name: "PL/SQL", icon: FaDatabase, color: "text-blue-300" },
        { name: "Airflow", icon: SiAkiflow, color: "text-red-400" },
        { name: "Spark", icon: FaPython, color: "text-orange-400" },
        { name: "SAP", icon: SiSap, color: "text-blue-600" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
      ],
    },
    {
      role: "Data Analyst | Business Intelligence",
      company: "NCBA Group",
      logo: "/logos/ncba.png",
      location: "Nairobi, Kenya",
      duration: "Jan 2023 – June 2023",
      description:
        "Managed ETL workflows, optimized database performance, and generated insightful reports using SQL, PL/SQL, SAP BI, Excel, and Python.",
      tools: [
        { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
        { name: "PL/SQL", icon: FaDatabase, color: "text-blue-300" },
        { name: "SAP BI", icon: SiSap, color: "text-blue-600" },
        { name: "Excel", icon: FaFileExcel, color: "text-green-400" },
        { name: "Python", icon: FaPython, color: "text-yellow-400" },
      ],
    },
    {
      role: "Technical Support Engineer",
      company: "ICT Authority",
      logo: "/logos/ict-authority.png",
      location: "Nairobi, Kenya",
      duration: "Nov 2021 – Nov 2022",
      description:
        "Administered Windows and Linux environments, managed user accounts, Active Directory, firewall and network tools, ensuring seamless IT operations and high system availability.",
    tools: [
      { name: "Windows Server", icon: FaWindows, color: "text-blue-400" },
      { name: "Active Directory", icon: FaWindows, color: "text-green-400" },
      { name: "Firewalls & Network", icon: FaNetworkWired, color: "text-purple-400" },
    ],
    },
  ];

  return (
    <section id={id} className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800
                hover:border-green-500 hover:shadow-2xl transform hover:-translate-y-2
                transition-all duration-300 flex flex-col items-center text-center
                min-h-[380px]"
                >
              {/* Company Logo */}
              <div className="mb-4">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={60}
                  height={60}
                  className="object-contain rounded-md"
                />
              </div>

              {/* Role title updated to white */}
              <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {exp.company} | {exp.location} | {exp.duration}
              </p>
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {/* Tools / Tech Badges */}
            {/* Tools / Tech Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {exp.tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <span
                  key={i}
                  className={`flex items-center gap-1 bg-green-600/20 px-3 py-1 rounded-full text-sm font-medium ${tool.color} 
                            hover:scale-105 hover:bg-green-600/30 transition-all duration-200`}
                >
                  <Icon size={18} />
                  {tool.name}
                </span>
              );
            })}
          </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
