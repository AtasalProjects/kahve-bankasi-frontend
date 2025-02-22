import { type RouteLocationRaw } from 'vue-router'

export interface GuardResult {
  command?: RouteLocationRaw | null
  isValid: boolean
}
