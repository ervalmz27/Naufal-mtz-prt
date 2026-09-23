import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HERO_DATA } from '../data/portfolio'
import { playUiClick, playUiSuccess } from '../utils/audio'

interface ContactSectionProps {
  soundEnabled: boolean
}

export default function ContactSection({ soundEnabled }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Backend Architecture',
    message: '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email)
    playUiSuccess(soundEnabled)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playUiSuccess(soundEnabled)
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="glow-orb-cyan top-1/3 left-1/4 opacity-25"></div>
      <div className="glow-orb-purple bottom-10 right-1/4 opacity-25"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>[ INITIATE CONNECTION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Engineer <span className="text-gradient-cyan">Something Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a system to architect, a threat model to investigate, or an enterprise team looking for senior backend talent? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Email Copy Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden">
              <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider">
                Direct Communication
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Email</h3>
              <p className="text-xs text-slate-400 mt-1 mb-5">
                Click below to copy my primary engineering inbox:
              </p>

              <button
                onClick={copyEmail}
                className="w-full py-3 px-4 rounded-2xl bg-[#090d18] hover:bg-[#0f1526] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate">
                  {HERO_DATA.email}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 text-slate-400 transition-colors flex items-center gap-1.5 shrink-0 ml-2">
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span>
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                Profiles & Repositories
              </div>

              <div className="space-y-2.5">
                <a
                  href={HERO_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playUiClick(soundEnabled)}
                  className="p-3 rounded-2xl bg-[#090d18] hover:bg-[#0f1526] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-500 font-mono">@ervalmz27</div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-white transition-colors">↗</span>
                </a>

                <a
                  href={HERO_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playUiClick(soundEnabled)}
                  className="p-3 rounded-2xl bg-[#090d18] hover:bg-[#0f1526] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-500 font-mono">in/naufal-mumtaz-537a4a1bb</div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">↗</span>
                </a>

                <a
                  href={HERO_DATA.telegram}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playUiClick(soundEnabled)}
                  className="p-3 rounded-2xl bg-[#090d18] hover:bg-[#0f1526] border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.197 1.006.128.828.966z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Telegram</div>
                      <div className="text-[11px] text-slate-500 font-mono">@Slay90</div>
                    </div>
                  </div>
                  <span className="text-slate-500 group-hover:text-blue-400 transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Message or Project Brief
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Expect a response within 24 hours. Confidentiality guaranteed.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-2xl flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you! Your message has been routed to Naufal Mumtaz's primary terminal. You will hear back promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/10 focus:border-cyan-500/50 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/10 focus:border-cyan-500/50 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/10 focus:border-cyan-500/50 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Backend Architecture">Backend Microservices & Architecture</option>
                      <option value="Cyber Security / OSINT">OSINT & Cyber Threat Intelligence</option>
                      <option value="Enterprise Platform">Enterprise Web / FinTech Platform</option>
                      <option value="Mobile Engineering">Swift UI / Cross-Platform Mobile</option>
                      <option value="Senior Hiring / Role">Full-Time Senior Role / Hiring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      PROJECT SCOPE / MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your systems requirements, timeline, or engineering opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d18] border border-white/10 focus:border-cyan-500/50 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Transmit Message</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
