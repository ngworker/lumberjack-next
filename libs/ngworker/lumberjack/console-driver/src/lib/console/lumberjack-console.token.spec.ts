// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { resolveDependency } from '@internal/test-util';

import { lumberjackConsoleToken } from './lumberjack-console.token';

describe('lumberjackConsoleToken', () => {
  it('resolves to the console by default', () => {
    const actualConsoleLogger = resolveDependency(lumberjackConsoleToken);

    expect(actualConsoleLogger).toBe(console);
  });
});
