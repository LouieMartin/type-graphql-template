import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class PostType {
  @Field(() => ID)
  userId!: number;

  @Field(() => ID)
  id!: number;

  @Field()
  title!: string;

  @Field()
  body!: string;
}
