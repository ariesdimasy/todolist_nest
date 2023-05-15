import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('foobar')
  getFooBar(): object {
    const foo = this.appService.getFoo();
    const bar = this.appService.getBar();

    return {
      fooBar: foo + bar,
    };
  }
}
