import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import type { Project } from '../types'
import { playUiClick } from '../utils/audio'

interface ProjectsShowcaseProps {
  soundEnabled: boolean
}

type CategoryFilter = 'all' | 'security' | 'mobile' | 'enterprise' | 'platform'

const FILTER_TABS: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All Projects (7)' },
  { key: 'security', label: 'Threat Intel & OSINT' },
  { key: 'mobile', label: 'Mobile & Gov' },
  { key: 'enterprise', label: 'Enterprise & FinTech' },
  { key: 'platform', label: 'SaaS & IoT' },
]

export default function ProjectsShowcase({ soundEnabled }: ProjectsShowcaseProps) {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('all')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter)

  const handleTabChange = (key: CategoryFilter) => {
    playUiClick(soundEnabled)
    setSelectedFilter(key)
  }

  const openProjectModal = (proj: Project) => {
    playUiClick(soundEnabled)
    setActiveModalProject(proj)
  }

  const closeModal = () => {
    playUiClick(soundEnabled)
    setActiveModalProject(null)
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-cyan top-20 right-1/4 opacity-25"></div>
      <div className="glow-orb-purple bottom-20 left-10 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <span>[ SELECTED ARCHITECTURE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Production <span className="text-gradient-cyan">Systems & Deployments</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Real-world systems engineered across cybersecurity, sovereign government initiatives, enterprise banking, and high-concurrency cloud platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-[#0b0f19] border border-white/10 self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isActive = selectedFilter === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Card Thumbnail / Preview */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#090d18] border-b border-white/10">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback to stylized dark preview card
                          (e.target as HTMLElement).style.display = 'none'
                        }}
                      />
                    ) : null}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-[#0c101c]/40 to-transparent"></div>

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                          ★ Key Architecture
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="mt-4 p-2.5 rounded-xl bg-[#070a12] border border-white/5 font-mono text-[11px] text-cyan-400">
                        {project.metrics}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Action */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openProjectModal(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-cyan-500/15 hover:text-cyan-300 hover:border-cyan-500/30 text-slate-300 border border-white/10 font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-cyan-500/30"
                  >
                    <span>View Architecture Specs</span>
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal: Project Architecture Deep-Dive */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#0c101c] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image Header */}
              {activeModalProject.image && (
                <div className="relative h-56 sm:h-64 w-full bg-[#07090e] border-b border-white/10 overflow-hidden">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-[#0c101c]/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      {activeModalProject.categoryLabel}
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Details Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                    {activeModalProject.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#070a12] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    System Architecture & Engineering
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.architecture || activeModalProject.description}
                  </p>
                </div>

                {activeModalProject.metrics && (
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{activeModalProject.metrics}</span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies & Protocols
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    Naufal Mumtaz • Production System
                  </span>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    Close Specs
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
