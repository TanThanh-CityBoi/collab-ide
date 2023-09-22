import { Inject, Injectable, ConsoleLogger, Scope } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WTLogger } from 'winston';

@Injectable({ scope: Scope.DEFAULT })
export class LoggerService extends ConsoleLogger {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WTLogger,
  ) {
    super();
  }
  error(message: any, stack?: string, context?: string) {
    this.logger.error(message, stack, context);
    super.error(message, stack, context);
  }
  warn(message: any, context?: string) {
    // TO DO
    this.logger.warn(message, context);
    super.warn(message, context);
  }

  log(message: any, context?: string) {
    // TO DO
    this.logger.info(message, context);
    super.log(message, context);
  }

  debug(message: any, context?: string) {
    // TO DO
    this.logger.debug(message, context);
    super.debug(message, context);
  }

  verbose(message: any, context?: string) {
    // TO DO
    this.logger.verbose(message, context);
    super.verbose(message, context);
  }
}
