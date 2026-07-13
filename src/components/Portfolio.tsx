import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Mail } from "lucide-react";
import profile from "../assets/ranjithpn.jpg";
import styled from "styled-components";

/* lucide-react dropped brand/logo icons (trademark reasons), so GitHub
   and LinkedIn are small inline SVGs instead. */
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const Image = styled.img`
  width: 320px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 260px;
  }
`;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Profile {
  name: string;
  initials: string;
  role: string;
  location: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  availability: string;
}

interface LedgerItem {
  value: string;
  label: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Project {
  fig: string;
  title: string;
  period: string;
  stack: string[];
  description: string;
  link: string;
}

interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  detail: string;
  period: string;
}

interface Achievement {
  title: string;
  detail: string;
}

interface NavLink {
  href: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/*  DATA — replace with your own                                       */
/* ------------------------------------------------------------------ */

const PROFILE: Profile = {
  name: "Ranjith P N",
  initials: "RPN",
  role: "Software Engineer — Java / React Full Stack",
  location: "Hyderabad, India (remote)",
  tagline:
    "I'm a full-stack engineer with 4+ years building secure, scalable enterprise software — from authentication platforms in banking to customer-facing lending tools — across Java, Spring Boot, React, and cloud-native infrastructure.",
  email: "pn.ranjith292@gmail.com",
  phone: "+91-9177388913",
  github: "github.com/ranjithpn292",
  linkedin: "linkedin.com/in/ranjith-p-n-1761181b4",
  availability: "Open to new work",
};

const LEDGER: LedgerItem[] = [
  { value: "4+", label: "Years in enterprise software" },
  { value: "3", label: "Enterprise platforms shipped" },
  { value: "2nd", label: "Place, Synchrony global hackathon" },
  { value: "3", label: "Company recognitions earned" },
];

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python (Basic)"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Data",
    items: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Helm", "Jenkins", "CI/CD"],
  },
];

const INTERESTS: string[] = [
  "Artificial Intelligence",
  "Generative AI",
  "Large Language Models",
  "AWS Cloud (Learning)",
];

const PROJECTS: Project[] = [
  {
    fig: "FIG. 1",
    title: "PayLater Promo Editor",
    period: "Feb 2026 — Present · Synchrony Financial",
    stack: ["React", "Spring Boot", "REST APIs"],
    description:
      "A React-based microfrontend that lets business users manage consumer lending promotions directly, without engineering intervention. Backed by Spring Boot services supporting customer-facing lending workflows, delivered with globally distributed Agile teams through CI/CD pipelines.",
    link: "#",
  },
  {
    fig: "FIG. 2",
    title: "FIDO Hard Token Authentication Platform",
    period: "Jul 2022 — Feb 2026 · DBS Tech India",
    stack: ["Java", "Spring Boot", "React", "SQL"],
    description:
      "Built the FIDO authentication React application from scratch for an enterprise banking platform, integrated with secure Hard Token Authentication REST APIs. Deployments automated with Docker, Kubernetes, Helm, and Jenkins, improving release consistency and cutting manual effort.",
    link: "#",
  },
];

const EXPERIENCE: ExperienceEntry[] = [
  {
    period: "Feb 2026 — Present",
    role: "Software Engineer — Java / React Full Stack",
    org: "Synchrony Financial",
    description:
      "Building the React-based PayLater Promo Editor microfrontend and supporting Spring Boot REST APIs for customer-facing lending workflows. Troubleshooting production issues across microfrontends and microservices, and collaborating with globally distributed Agile teams through CI/CD pipelines and code reviews.",
  },
  {
    period: "Jul 2022 — Feb 2026",
    role: "Software Engineer — Java / React Full Stack",
    org: "DBS Tech India",
    description:
      "Developed secure Hard Token Authentication REST APIs for enterprise banking platforms and built the FIDO Authentication React application from scratch. Resolved production issues across Java microservices through root-cause analysis, automated deployments with Docker, Kubernetes, Helm, and Jenkins CI/CD, and maintained coverage with JUnit and peer code review.",
  },
];

const EDUCATION: Education = {
  school:
    "Mother Theresa Institute of Engineering & Technology, JNTU Anantapur",
  degree: "Bachelor of Technology in Computer Science",
  detail: "CGPA 8.66 / 10",
  period: "Jul 2018 — Jul 2022",
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "2nd Place Globally",
    detail: "Synchrony's Global Vibe Coding Hackathon",
  },
  {
    title: "Super Rookie Award",
    detail: "Outstanding engineering contributions",
  },
  { title: "Best Team Effort Award", detail: "Successful product delivery" },
];

const NAV_LINKS: NavLink[] = [
  { href: "#dispatch", label: "Dispatch" },
  { href: "#field-notes", label: "Field Notes" },
  { href: "#case-files", label: "Case Files" },
  { href: "#bylines", label: "Bylines" },
  { href: "#credentials", label: "Credentials" },
  { href: "#correspondence", label: "Correspondence" },
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal helper                                               */
/* ------------------------------------------------------------------ */

function useReveal(): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface SectionLabelProps {
  index: string;
  title: string;
}

function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span className="section-rule" />
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const today = new Date();

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Libre+Franklin:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .site {
          --paper: #F4EFE2;
          --paper-raised: #ECE5D3;
          --ink: #22283A;
          --ink-soft: #565C6E;
          --ochre: #B07E2A;
          --sage: #6E7C5E;
          --rule: #CBC0A4;

          background: var(--paper);
          color: var(--ink);
          font-family: 'Libre Franklin', sans-serif;
          min-height: 100vh;
          width: 100%;
        }
        .site, .site * { box-sizing: border-box; }
        .site a { color: inherit; text-decoration: none; }
        .site ul { list-style: none; padding: 0; margin: 0; }
        .site button { font: inherit; cursor: pointer; background: none; border: none; color: inherit; }

        .wrap { max-width: 1152px; margin: 0 auto; padding: 0 24px; }

        /* ---------- header ---------- */
        .header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(244,239,226,0.9);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--rule);
        }
        .header-inner {
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo { display: flex; align-items: center; gap: 8px; font-family: 'IBM Plex Mono', monospace; }
        .logo-badge {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--ink); color: var(--paper);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
        }
        .logo-name { font-size: 13px; letter-spacing: 0.02em; color: var(--ink-soft); }

        .nav { display: none; align-items: center; gap: 32px; }
        .nav-link {
          position: relative;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .nav-link::after {
          content: "";
          position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px;
          background: currentColor; transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }

        .availability { display: none; align-items: center; gap: 8px; }
        .availability-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); }
        .availability-text {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft);
        }

        .menu-btn { display: block; padding: 8px; margin-right: -8px; }

        .mobile-menu {
          display: flex; flex-direction: column; gap: 16px;
          padding: 0 24px 20px; border-top: 1px solid var(--rule);
        }
        .mobile-menu a { font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ink-soft); padding-top: 16px; }

        /* ---------- hero ---------- */
        .hero { padding: 64px 0 56px; border-bottom: 1px solid var(--rule); }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px;
          letter-spacing: 0.25em; text-transform: uppercase; color: var(--ochre);
          margin-bottom: 24px;
        }
        .hero-title {
          font-family: 'Fraunces', serif; font-weight: 500;
          font-size: clamp(2.6rem, 12vw, 6.4rem);
          line-height: 0.95;
          color: var(--ink);
          margin-bottom: 32px;
        }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .hero-tagline {
          font-size: 1.15rem; line-height: 1.7; color: var(--ink-soft);
        }
        .hero-tagline::first-letter {
          font-family: 'Fraunces', serif; font-weight: 500; font-size: 3.6em;
          float: left; line-height: 0.85; padding-right: 0.08em; padding-top: 0.04em;
          color: var(--ink);
        }
        .hero-actions { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 20px; font-size: 14px; letter-spacing: 0.02em;
          background: var(--ink); color: var(--paper);
        }
        .btn-link {
          position: relative;
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; letter-spacing: 0.02em; color: var(--ink-soft);
        }
        .btn-link::after {
          content: ""; position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px;
          background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease;
        }
        .btn-link:hover::after { transform: scaleX(1); }

        /* ---------- ledger ---------- */
        .ledger {
          display: grid; grid-template-columns: repeat(2, 1fr);
          border-bottom: 1px solid var(--rule);
        }
        .ledger-item { padding: 32px 16px; border-top: 1px solid var(--rule); }
        .ledger-item:nth-child(odd) { border-right: 1px solid var(--rule); }
        .ledger-value { font-family: 'Fraunces', serif; font-size: 2rem; color: var(--ink); margin-bottom: 8px; }
        .ledger-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.02em; color: var(--ink-soft); }

        /* ---------- section label ---------- */
        .section-label { display: flex; align-items: baseline; gap: 12px; margin-bottom: 40px; }
        .section-index {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px;
          letter-spacing: 0.25em; text-transform: uppercase; color: var(--ochre);
        }
        .section-rule { flex: 1; height: 1px; background: var(--rule); }
        .section-title { font-family: 'Fraunces', serif; font-size: 1.6rem; color: var(--ink); }

        section.block { padding: 64px 0; }
        section.block + section.block { border-top: 1px solid var(--rule); }

        /* ---------- dispatch ---------- */
        .dispatch-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .dispatch-photo {
          aspect-ratio: 4 / 5;
          display: flex; align-items: center; justify-content: center;
          background: var(--paper-raised); border: 1px solid var(--rule);
          background-image: radial-gradient(circle at 1px 1px, rgba(34,40,58,0.05) 1px, transparent 0);
          background-size: 14px 14px;
        }
        .dispatch-photo span { font-family: 'Fraunces', serif; font-size: 3.5rem; color: var(--ochre); }
        .dispatch-location {
          margin-top: 16px; font-family: 'IBM Plex Mono', monospace; font-size: 12px;
          letter-spacing: 0.02em; text-transform: uppercase; color: var(--ink-soft);
        }
        .dispatch-text p { font-size: 1.05rem; line-height: 1.7; color: var(--ink-soft); margin-bottom: 20px; }
        .dispatch-text p:last-child { margin-bottom: 0; }

        /* ---------- field notes ---------- */
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .skill-heading {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--ochre);
          margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--rule);
        }
        .skill-list { display: flex; flex-direction: column; gap: 10px; }
        .skill-item { font-size: 14px; color: var(--ink-soft); }

        .interests-row {
          margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--rule);
          display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
        }
        .interests-label {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--sage); margin-right: 4px;
        }
        .interest-tag {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; padding: 6px 12px;
          color: var(--ink-soft); background: var(--paper-raised); border: 1px solid var(--rule);
        }

        /* ---------- case files ---------- */
        .case-list { display: flex; flex-direction: column; }
        .case-item {
          display: grid; grid-template-columns: 1fr; gap: 16px;
          padding: 40px 0; border-top: 1px solid var(--rule);
        }
        .case-item:last-child { border-bottom: 1px solid var(--rule); }
        .case-fig-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.15em; color: var(--ochre); }
        .case-fig-period { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--ink-soft); margin-top: 8px; }
        .case-title {
          font-family: 'Fraunces', serif; font-size: 1.7rem; color: var(--ink);
          margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
        }
        .case-title-icon { color: var(--ochre); transition: transform 0.3s ease; }
        .case-item:hover .case-title-icon { transform: translate(3px, -3px); }
        .case-desc { font-size: 15px; line-height: 1.7; color: var(--ink-soft); }
        .case-stack { display: flex; flex-wrap: wrap; gap: 8px; }
        .stack-tag {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.02em;
          padding: 5px 10px; color: var(--ink-soft); background: var(--paper-raised); border: 1px solid var(--rule);
        }

        /* ---------- bylines ---------- */
        .timeline { position: relative; padding-left: 28px; }
        .timeline-rail { position: absolute; left: 0; top: 8px; bottom: 8px; width: 1px; background: var(--rule); }
        .timeline-list { display: flex; flex-direction: column; gap: 48px; }
        .timeline-item { position: relative; }
        .timeline-dot { position: absolute; left: -33px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: var(--ochre); }
        .timeline-period { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.02em; color: var(--ink-soft); margin-bottom: 8px; }
        .timeline-role { font-family: 'Fraunces', serif; font-size: 1.3rem; color: var(--ink); margin-bottom: 4px; }
        .timeline-org { color: var(--ink-soft); }
        .timeline-desc { font-size: 15px; line-height: 1.7; color: var(--ink-soft); max-width: 640px; }

        /* ---------- credentials ---------- */
        .credentials-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .edu-period { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--ink-soft); margin-bottom: 8px; }
        .edu-degree { font-family: 'Fraunces', serif; font-size: 1.4rem; color: var(--ink); margin-bottom: 8px; }
        .edu-school { font-size: 15px; line-height: 1.6; color: var(--ink-soft); margin-bottom: 4px; }
        .edu-detail { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--sage); }
        .honor-row { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 16px 0; border-top: 1px solid var(--rule); }
        .honor-row:first-child { border-top: none; }
        .honor-title { font-family: 'Fraunces', serif; font-size: 1.15rem; color: var(--ink); }
        .honor-detail { font-size: 14px; color: var(--ink-soft); text-align: right; }

        /* ---------- correspondence ---------- */
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .contact-heading { font-family: 'Fraunces', serif; font-size: 2.2rem; line-height: 1.2; color: var(--ink); margin-bottom: 24px; }
        .contact-email {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          font-size: 1.2rem; color: var(--ochre);
        }
        .contact-email::after {
          content: ""; position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px;
          background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease;
        }
        .contact-email:hover::after { transform: scaleX(1); }
        .contact-meta { margin-top: 12px; font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: var(--ink-soft); }
        .contact-links { display: flex; flex-wrap: wrap; gap: 12px; }
        .contact-link {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 16px; font-size: 14px; color: var(--ink-soft); border: 1px solid var(--rule);
        }

        /* ---------- footer ---------- */
        .footer {
          padding: 32px 0; border-top: 1px solid var(--rule);
          display: flex; flex-direction: column; gap: 12px;
        }
        .footer-text { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.02em; color: var(--ink-soft); }

        /* ---------- responsive (tablet / desktop) ---------- */
        @media (min-width: 768px) {
          .nav { display: flex; }
          .availability { display: flex; }
          .menu-btn { display: none; }

          .hero-grid { grid-template-columns: 7fr 5fr; align-items: start; }
          .hero-actions { align-items: flex-end; }

          .ledger { grid-template-columns: repeat(4, 1fr); }
          .ledger-item:nth-child(odd) { border-right: none; }
          .ledger-item:not(:last-child) { border-right: 1px solid var(--rule); }

          .dispatch-grid { grid-template-columns: 1fr 2fr; }
          .skills-grid { grid-template-columns: repeat(4, 1fr); }

          .case-item { grid-template-columns: 2fr 7fr 3fr; align-items: start; }
          .case-stack { flex-direction: column; align-items: flex-end; }

          .credentials-grid { grid-template-columns: 5fr 7fr; }
          .contact-grid { grid-template-columns: 7fr 5fr; }
          .contact-links { justify-content: flex-end; }

          .footer { flex-direction: row; justify-content: space-between; align-items: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .site * { transition: none !important; animation: none !important; }
        }
      `}</style>

      {/* ---------------- HEADER ---------------- */}
      <header className="header">
        <div className="header-inner">
          <a href="#top" className="logo">
            <span className="logo-badge">{PROFILE.initials}</span>
            <span className="logo-name">{PROFILE.name}</span>
          </a>

          <nav className="nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="availability">
            <span className="availability-dot" />
            <span className="availability-text">{PROFILE.availability}</span>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="wrap">
        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <Reveal>
            <p className="eyebrow">
              VOL. 04 — {PROFILE.role.toUpperCase()}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">{PROFILE.name}</h1>
          </Reveal>

          <div className="hero-grid">
            <Reveal delay={140}>
              <p className="hero-tagline">{PROFILE.tagline}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="hero-actions">
                <a href={`mailto:${PROFILE.email}`} className="btn-link">
                  Start a correspondence <ArrowUpRight size={15} />
                </a>
                <a href="#case-files" className="btn-link">
                  Read the case files <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- LEDGER ---------------- */}
        <Reveal>
          <section className="ledger">
            {LEDGER.map((item) => (
              <div key={item.label} className="ledger-item">
                <div className="ledger-value">{item.value}</div>
                <div className="ledger-label">{item.label}</div>
              </div>
            ))}
          </section>
        </Reveal>

        {/* ---------------- DISPATCH ---------------- */}
        <section id="dispatch" className="block">
          <Reveal>
            <SectionLabel index="§ 01" title="Dispatch" />
          </Reveal>
          <div className="dispatch-grid">
            <Reveal delay={80}>
              <div className="dispatch-photo">
                <span>
                  <Image src={profile} alt="Ranjith P N" />
                </span>
              </div>
              <p className="dispatch-location">{PROFILE.location}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="dispatch-text">
                <p>
                  I&apos;m a software engineer who cares as much about the seam
                  between systems as the interface a person actually touches. My
                  work sits at that intersection — reliable backends, and the
                  small interaction details that make software feel considered
                  rather than assembled.
                </p>
                <p>
                  Before engineering, I spent two years as a technical writer,
                  which is probably why I still write far too many comments and
                  README files. Outside of work I run a small newsletter on
                  developer tools and spend most weekends rebuilding something
                  in my home lab that was already working fine.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- FIELD NOTES ---------------- */}
        <section id="field-notes" className="block">
          <Reveal>
            <SectionLabel index="§ 02" title="Field Notes" />
          </Reveal>
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <Reveal key={group.category} delay={i * 80}>
                <h3 className="skill-heading">{group.category}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item} className="skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <div className="interests-row">
              <span className="interests-label">Currently exploring</span>
              {INTERESTS.map((item) => (
                <span key={item} className="interest-tag">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------------- CASE FILES ---------------- */}
        <section id="case-files" className="block">
          <Reveal>
            <SectionLabel index="§ 03" title="Case Files" />
          </Reveal>
          <div className="case-list">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <a href={p.link} className="case-item">
                  <div>
                    <div className="case-fig-label">{p.fig}</div>
                    <div className="case-fig-period">{p.period}</div>
                  </div>
                  <div>
                    <h3 className="case-title">
                      {p.title}
                      <ArrowUpRight size={18} className="case-title-icon" />
                    </h3>
                    <p className="case-desc">{p.description}</p>
                  </div>
                  <div className="case-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="stack-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- BYLINES ---------------- */}
        <section id="bylines" className="block">
          <Reveal>
            <SectionLabel index="§ 04" title="Bylines" />
          </Reveal>
          <div className="timeline">
            <div className="timeline-rail" />
            <div className="timeline-list">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.role + e.org} delay={i * 100}>
                  <div className="timeline-item">
                    <span className="timeline-dot" />
                    <div className="timeline-period">{e.period}</div>
                    <h3 className="timeline-role">
                      {e.role} <span className="timeline-org">— {e.org}</span>
                    </h3>
                    <p className="timeline-desc">{e.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CREDENTIALS ---------------- */}
        <section id="credentials" className="block">
          <Reveal>
            <SectionLabel index="§ 05" title="Credentials" />
          </Reveal>
          <div className="credentials-grid">
            <Reveal delay={80}>
              <h3 className="skill-heading">Education</h3>
              <div className="edu-period">{EDUCATION.period}</div>
              <h4 className="edu-degree">{EDUCATION.degree}</h4>
              <p className="edu-school">{EDUCATION.school}</p>
              <p className="edu-detail">{EDUCATION.detail}</p>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="skill-heading">Honors</h3>
              <div>
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="honor-row">
                    <h4 className="honor-title">{a.title}</h4>
                    <p className="honor-detail">{a.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CORRESPONDENCE ---------------- */}
        <section id="correspondence" className="block">
          <Reveal>
            <SectionLabel index="§ 06" title="Correspondence" />
          </Reveal>
          <div className="contact-grid">
            <Reveal delay={80}>
              <h3 className="contact-heading">
                Let&apos;s build something worth writing about.
              </h3>
              <a href={`mailto:${PROFILE.email}`} className="contact-email">
                {PROFILE.email} <ArrowUpRight size={18} />
              </a>
              <p className="contact-meta">
                {PROFILE.phone} · {PROFILE.location}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="contact-links">
                <a href={`https://${PROFILE.github}`} className="contact-link">
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={`https://${PROFILE.linkedin}`}
                  className="contact-link"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a href={`mailto:${PROFILE.email}`} className="contact-link">
                  <Mail size={16} /> Email
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="footer">
          <p className="footer-text">
            Typeset in Fraunces &amp; Libre Franklin. Set in the Field Notes
            mono.
          </p>
          <p className="footer-text">
            © {today.getFullYear()} {PROFILE.name} — PAGE 01 OF 01
          </p>
        </footer>
      </main>
    </div>
  );
}
