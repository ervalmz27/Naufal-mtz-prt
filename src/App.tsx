import { useState } from 'react'
import { useLenis } from './hooks/useLenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutBento from './components/AboutBento'
import ProjectsShowcase from './components/ProjectsShowcase'
import ExperienceTimeline from './components/ExperienceTimeline'
import SkillsMatrix from './components/SkillsMatrix'
import TerminalSection from './components/TerminalSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Initialize Lenis smooth scroll
  useLenis()

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 selection:bg-cyan-500/25 selection:text-cyan-200 relative">
      {/* Background Micro-Grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-35 pointer-events-none z-0"></div>

      {/* Floating Capsule Navbar */}
      <Navbar soundEnabled={soundEnabled} onToggleSound={toggleSound} />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero soundEnabled={soundEnabled} />
        <AboutBento />
        <ProjectsShowcase soundEnabled={soundEnabled} />
        <ExperienceTimeline />
        <SkillsMatrix soundEnabled={soundEnabled} />
        <TerminalSection soundEnabled={soundEnabled} />
        <ContactSection soundEnabled={soundEnabled} />
      </main>

      {/* Minimalist Tech Footer */}
      <Footer soundEnabled={soundEnabled} />
    </div>
  )
}
