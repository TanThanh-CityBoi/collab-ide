import { Global, Module } from '@nestjs/common';
import { LoggerService } from './custom.logger';
import winstonLogger from './winston.logger';

@Global()
@Module({
  imports: [winstonLogger],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
