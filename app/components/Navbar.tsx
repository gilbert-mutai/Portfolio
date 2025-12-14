"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Constants
const STYLES = {
  nav: "sticky top-0 z-50 flex justify-between items-center py-4 px-6 bg-gray-900/80 backdrop-blur-md text-white shadow-md transition-all duration-300",
  logo: {
    container: "flex items-center gap-3",
    circle: "w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold transform hover:scale-110 transition duration-300",
    textContainer: "flex flex-col leading-tight",
    name: "text-xl font-bold text-green-400",
    title: "text-sm text-gray-300",
  },
  desktopMenu: "space-x-6 hidden md:flex",
  link: {
    base: "relative transition-all duration-300 hover:scale-105",
    active: "text-green-400 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-400 after:rounded-full",
    inactive: "text-gray-300 hover:text-green-400",
  },
  actions: {
    container: "hidden md:flex items-center gap-4",
    blogButton: "px-3 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-600/20 hover:scale-105 transition duration-300",
    socialContainer: "flex items-center gap-2",
    socialLink: "text-gray-400 hover:text-green-400 transform hover:scale-110 transition duration-300",
  },
  mobile: {
    menuButton: "md:hidden text-gray-300 hover:text-green-400 transition",
    menu: "absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg md:hidden",
    menuContent: "flex flex-col items-center py-6 space-y-4",
    menuLink: "text-lg transition-all",
    socialContainer: "flex gap-4 mt-4",
  },
} as const;

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://github.com/gilbert-mutai", icon: Github },
  { href: "https://linkedin.com/in/gilbertmutai", icon: Linkedin },
] as const;

const MENU_ANIMATION = {
  initial: { opacity: 0, y: -15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.3 },
} as const;

// Reusable Components
const Logo = () => (
  <div className={STYLES.logo.container}>
    <div className={STYLES.logo.circle}>GM</div>
    <div className={STYLES.logo.textContainer}>
      <span className={STYLES.logo.name}>Gilbert Mutai</span>
      <span className={STYLES.logo.title}>DevOps Engineer</span>
    </div>
  </div>
);

const NavLink = ({
  href,
  label,
  isActive,
  onClick,
  isMobile = false,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}) => {
  const baseClass = isMobile ? STYLES.mobile.menuLink : STYLES.link.base;
  const activeClass = isActive ? STYLES.link.active : STYLES.link.inactive;
  const className = `${baseClass} ${activeClass}`;

  if (isMobile) {
    return (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={STYLES.actions.socialLink}>
    <Icon size={24} />
  </a>
);

const SocialLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={isMobile ? STYLES.mobile.socialContainer : STYLES.actions.socialContainer}>
    {SOCIAL_LINKS.map(({ href, icon }) => (
      <SocialLink key={href} href={href} icon={icon} />
    ))}
  </div>
);

// Custom Hook
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={STYLES.nav}>
      <Logo />

      {/* Desktop Menu */}
      <div className={STYLES.desktopMenu}>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink
            key={href}
            href={href}
            label={label}
            isActive={activeSection === href.substring(1)}
          />
        ))}
      </div>

      {/* Desktop Actions */}
      <div className={STYLES.actions.container}>
        <a
          href="https://blog.gilbertmutai.com"
          target="_blank"
          rel="noopener noreferrer"
          className={STYLES.actions.blogButton}
        >
          Blog
        </a>
        <SocialLinks />
      </div>

      {/* Mobile Menu Button */}
      <button className={STYLES.mobile.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div {...MENU_ANIMATION} className={STYLES.mobile.menu}>
            <div className={STYLES.mobile.menuContent}>
              {NAV_LINKS.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  isActive={activeSection === href.substring(1)}
                  onClick={() => handleNavClick(href)}
                  isMobile
                />
              ))}
              <SocialLinks isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
