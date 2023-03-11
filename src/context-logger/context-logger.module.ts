import { Global, Logger, Module } from "@nestjs/common";

import { ContextLoggerService } from "./context-logger.service";

@Global()
@Module({
  providers: [ContextLoggerService, Logger],
  exports: [ContextLoggerService],
})
export class ContextLoggerModule {}
