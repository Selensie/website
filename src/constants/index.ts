export const SITE_CONFIG = {
  name: 'Selensie',
  description: 'Privacy-first, sovereign-by-design technology ecosystem',
  url: 'https://selensie.com',
  social: {
    twitter: '@selensie',
    github: 'https://github.com/selensie',
    linkedin: 'https://linkedin.com/company/selensie',
  },
} as const

export const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Waitlist', href: '#waitlist' },
] as const

export const STATS = [
  { value: 100, suffix: '%', label: 'Open Source' },
  { value: 0, suffix: '', label: 'Data Collected' },
  { value: 256, suffix: '-bit', label: 'Encryption' },
  { value: 99.99, suffix: '%', label: 'Uptime' },
] as const

export const FEATURES = [
  {
    id: 'privacy',
    title: 'Privacy by Design',
    description: 'Zero telemetry, zero tracking, zero compromises',
  },
  {
    id: 'sovereign',
    title: 'Digital Sovereignty',
    description: 'Your data, your rules, your control',
  },
  {
    id: 'open',
    title: 'Open Source',
    description: 'Transparent, auditable, community-driven',
  },
] as const