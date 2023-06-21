import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/RegisterDto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkUserExists) {
      throw new HttpException('User already register', HttpStatus.FOUND);
    }

    const createUser = await this.prisma.users.create({
      data: data,
    });

    if (createUser) {
      return {
        statusCode: 200,
        message: 'Register Successfull',
      };
    }
  }
}
