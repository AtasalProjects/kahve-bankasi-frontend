import { type RouteLocationNormalized } from 'vue-router'
import { type BaseGuard, GuardType } from '../base.guard'
import { type GuardResult } from '../guard-result'

abstract class CanActivateGuard implements BaseGuard {
  type: GuardType = GuardType.canActivate
  name: string = ''

  public async run(
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized
  ): Promise<GuardResult> {
    return { isValid: true, command: null }
  }
}

export default CanActivateGuard
