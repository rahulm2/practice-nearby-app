import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate = async (context: ExecutionContext): Promise<boolean> => {
    const gqlContext = GqlExecutionContext.create(context).getContext();

    const { authorization } = gqlContext?.headers ?? {};

    if (!authorization) {
      throw new UnauthorizedException();
    }

    const decodedUser = this.jwtService.decode(authorization) as unknown as {
      username: string;
      password: string;
    };

    if (
      decodedUser?.username === "admin" &&
      decodedUser?.password === "admin"
    ) {
      return true;
    }
    throw new UnauthorizedException();
  };
}
