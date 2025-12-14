"use client";

import { User } from "lucide-react";

// Reusable style constants
const STYLES = {
  section: "bg-gray-950 text-white py-20 px-6 sm:py-24 lg:py-28",
  container: "max-w-4xl mx-auto text-center",
  icon: "w-12 h-12 text-green-400 mx-auto mb-4 transition-transform duration-500 hover:scale-125 hover:rotate-12 hover:text-green-300",
  mainHeading: "text-4xl sm:text-5xl font-bold mb-6 text-green-400 transition-all duration-500 hover:text-green-300 hover:tracking-wider hover:drop-shadow-lg",
  subHeading: "text-2xl font-semibold mb-3 text-white transition-colors duration-500 hover:text-green-400 hover:drop-shadow-md",
  paragraph: "text-gray-300 text-base sm:text-lg leading-relaxed transition-colors duration-500 hover:text-white hover:drop-shadow-md",
  divider: "border-gray-800 mb-10 transition-colors duration-500 hover:border-green-500",
  tag: "bg-green-600/10 text-gray-200 px-3 py-1 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 hover:bg-green-500/20 hover:text-white",
  link: "text-green-400 hover:text-green-300 underline transition-colors duration-300",
} as const;

// Reusable components
const Divider = () => <hr className={STYLES.divider} />;

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className={STYLES.subHeading}>{children}</h3>
);

const Paragraph = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => (
  <p className={`${STYLES.paragraph} ${className}`.trim()}>{children}</p>
);

const Tag = ({ children }: { children: string }) => (
  <span className={STYLES.tag}>{children}</span>
);

export default function AboutSection({ id }: { id?: string }) {
  const focusAreas = [
    "Infrastructure as Code & Cloud Automation",
    "Terraform, Ansible",
    "Containerization & Orchestration",
    "Docker, Kubernetes, OpenShift",
    "DevOps Enablement & CI/CD",
  ];

  return (
    <section id={id} className={STYLES.section}>
      <div className={STYLES.container}>
        <User className={STYLES.icon} />

        <h2 className={STYLES.mainHeading}>About Me</h2>

        <Paragraph className="mb-8">
          <strong>Cloud & DevOps Engineer</strong> — shipping scalable cloud
          infrastructure, automation pipelines, and robust DevOps solutions with
          a focus on reliability and efficiency.
        </Paragraph>

        <Divider />

        <SubHeading>What I Do</SubHeading>
        <Paragraph className="mb-10">
          I design, deploy, and manage cloud-native solutions leveraging
          containerization (Docker, Docker Compose) and orchestration (OpenShift,
          Kubernetes). I automate deployments, improve system performance, and
          enable teams to ship faster with confidence.
        </Paragraph>

        <Divider />

        <h3 className={`${STYLES.subHeading} mb-4`}>Focus Areas</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {focusAreas.map((focus, idx) => (
            <Tag key={idx}>{focus}</Tag>
          ))}
        </div>

        <Divider />

        <SubHeading>Community & Learning</SubHeading>
        <Paragraph>
          Mentorship & Knowledge Sharing
          <br />
          Technical Writing on{" "}
          <a href="http://blog.gilbertmutai.com" className={STYLES.link}>
            my blog
          </a>
        </Paragraph>
      </div>
    </section>
  );
}
