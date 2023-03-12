import { Logger, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";
import { ContextLoggerModule } from "src/context-logger/context-logger.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "60s" },
    }),
    ContextLoggerModule,
  ],
  providers: [UserRepository, UserService, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
