import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloResolver } from './hello/hello.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
  ],
  providers: [HelloResolver],
})
export class GraphqlModule {}
