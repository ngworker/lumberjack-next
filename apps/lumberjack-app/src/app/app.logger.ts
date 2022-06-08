import { Injectable } from '@angular/core';

import { ScopedLumberjackLogger } from '@ngworker/lumberjack';

@Injectable({
  providedIn: 'root',
})
export class AppLogger extends ScopedLumberjackLogger {
  scope = 'Forest App';

  forestOnFire = this.createCriticalLogger('The forest is on fire!').build();

  helloForest = this.createInfoLogger('Hello, Forest!').build();
}
