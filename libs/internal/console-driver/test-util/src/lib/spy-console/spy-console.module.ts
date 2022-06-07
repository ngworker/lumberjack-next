import { NgModule, Optional, SkipSelf } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { lumberjackConsoleToken } from '@ngworker/lumberjack/console-driver';

import { SpyConsole } from './spy-console.service';

@NgModule({
  providers: [
    {
      deps: [[new Optional(), new SkipSelf(), SpyConsole]],
      provide: lumberjackConsoleToken,
      useFactory: (maybeExistingInstance: SpyConsole | null): SpyConsole => maybeExistingInstance || new SpyConsole(),
    },
  ],
})
export class SpyConsoleModule {}
