import { ApiProperty } from '@nestjs/swagger';
import { AuthProvider } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class AuthProviderEntity implements AuthProvider {
  @ApiProperty()
  id: string;

  @ApiProperty()
  provider_name: string;

  @ApiProperty()
  provider_user_id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;

  @ApiProperty()
  user: UserEntity;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;
}
