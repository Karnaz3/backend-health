import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServiceModule } from 'src/services/service.module';
@Module({
  imports: [ServiceModule],
  controllers: [AppController],
  exports: [],
})
export class ControllerModule {}
