import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> Aries Dimas !</h1>';
  }

  getFoo(): string {
    return 'foo';
  }

  getBar(): string {
    return 'bar';
  }
}
