import { Query, Resolver } from 'type-graphql';
import { ApolloError } from 'apollo-server-errors';
import { UserType } from '../types/UserType';
import axios from 'axios';

@Resolver()
export class UserResolver {
  @Query(() => [UserType])
  async users() {
    var data: UserType[] | null = null;
    var error: string | null = null;
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
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
