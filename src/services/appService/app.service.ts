import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppointmentEntity } from 'src/application/entities/appointment.entity';
import { CreateAppointmentDto } from 'src/core/dtos/appointment.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>,
  ) {}

  async addAppointment(dto: CreateAppointmentDto) {
    const appointment = this.appointmentRepository.create(dto);
    return await this.appointmentRepository.save(appointment);
  }
}
