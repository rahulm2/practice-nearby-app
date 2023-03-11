import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("auth/login")
  async login(@Body() payload: { username: string; password: string }) {
    if (payload.username !== "admin" && payload.password !== "admin")
      throw new UnauthorizedException();
    return this.authService.login(payload);
  }
}
