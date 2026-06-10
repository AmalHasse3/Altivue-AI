"use client";
import Sidebar from "../../Sidebar";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 900 },
  { month: "Mar", value: 1200 },
  { month: "Apr", value: 1700 },
  { month: "May", value: 2200 },
  { month: "Jun", value: 2847 },
];

export default function ExecutiveDashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#071226] to-[#0F172A] text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <aside className="w-72 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">

          <div>

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs">
              Enterprise Aviation Intelligence
            </p>

            <h1 className="text-3xl font-black mt-4">
              Altivue AI
            </h1>

            <p className="mt-2 text-slate-400 text-sm leading-6">
              Enterprise Intelligence Operating System
            </p>

          </div>

          <nav className="mt-14 space-y-3">

            <div className="bg-cyan-500 text-black px-5 py-4 rounded-2xl font-semibold">
              Executive Dashboard
            </div>

            <Link
              href="/startup-intelligence"
              className="hover:bg-white/5 hover:border-cyan-400/30 border border-transparent transition-all duration-300 px-5 py-4 rounded-2xl cursor-pointer block"
            >
              Startup Intelligence
            </Link>

            <Link
              href="/ai-analysis"
              className="hover:bg-white/5 hover:border-cyan-400/30 border border-transparent transition-all duration-300 px-5 py-4 rounded-2xl cursor-pointer block"
            >
              AI Strategic Analysis
            </Link>

            <Link
              href="/market-signals"
              className="hover:bg-white/5 hover:border-cyan-400/30 border border-transparent transition-all duration-300 px-5 py-4 rounded-2xl cursor-pointer block"
            >
              Market Signals
            </Link>

            <Link
              href="/security-operations"
              className="hover:bg-white/5 hover:border-cyan-400/30 border border-transparent transition-all duration-300 px-5 py-4 rounded-2xl cursor-pointer block"
            >
              Security Operations
            </Link>

          </nav>

          <div className="mt-auto bg-white/5 border border-white/10 rounded-2xl p-5">

            <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">
              AI System Status
            </p>

            <div className="flex items-center gap-3 mt-4">

              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

              <p className="text-sm">
                Operational
              </p>

            </div>

          </div>

        </aside>

        {/* Main */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 overflow-auto"
        >

          <div className="max-w-7xl mx-auto px-10 py-12">

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">
                Enterprise Aviation Innovation Intelligence
              </p>

              <h1 className="text-7xl font-black mt-8 leading-none">
                Altivue <span className="text-cyan-400">AI</span>
              </h1>

              <p className="text-slate-300 text-xl mt-10 max-w-3xl leading-9">
                Strategic intelligence platform for aviation autonomy,
                enterprise analytics, predictive systems, and AI-powered
                operational infrastructure.
              </p>

            </motion.div>

            {/* Header */}
            <div className="flex items-center justify-between mt-16">

              <div>

                <h2 className="text-5xl font-black">
                  Executive Analytics
                </h2>

                <p className="uppercase tracking-[0.25em] text-xs text-slate-400 mt-4">
                  Aviation Innovation Intelligence · Q2 2026
                </p>

              </div>

              <button className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-[0_0_50px_rgba(34,211,238,0.35)]">
                Generate AI Briefing
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 mt-14">

              {[
                ["Startups Tracked", "2,847", "+214 this quarter"],
                ["Avg Strategic Fit", "94/100", "AI confidence high"],
                ["Funding Monitored", "$4.2B", "+38% YoY"],
                ["AI Analyses", "1,091", "Stable this week"],
              ].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-300"
                >

                  <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">
                    {item[0]}
                  </p>

                  <h3 className="text-5xl font-black mt-5">
                    {item[1]}
                  </h3>

                  <p className="text-cyan-400 mt-5 text-sm">
                    {item[2]}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* Chart */}
            <div className="mt-14 bg-white/5 border border-white/10 rounded-[32px] p-10">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                    Startup Growth Intelligence
                  </p>

                  <h3 className="text-4xl font-black mt-4">
                    Aviation Startup Expansion
                  </h3>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-3 rounded-2xl text-sm">
                  Live Market Data
                </div>

              </div>

              <div className="h-[320px] mt-10">

                <ResponsiveContainer width="100%" height="100%">

                  <AreaChart data={data}>

                    <defs>

                      <linearGradient
                        id="color"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#22d3ee"
                          stopOpacity={0.8}
                        />

                        <stop
                          offset="100%"
                          stopColor="#22d3ee"
                          stopOpacity={0}
                        />

                      </linearGradient>

                    </defs>

                    <XAxis
                      dataKey="month"
                      stroke="#94A3B8"
                    />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#22d3ee"
                      fill="url(#color)"
                      strokeWidth={4}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* AI Terminal */}
            <div className="mt-14 bg-black/40 border border-cyan-500/20 rounded-[32px] p-8 font-mono">

              <p className="text-cyan-400 text-sm">
                ALTIVUE AI TERMINAL
              </p>

              <div className="mt-6 space-y-4 text-sm">

                <p className="text-green-400">
                  ✓ Aviation autonomy growth detected
                </p>

                <p className="text-cyan-400">
                  ✓ AI predictive confidence: 94.2%
                </p>

                <p className="text-yellow-400">
                  → Monitoring enterprise logistics startups...
                </p>

                <p className="text-slate-400 animate-pulse">
                  Initializing next-gen intelligence models...
                </p>

              </div>

            </div>

          </div>

        </motion.main>

      </div>

    </div>
  );
}

