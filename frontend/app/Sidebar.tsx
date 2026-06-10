"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Bot,
  FileText,
  FileSearch,
  Globe,
  Briefcase,
  GraduationCap,
  MessageSquare,
  UserCheck,
  FolderKanban,
  LineChart,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Executive Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      name: "AI Assistant",
      href: "/ai-assistant",
      icon: Bot,
    },
    {
      name: "Resume Analyzer",
      href: "/resume-analyzer",
      icon: FileSearch,
    },
    {
      name: "ATS Resume Builder",
      href: "/ats-builder",
      icon: FileText,
    },
    {
      name: "Cover Letter Generator",
      href: "/cover-letter",
      icon: FileText,
    },
    {
      name: "LinkedIn Optimizer",
      href: "/linkedin-optimizer",
      icon: Globe,
    },
    {
      name: "Job Match Analyzer",
      href: "/job-match",
      icon: Briefcase,
    },
    {
      name: "Interview Prep",
      href: "/interview-prep",
      icon: MessageSquare,
    },
    {
      name: "Mock Interview AI",
      href: "/mock-interview",
      icon: UserCheck,
    },
    {
      name: "AI Career Coach",
      href: "/career-coach",
      icon: GraduationCap,
    },
    {
      name: "Cloud Architecture",
      href: "/cloud-architecture",
      icon: Briefcase,
    },
    {
      name: "Internship Tracker",
      href: "/internship-tracker",
      icon: Briefcase,
    },
    {
      name: "Portfolio Reviewer",
      href: "/portfolio-reviewer",
      icon: FolderKanban,
    },
    {
      name: "Startup Intelligence",
      href: "/startup-intelligence",
      icon: TrendingUp,
    },
    {
      name: "AI Strategic Analysis",
      href: "/ai-analysis",
      icon: LineChart,
    },
    {
      name: "Market Signals",
      href: "/market-signals",
      icon: TrendingUp,
    },
    {
      name: "Security Operations",
      href: "/security-operations",
      icon: Shield,
    },
  ];

  return (
    <aside className="w-80 min-w-[320px] bg-black/30 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col">
      <div>
        <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">
          Enterprise Aviation Intelligence
        </p>

        <h1 className="text-5xl font-black mt-6">
          Altivue AI
        </h1>

        <p className="mt-4 text-slate-400 text-sm">
          Enterprise Intelligence Operating System
        </p>

        <button className="w-full mt-8 px-6 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition">
          + New Chat
        </button>

        <nav className="mt-10 space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-4 rounded-2xl font-semibold transition-all ${
                  active
                    ? "bg-cyan-500 text-black shadow-lg"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10">
          <p className="text-xs uppercase text-slate-500 mb-3">
            Recent Activity
          </p>

          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-white/5">
              Resume Review
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Cover Letter Draft
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Interview Preparation
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Mock Interview Session
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Cloud Architecture Review
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Internship Tracking
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Portfolio Review
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              LinkedIn Optimization
            </div>

            <div className="p-3 rounded-xl bg-white/5">
              Job Match Analysis
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto bg-white/5 border border-white/10 rounded-3xl p-6">
        <p className="text-sm text-slate-400 uppercase">
          AI System Status
        </p>

        <div className="flex items-center gap-3 mt-4">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

          <p className="font-medium">
            Operational
          </p>
        </div>

        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[92%] bg-cyan-400"></div>
        </div>

        <p className="text-xs text-slate-500 mt-3">
          Neural systems running at optimal capacity
        </p>
      </div>
    </aside>
  );
}
