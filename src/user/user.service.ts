import { Injectable, Logger } from "@nestjs/common";
import { User } from "./user.model";
import { FindUsersDto } from "./dto/findUsers.args";
import { GetUsersDto } from "./dto/getUsers.args";
import { UserRepository } from "./user.repository";
import { geoDistance } from "src/utils";
import { CURRENT_POSITION } from "./constants";
import { ContextLoggerService } from "src/context-logger/context-logger.service";

@Injectable()
export class UserService {
  constructor(
    private readonly logger: ContextLoggerService,
    private readonly userRepository: UserRepository
  ) {}
  async getUsers(getUsersDto: GetUsersDto): Promise<Array<User> | null> {
    return await this.userRepository.getUsers(getUsersDto);
  }

  async findUsers(findUsersDto: FindUsersDto): Promise<Array<User> | null> {
    const users = await this.userRepository.findUsers();
    const nearByUsers = users.filter(
      ({ location }) =>
        geoDistance([location.lat, location.lng], CURRENT_POSITION) <
        findUsersDto.radius
    );
    if (!nearByUsers?.length) {
      this.logger.warn("no users found nearby");
    }
    return nearByUsers;
  }
}
