"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, CalendarDays, Github, Linkedin, X } from "lucide-react";
import { InlineWidget } from "react-calendly";

// Constants
const STYLES = {
  section: "relative bg-gray-950 text-white py-24 px-6 sm:py-28 md:py-32 lg:py-40 overflow-hidden",
  container: "relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
  heading: "text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight",
  highlight: "text-green-400",
  badge: "inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm sm:text-base font-medium mb-6",
  paragraph: "text-gray-300 max-w-xl mb-6 text-justify",
  buttonPrimary: "flex items-center gap-2 bg-green-400 text-gray-950 px-4 py-2 rounded-lg font-medium hover:bg-green-500 transition cursor-pointer",
  buttonSecondary: "flex items-center gap-2 border border-green-400 px-4 py-2 rounded-lg text-green-400 font-medium hover:bg-green-600/20 transition cursor-pointer",
  socialLink: "text-gray-400 hover:text-green-400 transition cursor-pointer",
  terminal: {
    container: "mx-auto max-w-xl bg-[#0b1220]/95 border border-gray-800 rounded-lg p-4 sm:p-6 text-slate-200 shadow-xl font-mono",
    dots: "flex items-center gap-2 mb-3",
    dot: "w-3 h-3 rounded-full",
    content: "h-56 sm:h-64 overflow-y-auto pr-2 text-[13px] sm:text-sm",
    line: "whitespace-pre-wrap text-[13px] sm:text-[14px] leading-snug",
    prompt: "mt-3 text-[13px] text-gray-400",
  },
  modal: {
    overlay: "fixed inset-0 bg-black/70 flex items-center justify-center z-50",
    container: "bg-gray-900 rounded-lg p-6 w-11/12 max-w-xl relative transition-all duration-300",
    closeButton: "absolute top-4 right-4 text-gray-400 hover:text-red-500 transition",
    title: "text-2xl font-bold text-green-400 mb-4 text-center",
    calendlyWrapper: "rounded-lg overflow-hidden bg-gray-800 transition-all duration-500 ease-in-out",
  },
} as const;

const TITLES = [
  "Cloud & DevOps Engineer",
  "Automation Engineer",
  "AWS Certified",
  "Kubernetes Certified",
];

const TERMINAL_COMMANDS = [
  {
    cmd: "kubectl get pods --all-namespaces",
    output: [
      "NAMESPACE     NAME                                      READY   STATUS    RESTARTS   AGE",
      "default       web-frontend-8c79f9b56-xyz               1/1     Running   0          3d",
      "default       api-server-5d8f6f49bb-abc                1/1     Running   2          3d",
      "kube-system   coredns-7db6d8ff4b-vnczs                 1/1     Running   0          5d",
    ],
    pauseAfterMs: 1400,
  },
  {
    cmd: "kubectl describe deployment web-frontend",
    output: [
      "Name:                   web-frontend",
      "Namespace:              default",
      "Replicas:               3 desired | 3 updated | 3 available",
      "StrategyType:           RollingUpdate",
      "Container:              web-frontend",
      "Image:                  nginx:latest",
      "Ports:                  80/TCP",
    ],
    pauseAfterMs: 1200,
  },
  {
    cmd: "terraform apply -auto-approve",
    output: [
      "aws_instance.web: Creating...",
      "aws_instance.web: Creation complete after 18s [id=i-07a1234b56cdef789]",
      "",
      "Apply complete! Resources: 1 added, 0 changed, 0 destroyed.",
    ],
    pauseAfterMs: 1500,
  },
  {
    cmd: "ansible-playbook site.yml --limit webservers",
    output: [
      "PLAY [webservers] *****************************************************",
      "TASK [Gathering Facts] ************************************************",
      "ok: [web-1]",
      "TASK [Install NGINX] **************************************************",
      "changed: [web-1]",
      "",
      "PLAY RECAP ************************************************************",
      "web-1 : ok=2 changed=1 unreachable=0 failed=0",
    ],
    pauseAfterMs: 1500,
  },
  {
    cmd: "aws eks update-kubeconfig --name prod-cluster",
    output: [
      "Added new context arn:aws:eks:us-east-1:123456789012:cluster/prod-cluster to /home/gilbert/.kube/config",
      "Switched to context 'prod-cluster'",
    ],
    pauseAfterMs: 1200,
  },
];

const TYPING_SPEED = 28;
const BETWEEN_COMMANDS_DELAY = 700;
const NUM_STARS = 100;
const STAR_CONFIG = {
  color: "rgba(74, 222, 128, 0.8)",
  shadowColor: "rgba(74, 222, 128, 0.6)",
  shadowBlur: 6,
  minSpeed: 0.2,
  maxSpeed: 0.7,
};

// Reusable Components
const TerminalDot = ({ color }: { color: string }) => (
  <span className={`${STYLES.terminal.dot} ${color}`} />
);

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={STYLES.socialLink}>
    <Icon size={20} />
  </a>
);

const ActionButton = ({ 
  onClick, 
  href, 
  icon: Icon, 
  children, 
  variant = "primary" 
}: { 
  onClick?: () => void; 
  href?: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) => {
  const className = variant === "primary" ? STYLES.buttonPrimary : STYLES.buttonSecondary;
  const content = (
    <>
      <Icon size={18} /> {children}
    </>
  );

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};

// Custom Hooks
const useTypewriter = (words: string[]) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayText.length < current.length) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length + 1)),
        100
      );
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(current.slice(0, displayText.length - 1)),
        50
      );
    } else if (!deleting && displayText.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayText.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, wordIndex, words]);

  return displayText;
};

const useTerminalSimulation = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [typingText, setTypingText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);

  const schedule = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  useEffect(() => {
    const el = terminalRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [terminalLines, typingText]);

  useEffect(() => {
    let isCancelled = false;

    const runLoop = async () => {
      let cmdIndex = 0;
      while (!isCancelled) {
        const { cmd, output = [], pauseAfterMs = 1000 } = TERMINAL_COMMANDS[cmdIndex];
        setIsTyping(true);
        setTypingText("");

        for (let i = 0; i <= cmd.length; i++) {
          if (isCancelled) return;
          await new Promise<void>((res) =>
            schedule(() => {
              setTypingText("$ " + cmd.slice(0, i));
              res();
            }, TYPING_SPEED)
          );
        }

        setIsTyping(false);
        setTerminalLines((prev) => [...prev, "$ " + cmd]);
        setTypingText("");

        for (const line of output) {
          if (isCancelled) return;
          await new Promise<void>((res) =>
            schedule(() => {
              setTerminalLines((prev) => [...prev, line]);
              res();
            }, 100)
          );
        }

        await new Promise<void>((res) => schedule(res, pauseAfterMs));
        cmdIndex = (cmdIndex + 1) % TERMINAL_COMMANDS.length;
        if (cmdIndex === 0) {
          await new Promise<void>((res) => schedule(res, BETWEEN_COMMANDS_DELAY));
          setTerminalLines([]);
        }
      }
    };

    runLoop();
    return () => {
      isCancelled = true;
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return { terminalLines, typingText, isTyping, terminalRef };
};

const useStarBackground = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; size: number; speed: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: NUM_STARS }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: STAR_CONFIG.minSpeed + Math.random() * (STAR_CONFIG.maxSpeed - STAR_CONFIG.minSpeed),
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = STAR_CONFIG.color;
        ctx.shadowBlur = STAR_CONFIG.shadowBlur;
        ctx.shadowColor = STAR_CONFIG.shadowColor;
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
};

/** Hero Section with Book a Call Modal + Real Calendly Embed */
export default function Hero(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayText = useTypewriter(TITLES);
  const { terminalLines, typingText, isTyping, terminalRef } = useTerminalSimulation();
  useStarBackground(canvasRef);

  return (
    <section id="home" className={STYLES.section}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className={STYLES.container}>
        {/* LEFT SIDE */}
        <div className="text-left">
          <h1 className={STYLES.heading}>
            Hi, I'm <span className={STYLES.highlight}>Gilbert Mutai</span>
          </h1>

          <div className={STYLES.badge}>
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <p className={STYLES.paragraph}>
            As a dedicated Cloud and DevOps Engineer, I design, deploy, and manage cloud-native
            solutions leveraging containerization and orchestration tools like Docker and Kubernetes.
            Passionate about automation, CI/CD, and delivering resilient systems.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <ActionButton 
              onClick={() => setIsModalOpen(true)} 
              icon={CalendarDays} 
              variant="secondary"
            >
              Book a Call
            </ActionButton>

            <ActionButton href="mailto:info@gilbertmutai.com" icon={Mail}>
              Email Me
            </ActionButton>

            <div className="flex items-center gap-3 ml-2">
              <SocialLink href="https://github.com/gilbert-mutai" icon={Github} />
              <SocialLink href="https://linkedin.com/in/gilbertmutai" icon={Linkedin} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: TERMINAL */}
        <div className="w-full">
          <div className={STYLES.terminal.container}>
            <div className={STYLES.terminal.dots}>
              <TerminalDot color="bg-red-500" />
              <TerminalDot color="bg-yellow-400" />
              <TerminalDot color="bg-green-400" />
            </div>

            <div ref={terminalRef} className={STYLES.terminal.content}>
              <div className="text-green-300 mb-2">Last login: simulated terminal</div>
              {terminalLines.map((line, idx) => (
                <div key={idx} className={STYLES.terminal.line}>
                  {line}
                </div>
              ))}
              {isTyping && (
                <div className={`${STYLES.terminal.line} text-green-300`}>
                  {typingText}
                  <span className="ml-1 inline-block animate-pulse">█</span>
                </div>
              )}
            </div>

            <div className={STYLES.terminal.prompt}>
              <span className="inline-block text-green-300">~$</span>{" "}
              <span className="inline-block ml-2 animate-pulse">waiting...</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL WITH CALENDLY */}
      {isModalOpen && (
        <div className={STYLES.modal.overlay}>
          <div className={STYLES.modal.container}>
            <button className={STYLES.modal.closeButton} onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <h2 className={STYLES.modal.title}>Book a Call with Gilbert</h2>

            <div className={STYLES.modal.calendlyWrapper}>
              <InlineWidget
                url="https://calendly.com/gilbertmutai?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=4ade80"
                styles={{
                  height: "420px",
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}