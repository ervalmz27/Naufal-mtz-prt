import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TERMINAL_COMMANDS } from '../data/portfolio'
import { playUiClick } from '../utils/audio'

interface TerminalSandboxProps {
  soundEnabled?: boolean
  className?: string
}

interface CommandHistoryItem {
  id: string
  command: string
  output: { text: string; color?: string }[]
  timestamp: string
}

const PRESET_COMMANDS = ['whoami', 'skills', 'osint', 'projects', 'status', 'contact']

export default function TerminalSandbox({ soundEnabled = false, className = '' }: TerminalSandboxProps) {
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'system-init --profile=naufalmumtaz',
      output: [
        { text: '[✓] System Core: Linux 6.8.0-backend-security x86_64', color: '#10b981' },
        { text: '[✓] Security Layer: Isolated OpenVPN Tunnel & Proxy Ready', color: '#06b6d4' },
        { text: '[✓] OSINT Intelligence Engine: 4 API Connectors Active', color: '#8b5cf6' },
        { text: 'Type a command or click a quick suggestion below:', color: '#94a3b8' },
      ],
      timestamp: '09:48:12',
    },
  ])

  const [inputVal, setInputVal] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history])

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase()
    if (!trimmed) return

    playUiClick(soundEnabled)

    const now = new Date().toLocaleTimeString('en-US', { hour12: false })

    if (trimmed === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    const commandResult = TERMINAL_COMMANDS[trimmed]
    let outputLines: { text: string; color?: string }[] = []

    if (commandResult) {
      if (typeof commandResult === 'string') {
        outputLines = [{ text: commandResult }]
      } else {
        outputLines = commandResult
      }
    } else {
      outputLines = [
        { text: `bash: command not found: "${trimmed}".`, color: '#ef4444' },
        { text: 'Available commands: whoami, skills, osint, projects, status, contact, clear', color: '#64748b' },
      ]
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        output: outputLines,
        timestamp: now,
      },
    ])
    setInputVal('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    }
  }

  const handleChipClick = (cmd: string) => {
    if (isTyping) return
    setIsTyping(true)
    playUiClick(soundEnabled)
    setInputVal('')

    let i = 0
    const interval = setInterval(() => {
      if (i < cmd.length) {
        setInputVal(cmd.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        executeCommand(cmd)
      }
    }, 40)
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0a0e17]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs sm:text-sm ${className}`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0f1422] border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
            naufal@security-node: ~/workspace/threat-intel
          </span>
          <span className="ml-2 text-xs font-mono text-slate-400 font-medium sm:hidden">
            naufal@node: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
            ZSH 5.9
          </span>
          <button
            onClick={() => {
              playUiClick(soundEnabled)
              setHistory([])
            }}
            title="Clear Terminal"
            className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div
        className="p-4 sm:p-5 max-h-[380px] overflow-y-auto space-y-3.5 scrollbar-thin"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 leading-relaxed">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-cyan-400 font-semibold select-none">nm@kernel:~$</span>
              <span className="text-white font-medium">{item.command}</span>
              <span className="text-[10px] text-slate-500 ml-auto select-none">{item.timestamp}</span>
            </div>
            <div className="pl-4 border-l border-white/10 space-y-1 text-slate-300">
              {item.output.map((line, idx) => (
                <div
                  key={idx}
                  style={{ color: line.color || undefined }}
                  className={!line.color ? 'text-slate-300' : ''}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Live Active Input Prompt */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-cyan-400 font-semibold select-none">nm@kernel:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isTyping ? '' : 'type a command... (e.g. whoami, osint, skills)'}
            disabled={isTyping}
            className="flex-1 bg-transparent text-white focus:outline-none caret-cyan-400 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-cyan-400 inline-block select-none"
          />
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Quick Suggestion Chips Footer */}
      <div className="px-4 py-2.5 bg-[#0b0f19] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-xs">
        <span className="text-slate-500 text-[11px] select-none whitespace-nowrap hidden sm:inline">
          Quick Run:
        </span>
        {PRESET_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleChipClick(cmd)}
            disabled={isTyping}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/15 hover:text-cyan-300 hover:border-cyan-500/30 text-slate-400 border border-white/5 transition-all text-xs font-mono whitespace-nowrap cursor-pointer active:scale-95 disabled:opacity-50"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  )
}
