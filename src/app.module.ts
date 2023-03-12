import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from "./user/user.module";
import { join } from "path";
import { GraphQLError } from "graphql";
import { AuthModule } from "./auth/auth.module";
import { ContextLoggerModule } from "./context-logger/context-logger.module";

@Module({
  imports: [
    AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      debug: (process.env.NODE_ENV as string) !== "production",
      context: ({ req }) => ({ headers: req.headers }),
      formatError: (error: GraphQLError) => {
        const { exception } = error?.extensions || ({} as any);
        const graphQLFormattedError = {
          message:
            exception?.response?.message ||
            error?.message ||
            "INTERNAL SERVER ERROR",
          statusCode:
            error?.message === "Unauthorized"
              ? 401
              : exception?.response?.statusCode || exception?.status || 500,
        };
        return graphQLFormattedError;
      },
    }),
    ContextLoggerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
