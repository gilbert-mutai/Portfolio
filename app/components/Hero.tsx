"use client";

import React from "react";
import { Mail, CalendarDays, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Hero Section
 * Left: Typewriter titles (from your original)
 * Right: Continuous terminal simulation (Kubernetes/DevOps commands)
 * Background: Floating stars
 */
export default function Hero(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /** ------------------ TYPEWRITER (LEFT SIDE) ------------------ **/
  const titles = [
    "Cloud & DevOps Engineer",
    "Automation Engineer",
    "AWS Certified",
    "Kubernetes Certified",
  ];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 100);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 50);
    } else if (!deleting && displayText.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayText.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, titleIndex]);

  /** ------------------ TERMINAL SIMULATION (RIGHT SIDE) ------------------ **/
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [typingText, setTypingText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const commands: { cmd: string; output?: string[]; pauseAfterMs?: number }[] = [
    {
      cmd: "kubectl get pods --all-namespaces",
      output: [
        "NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE",
        "default       web-frontend-56f7ccfc9d         1/1     Running   0          3m",
        "default       api-service-6d89b64b74          1/1     Running   0          3m",
        "kube-system   coredns-558bd4d5db-7k9q2        1/1     Running   0          10m",
      ],
      pauseAfterMs: 1400,
    },
    {
      cmd: "kubectl describe deployment web-frontend",
      output: [
        "Name:                   web-frontend",
        "Namespace:              default",
        "Replicas:               3 desired | 3 updated | 3 total",
        "StrategyType:           RollingUpdate",
        "Conditions:             Available True  (5s ago)",
      ],
      pauseAfterMs: 1200,
    },
    {
      cmd: "terraform apply -auto-approve",
      output: [
        "aws_eks_cluster.cluster: Creating...",
        "aws_eks_cluster.cluster: Creation complete after 12s",
        "Apply complete! Resources: 5 added, 0 changed, 0 destroyed.",
      ],
      pauseAfterMs: 1500,
    },
    {
      cmd: "ansible-playbook site.yml --limit webservers",
      output: [
        "PLAY [Deploy Web App] *****************************************************",
        "TASK [Gathering Facts] ****************************************************",
        "ok: [web1]",
        "ok: [web2]",
        "PLAY RECAP ****************************************************************",
        "web1                       : ok=12   changed=3    unreachable=0    failed=0",
      ],
      pauseAfterMs: 1500,
    },
    {
      cmd: "aws eks update-kubeconfig --name prod-cluster",
      output: ["Updated context arn:aws:eks:us-east-1:123456789012:cluster/prod-cluster"],
      pauseAfterMs: 1200,
    },
  ];

  const typingSpeed = 28;
  const betweenCommandsDelay = 700;
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
        const { cmd, output = [], pauseAfterMs = 1000 } = commands[cmdIndex];

        setIsTyping(true);
        setTypingText("");
        for (let i = 0; i <= cmd.length; i++) {
          if (isCancelled) return;
          await new Promise<void>((res) => schedule(() => {
            setTypingText("$ " + cmd.slice(0, i));
            res();
          }, typingSpeed));
        }
        setIsTyping(false);
        setTerminalLines((prev) => [...prev, "$ " + cmd]);
        setTypingText("");

        for (const line of output) {
          if (isCancelled) return;
          await new Promise<void>((res) => schedule(() => {
            setTerminalLines((prev) => [...prev, line]);
            res();
          }, 100));
        }

        await new Promise<void>((res) => schedule(res, pauseAfterMs));
        cmdIndex = (cmdIndex + 1) % commands.length;
        if (cmdIndex === 0) {
          await new Promise<void>((res) => schedule(res, betweenCommandsDelay));
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

  /** ------------------ STAR BACKGROUND ------------------ **/
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; size: number; speed: number }[] = [];
    const numStars = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.2 + Math.random() * 0.5,
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(74, 222, 128, 0.8)";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(74, 222, 128, 0.6)";
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  /** ------------------ RENDER ------------------ **/
  return (
    <section
      id="home"
      className="relative bg-gray-950 text-white py-24 px-6 sm:py-28 md:py-32 lg:py-40 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        {/* LEFT: Intro */}
      <div className="text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
        Hi, I'm <span className="text-green-400">Gilbert Mutai</span>
        </h1>

      {/* Typewriter Roles */}
      <div className="inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm sm:text-base font-medium mb-6">
        {displayText}
        <span className="ml-1 animate-pulse">|</span>
      </div>

      <p className="text-gray-300 max-w-xl mb-6 text-justify">
        As a dedicated Cloud and DevOps Engineer, I design, deploy, and manage cloud-native
        solutions leveraging containerization and orchestration tools like Docker and Kubernetes.
        Passionate about automation, CI/CD, and delivering resilient systems.
      </p>


        <div className="flex flex-wrap gap-3 items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 border border-green-400 px-4 py-2 rounded-lg text-green-400 font-medium hover:bg-green-600/20 transition"
          >
            <CalendarDays size={18} /> Book a Call
          </a>

          <a
            href="mailto:info@gilbertmutai.com"
            className="flex items-center gap-2 bg-green-400 text-gray-950 px-4 py-2 rounded-lg font-medium hover:bg-green-500 transition"
          >
            <Mail size={18} /> Email Me
          </a>

          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/gilbert-mutai" target="_blank" className="text-gray-400 hover:text-green-400 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gilbertmutai" target="_blank" className="text-gray-400 hover:text-green-400 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

        {/* RIGHT SIDE: TERMINAL */}
        <div className="w-full">
          <div className="mx-auto max-w-xl bg-[#0b1220]/95 border border-gray-800 rounded-lg p-4 sm:p-6 text-slate-200 shadow-xl font-mono">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <div ref={terminalRef} className="h-56 sm:h-64 overflow-y-auto pr-2 text-[13px] sm:text-sm">
              <div className="text-green-300 mb-2">Last login: simulated terminal</div>
              {terminalLines.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap text-[13px] sm:text-[14px] leading-snug">
                  {line}
                </div>
              ))}
              {isTyping && (
                <div className="text-[13px] sm:text-[14px] leading-snug text-green-300">
                  {typingText}
                  <span className="ml-1 inline-block animate-pulse">█</span>
                </div>
              )}
            </div>

            <div className="mt-3 text-[13px] text-gray-400">
              <span className="inline-block text-green-300">~$</span>{" "}
              <span className="inline-block ml-2 animate-pulse">waiting...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
