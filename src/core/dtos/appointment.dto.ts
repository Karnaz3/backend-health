import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { PartsEnum } from 'src/common/enum/parts.enum';
import { AppointmentStatusEnum } from 'src/common/enum/report.status.enum';
import { DoctorDto } from './doctor.dto';
import { UserDto } from './user.dto';

export class CreateAppointmentDto {
  @IsEnum(PartsEnum)
  @IsOptional()
  part?: PartsEnum;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsEnum(AppointmentStatusEnum)
  @IsOptional()
  status?: AppointmentStatusEnum;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  doctorId: string;
}

export class UpdateAppointmentDto {
  @IsEnum(PartsEnum)
  @IsOptional()
  part?: PartsEnum;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  date?: Date;

  @IsEnum(AppointmentStatusEnum)
  @IsOptional()
  status?: AppointmentStatusEnum;

  @IsOptional()
  userId?: string;

  @IsOptional()
  doctorId?: string;
}

export class AppointmentDto {
  id: string;
  part: PartsEnum;
  description: string;
  date: Date;
  status: AppointmentStatusEnum;
  user: UserDto;
  doctor: DoctorDto;
}
