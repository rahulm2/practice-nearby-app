import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "src/auth/auth.guard";
import { FindUsersDto } from "./dto/findUsers.args";

import { GetUsersDto } from "./dto/getUsers.args";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Query(() => [User])
  async getUsers(@Args() getUsersDto: GetUsersDto): Promise<User[]> {
    return await this.userService.getUsers(getUsersDto);
  }

  @UseGuards(AuthGuard)
  @Query(() => [User])
  async findUsers(@Args() findUsersDto: FindUsersDto): Promise<User[]> {
    return await this.userService.findUsers(findUsersDto);
  }
}
