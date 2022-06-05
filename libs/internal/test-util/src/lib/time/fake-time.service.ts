import { Injectable } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LumberjackTimeService } from '@ngworker/lumberjack';

@Injectable()
export class FakeTimeService extends LumberjackTimeService {
  private now = new Date();

 override getUnixEpochTicks(): number {
    return this.now.valueOf();
  }
  setTime(fakeNow: Date): void {
    this.now = fakeNow;
  }
}
