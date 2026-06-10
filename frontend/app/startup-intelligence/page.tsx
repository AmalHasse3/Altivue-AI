"use client";

import Sidebar from "../Sidebar";

import { motion } from "framer-motion";

export default function StartupIntelligencePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#071226] to-[#0F172A] text-white">

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
              Startup Intelligence Platform
            </p>

            <h1 className="text-6xl font-black mt-8">
              Startup Intelligence
            </h1>

            <p className="text-slate-300 text-xl mt-8 max-w-3xl leading-9">
              Monitor emerging aviation startups, autonomous systems,
              enterprise AI companies, predictive infrastructure platforms,
              and next-generation aerospace innovation.
            </p>

            {/* Startup Cards */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              {[
                {
                  name: "SkyFleet AI",
                  category: "Autonomous Aviation",
                  funding: "$420M",
                },
                {
                  name: "AeroMind Systems",
                  category: "Predictive Maintenance",
                  funding: "$210M",
                },
                {
                  name: "FlightGrid",
                  category: "Enterprise Logistics",
                  funding: "$800M",
                },
              ].map((startup, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-300"
                >

                  <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs">
                    {startup.category}
                  </p>

                  <h2 className="text-3xl font-black mt-5">
                    {startup.name}
                  </h2>

                  <p className="text-slate-400 mt-4">
                    Strategic funding monitored
                  </p>

                  <div className="mt-8 flex items-center justify-between">

                    <div>

                      <p className="text-slate-500 text-sm">
                        Funding
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        {startup.funding}
                      </h3>

                    </div>

                    <button className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-5 py-3 rounded-2xl text-black font-semibold">
                      Analyze
                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.main>

      </div>

    </div>
  );
}
