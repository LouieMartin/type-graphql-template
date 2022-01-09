import { Query, Resolver } from 'type-graphql';
import { UserType } from '../types/UserType';
import axios from 'axios';

@Resolver()
export class UserResolver {
  @Query(() => [UserType], { nullable: true })
  async users() {
    var data = null;
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        data = res.data;
      });

    return data;
  }
}
