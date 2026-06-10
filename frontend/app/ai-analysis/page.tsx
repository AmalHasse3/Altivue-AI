
"use client";

import Sidebar from "../Sidebar";

import { motion } from "framer-motion";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

export default function AIAnalysisPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#071226] to-[#0F172A] text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 flex min-h-screen">

        <Sidebar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-0 overflow-auto"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

            {/* Header */}
            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">
                AI Strategic Analysis Engine
              </p>

              <h1 className="text-5xl lg:text-6xl font-black mt-8 leading-tight">
                AI Strategic Analysis
              </h1>

              <p className="text-slate-300 text-lg lg:text-xl mt-8 max-w-4xl leading-9">
                Analyze aviation autonomy, enterprise AI infrastructure,
                predictive intelligence systems, aerospace innovation,
                and operational optimization platforms.
              </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

              {[
                {
                  title: "Predictive Aviation AI",
                  score: "98%",
                  status: "High Confidence",
                },
                {
                  title: "Autonomous Flight Systems",
                  score: "94%",
                  status: "Scaling Rapidly",
                },
                {
                  title: "Enterprise Logistics AI",
                  score: "91%",
                  status: "Strategic Priority",
                },
              ].map((analysis, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-300"
                >

                  <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs">
                    AI Intelligence
                  </p>

                  <h2 className="text-3xl font-black mt-5 leading-tight">
                    {analysis.title}
                  </h2>

                  <div className="mt-8">

                    <p className="text-slate-500 text-sm">
                      Strategic Confidence
                    </p>

                    <h3 className="text-5xl font-black mt-3">
                      {analysis.score}
                    </h3>

                    <p className="text-cyan-400 mt-4">
                      {analysis.status}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Chart */}
            <div className="mt-14 bg-white/5 border border-white/10 rounded-[32px] p-6 lg:p-10">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>

                  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
                    AI Prediction Intelligence
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-black mt-4">
                    Strategic AI Confidence
                  </h3>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-3 rounded-2xl text-sm w-fit">
                  Live AI Metrics
                </div>

              </div>

              <div className="h-[320px] min-w-0 mt-10">

                <ResponsiveContainer width="100%" height="100%">

                  <AreaChart
                    data={[
                      { month: "Jan", value: 62 },
                      { month: "Feb", value: 70 },
                      { month: "Mar", value: 78 },
                      { month: "Apr", value: 84 },
                      { month: "May", value: 91 },
                      { month: "Jun", value: 98 },
                    ]}
                  >

                    <defs>

                      <linearGradient
                        id="aiGradient"
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
                      fill="url(#aiGradient)"
                      strokeWidth={4}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Terminal */}
            <div className="mt-14 bg-black/40 border border-cyan-500/20 rounded-[32px] p-8 font-mono overflow-hidden">

              <p className="text-cyan-400 text-sm">
                ALTIVUE AI ANALYSIS TERMINAL
              </p>

              <div className="mt-6 space-y-4 text-sm">

                <p className="text-green-400">
                  ✓ Enterprise AI systems synchronized
                </p>

                <p className="text-cyan-400">
                  ✓ Predictive intelligence active
                </p>

                <p className="text-yellow-400">
                  → Monitoring aerospace innovation signals...
                </p>

                <p className="text-slate-400 animate-pulse">
                  Running next-generation strategic simulations...
                </p>

              </div>

            </div>

          </div>

        </motion.main>

      </div>

    </div>
  );
}
