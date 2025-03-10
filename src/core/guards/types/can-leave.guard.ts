/* eslint-disable @typescript-eslint/no-unused-vars */
import { type RouteLocationNormalized } from 'vue-router';
import { type BaseGuard, GuardType } from '../base.guard';
import { type GuardResult } from '../guard-result';

class CanLeaveGuard implements BaseGuard {
  type: GuardType = GuardType.canLeave;
  name: string = '';

  public async run(
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized
  ): Promise<GuardResult> {
    return { isValid: true, command: null };
  }
}

export default CanLeaveGuard;
