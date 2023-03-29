import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    ConsoleLogger.log(1)
    return 'Hola PWA Backend';
  }
}
