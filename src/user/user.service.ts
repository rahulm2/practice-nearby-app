import { Injectable, Logger } from "@nestjs/common";
import { User } from "./user.model";
import { FindUsersDto } from "./dto/findUsers.args";
import { GetUsersDto } from "./dto/getUsers.args";
import { UserRepository } from "./user.repository";
import { geoDistance } from "src/utils";
import { CURRENT_POSITION } from "./constants";
import { ContextLoggerService } from "src/context-logger/context-logger.service";
import fetch from "cross-fetch";

@Injectable()
export class UserService {
  constructor(
    private readonly logger: ContextLoggerService,
    private readonly userRepository: UserRepository
  ) {}

  private readonly GET_USER = `
query GetUser{
  User {
    id
		firstName
		gender
		lastName
    UserTrackings{
      lat
      lng
    }
  }
}
`;

  async execute(): Promise<any> {
    const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
      method: "POST",
      headers: { "x-hasura-admin-secret": process.env.HASURA_SECRET_KEY },
      body: JSON.stringify({
        query: this.GET_USER,
      }),
    });
    return await (fetchResponse.json() as unknown as Array<any>);
  }
  async getUsers(getUsersDto: GetUsersDto): Promise<Array<User> | null> {
    return await this.userRepository.getUsers(getUsersDto);
  }

  async findUsers(findUsersDto: FindUsersDto): Promise<Array<User> | null> {
    const users = await this.execute();
    const nearByUsers = users.data.User.filter(
      ({ UserTrackings }) =>
        geoDistance(
          [UserTrackings[0].lat, UserTrackings[0].lng],
          CURRENT_POSITION
        ) < findUsersDto.radius
    );
    if (!nearByUsers?.length) {
      this.logger.warn("no users found nearby");
    }
    return nearByUsers;
  }
}
