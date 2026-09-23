import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data/portfolio'
import { playUiClick } from '../utils/audio'

interface SkillsMatrixProps {
  soundEnabled: boolean
}

const CATEGORIES = [
  'All Skills',
  'Backend Architecture',
  'Security & OSINT',
  'Databases & Cloud',
  'Frontend & Mobile',
] as const

type CategoryType = (typeof CATEGORIES)[number]

export default function SkillsMatrix({ soundEnabled }: SkillsMatrixProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All Skills')

  const filteredSkills = activeCategory === 'All Skills'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory)

  const handleCategorySelect = (cat: CategoryType) => {
    playUiClick(soundEnabled)
    setActiveCategory(cat)
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-purple top-10 right-10 opacity-25"></div>
      <div className="glow-orb-cyan bottom-10 left-10 opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>[ TECHNICAL CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering & <span className="text-gradient-purple">Tooling Stack</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Battle-tested competencies across backend microservices, threat intelligence pipelines, relational data persistence, and cross-platform native interfaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-purple-600/25 text-purple-200 border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                    : 'glass-card text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stack Highlights Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold">
              ⚡
            </div>
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">Need a custom stack audit or architecture review?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Available for backend reviews, database indexing audits, and threat model consultations.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 text-xs sm:text-sm font-medium transition-all whitespace-nowrap"
          >
            Request Technical Consultation →
          </a>
        </div>
      </div>
    </section>
  )
}
