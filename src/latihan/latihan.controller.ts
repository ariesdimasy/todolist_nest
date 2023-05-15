import { Controller, Get } from '@nestjs/common';

@Controller('latihan')
export class LatihanController {
  @Get()
  getLatihan(): string {
    return 'latihan';
  }
}
