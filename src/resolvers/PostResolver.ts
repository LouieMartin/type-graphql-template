import { Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';
import { PostType } from '../types/PostType';
import axios from 'axios';

@Resolver()
export class PostResolver {
  @Query(() => [PostType])
  async posts() {
    var data: PostType[] | null = null;
    var error: string | null = null;
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        error = err.toString();
      });

    if (error) {
      throw new ApolloError('An error occured', error);
    }

    return data;
  }
}
