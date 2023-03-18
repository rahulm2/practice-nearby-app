import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { geoDistance } from "src/utils";
import { CURRENT_POSITION } from "./constants";
import { ContextLoggerService } from "src/context-logger/context-logger.service";
import fetch from "cross-fetch";

@Injectable()
export class UserService {
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
  constructor(private readonly logger: ContextLoggerService) {}

  private async execute(): Promise<any> {
    console.log(process.env.HASURA_SECRET_KEY);
    const fetchResponse = await fetch("http://hasura:8080/v1/graphql", {
      method: "POST",
      headers: { "x-hasura-admin-secret": process.env.HASURA_SECRET_KEY },
      body: JSON.stringify({
        query: this.GET_USER,
      }),
    });
    return (await fetchResponse.json()) as unknown as Array<any>;
  }

  async findUsers(findUsersDto: {
    radius: number;
  }): Promise<Array<User> | null> {
    const users = await this.execute();
    console.log({ users: users.errors });
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
