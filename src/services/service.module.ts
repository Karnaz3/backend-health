import { Module } from '@nestjs/common';
import { AppService } from './appService/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEntity } from 'src/application/entities/appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentEntity])],
  providers: [AppService],
  exports: [AppService],
})
export class ServiceModule {}
