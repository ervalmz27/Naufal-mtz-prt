import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ABOUT_DATA } from '../data/portfolio'

export default function AboutBento() {
  const [wibTime, setWibTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setWibTime(new Intl.DateTimeFormat('en-GB', options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-orb-purple top-1/3 left-10 opacity-30"></div>
      <div className="glow-orb-cyan bottom-10 right-10 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>[ SYSTEM PROFILE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Backbone & <span className="text-gradient-cyan">Security Intel</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive look into my architecture principles, battle-tested methodology, and engineering foundation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Main Story / Philosophy (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Systems Engineering Philosophy</h3>
                  <p className="text-xs text-slate-400 font-mono">Resilient • High-Throughput • Secure</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mt-6">
                {ABOUT_DATA.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span>⚡</span> 5+ Years Active Production Coding
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span>🔒</span> Zero-Trust Security Methodology
              </span>
              <span className="flex items-center gap-1.5 text-purple-400">
                <span>🌐</span> High-Volume Ingestion Architecture
              </span>
            </div>
          </motion.div>

          {/* Card 2: Location & Real-Time WIB Clock (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Base Station</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white tracking-tight">Bandung, Indonesia</h4>
              <p className="text-xs text-slate-400 font-mono mt-1">6.9175° S, 107.6191° E (UTC+7)</p>

              {/* Live Digital Clock Widget */}
              <div className="mt-8 p-4 rounded-2xl bg-[#090d17] border border-white/5 text-center font-mono">
                <div className="text-xs text-slate-500 mb-1">LOCAL TIME (WIB)</div>
                <div className="text-3xl font-extrabold text-white tracking-wider text-gradient-cyan">
                  {wibTime || '09:48:00'}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active Working Hours
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
              <span className="text-slate-200 font-medium">Work Mode:</span> Fully equipped for Remote Global Engineering & On-site Consulting.
            </div>
          </motion.div>

          {/* Card 3: Security & OSINT Specialized Pipeline (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">OSINT & Threat Intel</h4>
                <p className="text-xs text-purple-400 font-mono">Automated Intelligence Connectors</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Specialized in constructing automated intelligence feeds and vulnerability reconnaissance workflows:
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#090d17] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">Shodan API Recon</span>
                <span className="text-emerald-400 text-[11px]">Automated IP & Ports</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#090d17] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">WhoisXML & DeHashed</span>
                <span className="text-cyan-400 text-[11px]">Domain & Breach Intel</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#090d17] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">MobSF Engine</span>
                <span className="text-purple-400 text-[11px]">APK Security Audit</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#090d17] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">OpenVPN Gateways</span>
                <span className="text-amber-400 text-[11px]">Masked Proxy Tunnels</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: 4 Core Architecture Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
          >
            <h4 className="text-lg font-bold text-white tracking-tight mb-4">Core Engineering Standards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ABOUT_DATA.coreValues.map((val, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#090d17]/80 border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <h5 className="text-xs font-bold text-white tracking-tight">{val.title}</h5>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 flex items-center justify-between text-xs font-mono text-cyan-300">
              <span>Stack: PHP 8+, Node.js, Swift UI, PostgreSQL, Docker</span>
              <span className="text-emerald-400 font-bold">100% PRODUCTION READY</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
