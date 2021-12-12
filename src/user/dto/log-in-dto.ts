import { IsString, IsEmail } from 'class-validator';

export class LogInDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
