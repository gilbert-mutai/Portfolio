import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CursorShadow from "./components/CursorShadow";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/Certifications";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <CursorShadow />
      <Hero />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <EducationSection id="education" />
      <CertificationsSection id="certifications" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
      <BackToTop />
    </main>
  );
}
