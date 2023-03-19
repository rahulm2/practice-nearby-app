import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ContextLoggerModule } from "./context-logger/context-logger.module";

@Module({
  imports: [AuthModule, ContextLoggerModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
