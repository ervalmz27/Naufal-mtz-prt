import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/portfolio'

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-10 opacity-20"></div>
      <div className="glow-orb-cyan bottom-10 right-10 opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>[ CAREER CHRONOLOGY ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-emerald">Journey & Impact</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A proven track record of shipping enterprise software, security platforms, and multi-tenant architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Year Pill (Absolute on Desktop, relative on Mobile) */}
              <div className="sm:absolute sm:-left-[172px] sm:top-1 sm:text-right sm:w-28 mb-2 sm:mb-0">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-[#0c101c] border border-white/10 text-xs font-mono font-semibold text-cyan-400">
                  {item.period}
                </span>
                {item.type && (
                  <div className="text-[11px] text-slate-500 font-mono mt-1 hidden sm:block">
                    {item.type}
                  </div>
                )}
              </div>

              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:scale-125 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_#10b981] transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5"></div>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400">
                    {item.company}
                  </span>
                </div>

                {item.location && (
                  <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 mb-6">
                  {item.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 mt-1 select-none">▹</span>
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
