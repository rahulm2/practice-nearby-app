import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ContextLoggerModule } from "./context-logger/context-logger.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ContextLoggerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
