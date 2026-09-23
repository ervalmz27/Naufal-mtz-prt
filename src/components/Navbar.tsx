import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, HERO_DATA } from '../data/portfolio'
import { playUiClick } from '../utils/audio'

interface NavbarProps {
  soundEnabled: boolean
  onToggleSound: () => void
}

export default function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('overview')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map(link => link.id)
      const scrollPosition = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    playUiClick(soundEnabled)
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-capsule bg-[#0c101a]/85 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'glass-capsule bg-[#0c101a]/60 border-white/5 backdrop-blur-md'
        }`}
      >
        {/* Brand Avatar / Badge */}
        <button
          onClick={() => scrollTo('overview')}
          className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full hover:bg-white/5 transition-colors group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/40 p-0.5 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
            <img
              src="/projects/profile.png"
              alt="Naufal Mumtaz"
              className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback to stylized monogram if profile image fails
                (e.target as HTMLElement).style.display = 'none'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 bg-[#0d1322]">
              NM
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1.5">
              Naufal Mumtaz
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Backend & OSINT</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          {/* Audio Feedback Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Disable UI sound' : 'Enable UI sound'}
            className="p-2 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>

          {/* Quick Contact CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              playUiClick(soundEnabled)
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 p-4 rounded-2xl glass-card bg-[#0c101a]/95 border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                    activeSection === link.id
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"></span>
                  )}
                </button>
              ))}

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                <span className="text-xs text-slate-400">Status: Available</span>
                <a
                  href={`mailto:${HERO_DATA.email}`}
                  className="text-xs font-mono text-cyan-400 hover:underline"
                >
                  {HERO_DATA.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
