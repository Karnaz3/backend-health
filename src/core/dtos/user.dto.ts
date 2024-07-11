import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, IsInt } from 'class-validator';
import { SexEnum } from 'src/common/enum/event.users.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsEnum(SexEnum)
  @IsOptional()
  gender?: SexEnum;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsInt()
  @IsOptional()
  age?: number;

  @IsEnum(SexEnum)
  @IsOptional()
  gender?: SexEnum;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}

export class UserDto {
  id: string;
  fullName: string;
  age: number;
  gender: SexEnum;
  email: string;
}
