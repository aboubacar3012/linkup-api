import { IsNotEmpty, IsEmail } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  date_of_birth: string;

  @IsNotEmpty()
  phone: string;
}
