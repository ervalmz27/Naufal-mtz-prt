export interface NavLink {
  id: string
  label: string
  href: string
}

export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  architecture?: string
  metrics?: string
  highlights?: string[]
  tech: string[]
  category: 'security' | 'enterprise' | 'mobile' | 'platform'
  categoryLabel: string
  image?: string
  demo?: string
  github?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'Backend Architecture' | 'Security & OSINT' | 'Databases & Cloud' | 'Frontend & Mobile'
  icon: string
  color?: string
  featured?: boolean
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  location?: string
  type?: string
  description: string
  keyAchievements: string[]
  tags: string[]
}

export interface StatItem {
  value: string
  label: string
  subtext?: string
}
