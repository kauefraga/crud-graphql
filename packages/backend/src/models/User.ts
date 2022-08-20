import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(_type => ID)
  readonly id!: string;

  @Field()
  name!: string;
}
