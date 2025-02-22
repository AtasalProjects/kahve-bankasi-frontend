import { type RouteLocationNormalized } from 'vue-router'
import { type GuardResult } from './guard-result'

export interface BaseGuard {
  type: GuardType
  name: string
  run(to: RouteLocationNormalized, from: RouteLocationNormalized): Promise<GuardResult>
}

export enum GuardType {
  canActivate,
  canLeave,
}
