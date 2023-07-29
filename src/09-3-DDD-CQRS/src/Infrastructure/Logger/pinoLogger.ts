// pinoLogger.ts
import pino from 'pino';

export interface Logger {
    info(message: string): void;
    error(message: string): void;
}

export class PinoLogger implements Logger {
    private logger: pino.Logger;

    constructor() {
        this.logger = pino();
    }

    info(message: string): void {
        this.logger.info(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }
}
