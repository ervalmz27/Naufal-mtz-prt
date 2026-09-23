import TerminalSandbox from './TerminalSandbox'

interface TerminalSectionProps {
  soundEnabled: boolean
}

export default function TerminalSection({ soundEnabled }: TerminalSectionProps) {
  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span>[ LIVE RECON SANDBOX ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient-cyan">CLI Sandbox</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Test and explore my technical profile, OSINT pipelines, and system availability through an interactive command-line interface.
          </p>
        </div>

        <TerminalSandbox soundEnabled={soundEnabled} className="max-w-3xl mx-auto" />
      </div>
    </section>
  )
}
