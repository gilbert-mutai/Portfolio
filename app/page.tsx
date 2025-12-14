import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/Certifications";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CursorShadow from "./components/CursorShadow";

// Constants
const SECTIONS = [
  { Component: AboutSection, id: "about" },
  { Component: ExperienceSection, id: "experience" },
  { Component: EducationSection, id: "education" },
  { Component: CertificationsSection, id: "certifications" },
  { Component: ProjectsSection, id: "projects" },
  { Component: ContactSection, id: "contact" },
] as const;

export default function HomePage() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-gray-950">
        <Navbar />
        <CursorShadow />
        <Hero />
        {SECTIONS.map(({ Component, id }) => (
          <Component key={id} id={id} />
        ))}
        <BackToTop />
      </main>
    </ErrorBoundary>
  );
}
