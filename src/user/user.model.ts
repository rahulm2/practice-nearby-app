import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserTracking } from "./userTracking.model";

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field((type) => UserTracking, { nullable: true })
  location?: UserTracking;
}
