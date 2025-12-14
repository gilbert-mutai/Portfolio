"use client";

import Image from "next/image";
import { FaDocker, FaGitAlt, FaPython, FaDatabase, FaWindows, FaNetworkWired, FaFileExcel } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAnsible, SiAkiflow, SiSap, SiElasticsearch, SiGrafana, SiPrometheus, SiArgo, SiRedhat } from "react-icons/si";
import { IconType } from "react-icons";

// Types
type Tool = {
  name: string;
  icon: IconType;
  color: string;
};

type Experience = {
  role: string;
  company: string;
  logo: string;
  location: string;
  duration: string;
  description: string;
  tools: Tool[];
};

type ExperienceProps = {
  id?: string;
};

// Constants
const STYLES = {
  section: "bg-gray-950 text-white py-24 px-6",
  container: "max-w-6xl mx-auto",
  heading: "text-4xl font-bold text-center mb-12 text-green-400",
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-8",
  card: "bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-green-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center min-h-[380px]",
  logo: "mb-4",
  role: "text-xl font-semibold text-white mb-1",
  meta: "text-gray-400 text-sm mb-2",
  description: "text-gray-300 mb-4",
  toolsContainer: "flex flex-wrap justify-center gap-2",
  toolBadge: "flex items-center gap-1 bg-green-600/20 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 hover:bg-green-600/30 transition-all duration-200",
} as const;

const EXPERIENCES: Experience[] = [
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

// Reusable Components
const ExperienceLogo = ({ logo, company }: { logo: string; company: string }) => (
  <div className={STYLES.logo}>
    <Image
      src={logo}
      alt={`${company} logo`}
      width={60}
      height={60}
      className="object-contain rounded-md"
    />
  </div>
);

const ExperienceMeta = ({ company, location, duration }: { company: string; location: string; duration: string }) => (
  <p className={STYLES.meta}>
    {company} | {location} | {duration}
  </p>
);

const ToolBadge = ({ tool }: { tool: Tool }) => {
  const Icon = tool.icon;
  return (
    <span className={`${STYLES.toolBadge} ${tool.color}`}>
      <Icon size={18} />
      {tool.name}
    </span>
  );
};

const ToolsList = ({ tools }: { tools: Tool[] }) => (
  <div className={STYLES.toolsContainer}>
    {tools.map((tool, i) => (
      <ToolBadge key={i} tool={tool} />
    ))}
  </div>
);

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className={STYLES.card}>
    <ExperienceLogo logo={experience.logo} company={experience.company} />
    <h3 className={STYLES.role}>{experience.role}</h3>
    <ExperienceMeta 
      company={experience.company} 
      location={experience.location} 
      duration={experience.duration} 
    />
    <p className={STYLES.description}>{experience.description}</p>
    <ToolsList tools={experience.tools} />
  </div>
);

export default function Experience({ id }: ExperienceProps) {
  return (
    <section id={id} className={STYLES.section}>
      <div className={STYLES.container}>
        <h2 className={STYLES.heading}>Experience</h2>
        <div className={STYLES.grid}>
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
