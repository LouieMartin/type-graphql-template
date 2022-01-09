import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}
