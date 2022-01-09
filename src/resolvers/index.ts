import { buildSchema } from 'type-graphql';
import { PostResolver } from './PostResolver';
import { UserResolver } from './UserResolver';

export const createSchema = () =>
  buildSchema({
    resolvers: [PostResolver, UserResolver],
  });
