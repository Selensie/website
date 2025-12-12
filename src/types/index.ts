import { ComponentType } from 'react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface ComparisonItem {
  feature: string
  selensie: boolean | string
  others: boolean | string
}

export interface NavItem {
  label: string
  href: string
}