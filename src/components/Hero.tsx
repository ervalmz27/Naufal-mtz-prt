import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HERO_DATA, STATS_DATA } from '../data/portfolio'
import { playUiClick } from '../utils/audio'
import TerminalSandbox from './TerminalSandbox'

interface HeroProps {
  soundEnabled: boolean
}

export default function Hero({ soundEnabled }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Kinetic Typewriter Effect for Roles
  useEffect(() => {
    const currentRole = HERO_DATA.roles[roleIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, 80)
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % HERO_DATA.roles.length)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const scrollTo = (id: string) => {
    playUiClick(soundEnabled)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glow orbs (zero 3D, pure GPU-accelerated CSS) */}
      <div className="glow-orb-cyan top-16 left-1/4 -translate-x-1/2 opacity-70"></div>
      <div className="glow-orb-purple top-32 right-1/4 translate-x-1/2 opacity-60"></div>
      <div className="glow-orb-emerald bottom-10 left-1/3 opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{HERO_DATA.badge}</span>
          </div>
        </motion.div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className="text-slate-100 block">Naufal Mumtaz</span>
                <span className="text-gradient-cyan block mt-1">
                  {displayedText}
                  <span className="animate-pulse text-cyan-400 font-mono">|</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3.5"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transition-all cursor-pointer flex items-center gap-2 group active:scale-98"
              >
                <span>Explore Production Systems</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo('terminal')}
                className="px-5 py-3 rounded-xl glass-card bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border border-white/10 hover:border-cyan-500/40 font-mono text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 active:scale-98"
              >
                <span className="text-cyan-400 font-bold">$</span>
                <span>Open Terminal</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Get in Touch →
              </button>
            </motion.div>

            {/* Trust Badges / Key Clients */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-slate-500"
            >
              <span className="font-mono text-slate-400">ENGINEERED FOR:</span>
              <span className="hover:text-slate-300 transition-colors">PT. Telkom Indonesia</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-slate-300 transition-colors">Bank BSI (FinTech)</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-slate-300 transition-colors">IKN Nusantara (Gov)</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-slate-300 transition-colors">Cyber Threat Intel</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Profile Bento / Live Preview */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="p-1 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-purple-500/10 to-transparent shadow-2xl">
                <div className="rounded-[22px] bg-[#0c101c] p-6 border border-white/10 relative overflow-hidden">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none"></div>

                  <div className="relative z-10 space-y-5">
                    {/* Profile Header */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-cyan-400/40 p-0.5 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <img
                          src="/projects/profile.png"
                          alt="Naufal Mumtaz"
                          className="w-full h-full object-cover object-top rounded-xl"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">Naufal Mumtaz</h3>
                        <p className="text-xs text-cyan-400 font-mono">@ervalmz27 • Bandung, ID</p>
                        <p className="text-xs text-slate-400 mt-0.5">5+ Years Fullstack & Security</p>
                      </div>
                    </div>

                    {/* Quick System Telemetry Widget */}
                    <div className="p-3.5 rounded-xl bg-[#070a12]/80 border border-white/5 space-y-2 font-mono text-xs">
                      <div className="flex justify-between items-center text-slate-400">
                        <span>CORE STATUS</span>
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          HEALTHY (100%)
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>SECURITY LAYER</span>
                        <span className="text-cyan-400">OpenVPN / MobSF / Shodan</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-400">
                        <span>PRIMARY STACK</span>
                        <span className="text-purple-300">PHP • Node.js • Swift • SQL</span>
                      </div>
                    </div>

                    {/* Mini Terminal Preview Hook */}
                    <div className="rounded-xl bg-[#05070d] p-3 border border-white/5 font-mono text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5 text-slate-500 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/70"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500/70"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70"></span>
                        <span className="text-[10px] ml-1 text-slate-400">active-session: threat-pipeline</span>
                      </div>
                      <p className="text-slate-300">
                        <span className="text-cyan-400">naufal@osint:</span> curl -X GET /api/v1/recon/status
                      </p>
                      <p className="text-emerald-400 mt-1">
                        ↳ {"{ status: 'OK', nodes: 4, breach_scan: 'clean', uptime: '99.9%' }"}
                      </p>
                    </div>

                    {/* Quick Link Pills */}
                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={HERO_DATA.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                      <a
                        href={HERO_DATA.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={HERO_DATA.telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
                      >
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bento Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all"></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient-cyan">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1.5">{stat.label}</div>
              {stat.subtext && <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
