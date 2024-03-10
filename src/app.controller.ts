import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private configService: ConfigService) {}

  @Get('/info')
  getInfo() {
    if (this.configService.get<string>('LOG_LEVEL') === 'debug') {
      this.logger.log('This is an info message');
    }
    return { message: 'Info logged' };
  }

  @Get('/debug')
  getDebug() {
    this.logger.debug('This is a debug message');
    return { message: 'Debug logged' };
  }

  @Get('/error')
  getError() {
    this.logger.error('This is an error message');
    return { message: 'Error logged' };
  }

  @Get('/fatal')
  getFatal() {
    this.logger.error('This is a fatal message'); // NestJS hat kein spezielles 'fatal' Level, nutze 'error'
    return { message: 'Fatal logged' };
  }
}
