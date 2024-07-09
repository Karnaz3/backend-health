import { Module } from '@nestjs/common';
import { AppService } from './appService/app.service';

@Module({
  imports: [],
  providers: [AppService],
  exports: [AppService],
})
export class ServiceModule {}
