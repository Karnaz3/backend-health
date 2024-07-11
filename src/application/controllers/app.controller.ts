import { Controller, Post } from '@nestjs/common';
import { CreateAppointmentDto } from 'src/core/dtos/appointment.dto';
import { AppService } from '../../services/appService/app.service';
import { CoreApiResponse } from '../api/core-api-response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-appointment')
  async createAppointment(dto: CreateAppointmentDto) {
    console.log(dto);
    return CoreApiResponse.success(await this.appService.addAppointment(dto));
  }
}
