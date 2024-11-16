import { ApiProperty } from '@nestjs/swagger';
import { SocialLink } from '@prisma/client';

export class SocialEntity implements SocialLink {
  @ApiProperty()
  id: string;

  @ApiProperty()
  platform: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  user_id: string;
}
