import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
