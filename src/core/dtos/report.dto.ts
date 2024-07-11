import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ReportSeverityEnum } from 'src/common/enum/report-sevearity.enum';
import { UserDto } from './user.dto';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(ReportSeverityEnum)
  @IsOptional()
  severity?: ReportSeverityEnum;

  @IsNotEmpty()
  userId: string;
}

export class UpdateReportDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ReportSeverityEnum)
  @IsOptional()
  severity?: ReportSeverityEnum;

  @IsOptional()
  userId?: string;
}

export class ReportDto {
  id: string;
  title: string;
  description: string;
  severity: ReportSeverityEnum;
  user: UserDto;
}
