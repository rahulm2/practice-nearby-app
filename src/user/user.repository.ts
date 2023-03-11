import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { PrismaService } from "src/prisma/prisma.service";
import { GetUsersDto } from "./dto/getUsers.args";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(getUsersDto: GetUsersDto): Promise<Array<User> | null> {
    return await this.prisma.user.findMany({
      skip: getUsersDto.offset,
      take: getUsersDto.limit,
      // include: {
      //   userTracking: true,
      // },
    });
  }

  async findUsers(): Promise<Array<User> | null> {
    const dbUsers = await this.prisma.user.findMany({
      include: {
        userTracking: true,
      },
    });

    return dbUsers.map(({ id, firstName, lastName, gender, userTracking }) => ({
      id,
      firstName,
      lastName,
      gender,
      location: { lat: userTracking.lat, lng: userTracking.lng },
    }));
  }
}
