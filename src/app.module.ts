import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanModule } from './latihan/latihan.module';

@Module({
  imports: [LatihanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
