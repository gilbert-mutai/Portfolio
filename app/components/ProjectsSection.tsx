"use client";

const projects = [
  {
    title: "Multi-tier AWS Web App Deployment",
    description:
      "Deployed a highly available web app on AWS using Terraform and Jenkins CI/CD. Used ALB for load balancing, RDS for data persistence, and CloudWatch for monitoring.",
    tech: ["AWS", "Terraform", "Jenkins", "RDS", "CloudWatch"],
    link: "https://github.com/gilbert-mutai/aws-multitier-deployment",
  },
  {
    title: "Kubernetes Cluster with GitOps",
    description:
      "Set up an EKS cluster using IaC with Terraform. Automated deployments using ArgoCD and managed secrets with HashiCorp Vault.",
    tech: ["EKS", "ArgoCD", "Vault", "Helm", "Terraform"],
    link: "https://github.com/gilbert-mutai/kubernetes-gitops",
  },
  {
    title: "Nginx Reverse Proxy & SSL Setup",
    description:
      "Configured Nginx as a reverse proxy and load balancer. Secured traffic using self-signed SSL certificates and redirected HTTP to HTTPS.",
    tech: ["Nginx", "SSL", "Linux", "Automation"],
    link: "https://github.com/gilbert-mutai/nginx-reverse-proxy",
  },
  {
    title: "Dockerized Node.js Application",
    description:
      "Containerized a Node.js application using Docker and Docker Compose. Enabled easy deployment and consistent development environments.",
    tech: ["Docker", "Node.js", "Docker Compose", "Linux"],
    link: "https://github.com/gilbert-mutai/docker-node-app",
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Built automated CI/CD pipelines for multiple repositories using GitHub Actions. Implemented testing, linting, and deployment to AWS EC2.",
    tech: ["GitHub Actions", "AWS EC2", "CI/CD", "Automation"],
    link: "https://github.com/gilbert-mutai/github-actions-ci-cd",
  },
  {
    title: "Monitoring Stack with ELK & Prometheus",
    description:
      "Deployed centralized logging and monitoring stack using ELK (Elasticsearch, Logstash, Kibana) and Prometheus/Grafana for metrics visualization.",
    tech: ["ELK", "Prometheus", "Grafana", "Monitoring", "Linux"],
    link: "https://github.com/gilbert-mutai/monitoring-stack",
  },
];

interface ProjectsSectionProps {
  id?: string;
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800
                       hover:shadow-lg hover:border-green-500 hover:scale-105
                       transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-600/20 text-green-400 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 underline font-medium mt-2"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
