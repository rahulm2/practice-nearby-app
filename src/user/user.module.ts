import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ContextLoggerModule } from "src/context-logger/context-logger.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "60s" },
    }),
    ContextLoggerModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
