import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        auth_providers: true,
        login_histories: true,
        social_links: true,
      },
    });
  }

  findOne(id: string) {
    try {
      return this.prisma.user.findUnique({
        where: { id },
        include: {
          auth_providers: true,
          login_histories: true,
          social_links: true,
        },
      });
    } catch (e) {
      return e;
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
