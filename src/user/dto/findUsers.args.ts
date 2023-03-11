import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class FindUsersDto {
  @Field(() => Int)
  radius: number;
}
