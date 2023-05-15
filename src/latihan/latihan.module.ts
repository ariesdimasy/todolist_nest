import { Module } from '@nestjs/common';
import { LatihanController } from './latihan.controller';

@Module({
  controllers: [LatihanController]
})
export class LatihanModule {}
