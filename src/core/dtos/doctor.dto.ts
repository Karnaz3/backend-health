import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { PartsEnum } from 'src/common/enum/parts.enum';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(PartsEnum)
  @IsOptional()
  specialization?: PartsEnum;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class UpdateDoctorDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsEnum(PartsEnum)
  @IsOptional()
  specialization?: PartsEnum;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}

export class DoctorDto {
  id: string;
  fullName: string;
  specialization: PartsEnum;
  email: string;
}
