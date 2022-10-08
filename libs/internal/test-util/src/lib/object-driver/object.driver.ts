import { Inject, Injectable } from '@angular/core';

import { LumberjackLogDriver, LumberjackLogDriverConfig, LumberjackLogDriverLog } from '@ngworker/lumberjack';

import { objectDriverConfigToken } from './object-driver-config.token';
import { ObjectPayload } from './object.payload';
import { ObjectService } from './object.service';

/**
 * No-op log driver.
 *
 * Every logging method is a no-op.
 */
@Injectable()
export class ObjectDriver implements LumberjackLogDriver<ObjectPayload> {
  static driverIdentifier = 'ObjectDriver';

  constructor(
    @Inject(objectDriverConfigToken) readonly config: LumberjackLogDriverConfig,
    private readonly objectService: ObjectService
  ) {}

  /* istanbul ignore next */
  logCritical({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }

  logDebug({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }

  /* istanbul ignore next */
  logError({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }

  /* istanbul ignore next */
  logInfo({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }

  /* istanbul ignore next */
  logTrace({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }

  /* istanbul ignore next */
  logWarning({ log }: LumberjackLogDriverLog<ObjectPayload>): void {
    this.objectService.log(log.payload);
  }
}
