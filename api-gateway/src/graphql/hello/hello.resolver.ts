import { Resolver, Query } from '@nestjs/graphql';
import { Hello } from './hello.schema';

@Resolver(() => Hello)
export class HelloResolver {
  @Query(() => Hello)
  whoAreWe(): Hello {
    return { message: 'SIH KE' };
  }
}
