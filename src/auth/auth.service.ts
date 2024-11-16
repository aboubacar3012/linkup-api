//src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async login(authDto: AuthDto): Promise<{ accessToken: string }> {
    const { email, password } = authDto;

    // Step 1: Fetch a user with the given email
    const authProvider = await this.prisma.authProvider.findFirst({
      where: { email: email },
    });

    // If no user is found, throw an error
    if (!authProvider) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      password,
      authProvider.password,
    );

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: authProvider.user_id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // add login history
    await this.prisma.loginHistory.create({
      data: {
        provider_name: 'email',
        user_id: user.id,
      },
    });

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async signup(authDto: AuthDto) {
    try {
      const hashedPassword = await bcrypt.hash(
        authDto.password,
        roundsOfHashing,
      );

      authDto.password = hashedPassword;
      const createdAuthProvider = await this.prisma.authProvider.create({
        data: { ...authDto, provider_name: 'email' },
      });

      const createdUser = await this.prisma.user.create({
        data: {
          email: authDto.email,
          auth_providers: {
            connect: { id: createdAuthProvider.id },
          },
        },
      });

      if (!createdUser) {
        throw new Error('An error occurred while creating the user');
      }

      return this.login(authDto);
    } catch (e) {
      console.log(e);
    }

    return `This action returns all auth`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }
  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
