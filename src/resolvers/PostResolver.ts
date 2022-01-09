import { Query, Resolver } from 'type-graphql';
import { PostType } from '../types/PostType';
import axios from 'axios';

@Resolver()
export class PostResolver {
  @Query(() => [PostType], { nullable: true })
  async posts() {
    var data = null;
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        data = res.data;
      });

    return data;
  }
}
