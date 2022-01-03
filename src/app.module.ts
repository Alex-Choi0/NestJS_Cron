// src/app.module.ts
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule.forRoot()], // ScheduleModule를 사용하기 위해 Import
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
