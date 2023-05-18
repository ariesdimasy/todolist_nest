import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      success: true,
      message: 'welcome to nest js',
      data: {
        foo: 'bar',
      },
    };
  }

  getFoo(): string {
    return 'foo';
  }

  getBar(): string {
    return 'bar';
  }
}
