import { Injectable, Logger, LoggerService, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT })
export class ContextLoggerService implements LoggerService {
  private context: string;
  constructor(private readonly logger: Logger) {}

  setContext(context: string): void {
    this.context = context;
  }

  log(message: string, data?: unknown): void {
    this.logger.log({ message, data }, this.context);
  }

  info(message: string, data?: unknown): void {
    this.logger.log({ message, data }, this.context);
  }

  debug(message: string, data?: unknown): void {
    this.logger.debug({ message, data }, this.context);
  }

  error(message: string, stack?: string, data?: unknown): void {
    this.logger.error({ message, data }, stack, this.context);
  }

  warn(message: string, data?: unknown): void {
    this.logger.warn({ message, data }, this.context);
  }

  verbose(message: string, data?: unknown): void {
    this.logger.verbose({ message, data }, this.context);
  }
}
