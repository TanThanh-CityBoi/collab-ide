import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const customAccessLevels = {
  levels: {
    http: -1,
    error: 0,
    warn: 1,
    info: 2,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta',
  },
};

winston.addColors(customAccessLevels.colors);

const transport_error = new DailyRotateFile({
  filename: 'logs/error/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: 7,
  maxSize: '10m',
  level: 'error',
  handleExceptions: true,
});

const transport_info = new DailyRotateFile({
  filename: 'logs/app-%DATE%.log',
  zippedArchive: true,
  maxFiles: 7,
  level: 'info',
  datePattern: 'YYYY-MM-DD',
  maxSize: '10m',
  watchLog: true,
});

export default WinstonModule.forRoot({
  transports: [transport_error, transport_info],
  exitOnError: false,
});
