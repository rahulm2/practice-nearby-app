import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("user/distance")
  async getUsersByDistance(@Body() payload: { input: { radius: number } }) {
    const result = await this.userService.findUsers({
      radius: payload.input.radius,
    });
    return { result };
  }
}
