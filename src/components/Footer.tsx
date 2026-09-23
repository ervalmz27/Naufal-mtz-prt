import { HERO_DATA } from '../data/portfolio'
import { playUiClick } from '../utils/audio'

interface FooterProps {
  soundEnabled: boolean
}

export default function Footer({ soundEnabled }: FooterProps) {
  const scrollToTop = () => {
    playUiClick(soundEnabled)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-white/5 bg-[#05070c] relative z-10 text-xs font-mono text-slate-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400">
              NM
            </div>
            <div>
              <span className="text-slate-300 font-semibold">{HERO_DATA.name}</span>
              <span className="mx-2 text-slate-700">•</span>
              <span>© 2026 All Rights Reserved</span>
            </div>
          </div>

          {/* Center: System Telemetry */}
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SYSTEM HEALTH: NOMINAL</span>
            <span className="text-slate-700">|</span>
            <span>WIB (UTC+7)</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
