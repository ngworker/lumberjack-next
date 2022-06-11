import { Injectable } from '@angular/core';

import { LumberjackConsole } from '@ngworker/lumberjack/console-driver';

/**
 * No-op console logger.
 *
 * Every method is a no-op.
 */
@Injectable()
export class NoopConsole implements LumberjackConsole {
  debug(...data: unknown[]): void;
  debug(message?: unknown, ...optionalParams: unknown[]): void;
  debug(message?: unknown, ...optionalParams: unknown[]) {
    // intentionally a no-op
  }

  error(...data: unknown[]): void;
  error(message?: unknown, ...optionalParams: unknown[]): void;
  error(message?: unknown, ...optionalParams: unknown[]) {
    // intentionally a no-op
  }

  info(...data: unknown[]): void;
  info(message?: unknown, ...optionalParams: unknown[]): void;
  info(message?: unknown, ...optionalParams: unknown[]) {
    // intentionally a no-op
  }

  trace(...data: unknown[]): void;
  trace(message?: unknown, ...optionalParams: unknown[]): void;
  trace(message?: unknown, ...optionalParams: unknown[]) {
    // intentionally a no-op
  }

  warn(...data: unknown[]): void;
  warn(message?: unknown, ...optionalParams: unknown[]): void;
  warn(message?: unknown, ...optionalParams: unknown[]) {
    // intentionally a no-op
  }
}
