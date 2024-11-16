import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { SocialEntity } from './social-link.entity';
import { AuthProviderEntity } from 'src/auth/entities/auth-provider.entity';
import { LoginHistoryEntity } from 'src/auth/entities/login-history.entity';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  date_of_birth: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  profile_picture_url: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  interests: string[];

  @ApiProperty()
  phone: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  skills: string[];

  @ApiProperty()
  social_links: SocialEntity[];

  @ApiProperty()
  auth_providers: AuthProviderEntity[];

  @ApiProperty()
  login_histories: LoginHistoryEntity[];

  @ApiProperty()
  is_verified: boolean;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  is_premium: boolean;

  @ApiProperty()
  is_profile_complete: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
