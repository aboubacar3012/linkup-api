import { ApiProperty } from '@nestjs/swagger';
import { LoginHistory } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class LoginHistoryEntity implements LoginHistory {
  @ApiProperty()
  id: string;

  @ApiProperty()
  provider_name: string;

  @ApiProperty()
  login_timestamp: Date;

  @ApiProperty()
  user: UserEntity;

  @ApiProperty()
  user_id: string;
}
