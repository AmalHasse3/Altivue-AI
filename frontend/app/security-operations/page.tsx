"use client";

import Sidebar from "../Sidebar";

import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const securityData = [
  { month: "Jan", threats: 18 },
  { month: "Feb", threats: 24 },
  { month: "Mar", threats: 31 },
  { month: "Apr", threats: 20 },
  { month: "May", threats: 14 },
  { month: "Jun", threats: 9 },
];

export default function SecurityOperationsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#071226] to-[#0F172A] text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 flex min-h-screen">

        <Sidebar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 overflow-auto"
        >

          <div className="max-w-7xl mx-auto px-10 py-12">

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">
              Enterprise Security Intelligence
            </p>

            <h1 className="text-6xl font-black mt-8">
              Security Operations
            </h1>

            <p className="text-slate-300 text-xl mt-8 max-w-4xl leading-9">
              Monitor enterprise cyber activity, predictive threat detection,
              operational anomalies, infrastructure protection,
              and aerospace security intelligence systems.
            </p>

            {/* Security Cards */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              {[
                {
                  title: "Threat Detection",
                  score: "99.2%",
                  status: "Systems Secure",
                },
                {
                  title: "Infrastructure Monitoring",
                  score: "24/7",
                  status: "Fully Operational",
                },
                {
                  title: "AI Threat Response",
                  score: "0.4s",
                  status: "Rapid Mitigation",
                },
              ].map((security, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-300"
                >

                  <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs">
                    Security Intelligence
                  </p>

                  <h2 className="text-4xl font-black mt-5">
                    {security.title}
                  </h2>

                  <div className="mt-8">

                    <h3 className="text-6xl font-black">
                      {security.score}
                    </h3>

                    <p className="text-cyan-400 mt-5 text-xl">
                      {security.status}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Chart */}
            <div className="mt-14 bg-white/5 border border-white/10 rounded-[32px] p-10">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                    Security Threat Intelligence
                  </p>

                  <h3 className="text-5xl font-black mt-4">
                    Threat Monitoring Activity
                  </h3>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-3 rounded-2xl text-sm">
                  Live Security Data
                </div>

              </div>

              <div className="h-[420px] w-full mt-12">

                <ResponsiveContainer width="100%" height="100%">

                  <BarChart data={securityData}>

                    <XAxis
                      dataKey="month"
                      stroke="#94A3B8"
                    />

                    <Tooltip />

                    <Bar
                      dataKey="threats"
                      fill="#22d3ee"
                      radius={[12, 12, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Terminal */}
            <div className="mt-14 bg-black/40 border border-cyan-500/20 rounded-[32px] p-8 font-mono">

              <p className="text-cyan-400 text-sm">
                ALTIVUE SECURITY TERMINAL
              </p>

              <div className="mt-6 space-y-4 text-sm">

                <p className="text-green-400">
                  ✓ Security infrastructure stabilized
                </p>

                <p className="text-cyan-400">
                  ✓ AI defense systems active
                </p>

                <p className="text-yellow-400">
                  → Monitoring enterprise threat patterns...
                </p>

                <p className="text-slate-400 animate-pulse">
                  Running predictive cyber defense simulations...
                </p>

              </div>

            </div>

          </div>

        </motion.main>

      </div>

    </div>
  );
}
