export class LumberjackHttpDriverError extends Error {
  constructor(message: string = 'LumberjackHttpDriverError') {
    super(message);

    // LumberjackHttpDriverError instanceof Error === true
    Object.setPrototypeOf(this, new.target.prototype);

    // Error name
    this.name = 'LumberjackHttpDriverError';

    // Non-standard V8 function for maintaining a stack trace
    const ErrorWithCaptureStackTrace = Error as unknown as Error & {
      // eslint-disable-next-line @typescript-eslint/ban-types
      captureStackTrace?: (error: Error, constructor: Function) => void;
    };
    ErrorWithCaptureStackTrace.captureStackTrace?.(this, this.constructor);
  }
}
