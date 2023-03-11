import { Field, ObjectType, Float } from "@nestjs/graphql";

@ObjectType()
export class UserTracking {
  @Field((type) => Float)
  lat: number;

  @Field((type) => Float)
  lng: number;
}
