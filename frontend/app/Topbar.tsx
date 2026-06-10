"use client";

import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-24 border-b border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-between px-10 sticky top-0 z-50"
    >

      {/* Left */}
      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.4)]">

          <span className="text-black font-black text-2xl">
            A
          </span>

        </div>

        <div>

          <h1 className="text-3xl font-black tracking-tight text-white">
            Altivue AI
          </h1>

          <p className="text-slate-400 text-sm mt-1 tracking-wide">
            Enterprise Aviation Intelligence Platform
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* AI Status */}
        <div className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

          <p className="text-sm text-slate-300">
            Systems Operational
          </p>

        </div>

        {/* AI Mode */}
        <div className="hidden md:flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-3">

          <p className="text-cyan-400 text-sm font-semibold tracking-wide">
            AI MODE ACTIVE
          </p>

        </div>

        {/* User */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.35)]">

          <span className="text-black font-black text-xl">
            A
          </span>

        </div>

      </div>

    </motion.div>
  );
}
