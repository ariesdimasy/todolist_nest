import { Controller, Get } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {
  constructor(private latihanService: LatihanService) {}

  @Get()
  getLatihan() {
    return this.latihanService.getLatihan();
  }

  @Get('detail')
  getLatihanDetail() {
    return this.latihanService.getDetailLatihan();
  }

  @Get('object')
  getLatihanObject() {
    const latihan2 = new LatihanService();
    return latihan2.getLatihan();
  }
}
