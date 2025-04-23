import { Injectable } from '@nestjs/common';

let hola: 'hola';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
