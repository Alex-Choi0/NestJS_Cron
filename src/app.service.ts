// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  // 데코레이터 @Cron을 이용하여 일정시간마다 서비스가 실행되도록 한다.
  // '* * * * * *'인자는 매초마다 실행할 것을 말한다.
  @Cron('* * * * * *')
  getHello() {
    console.log('Hello : ', new Date());
  }
}
