import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Configuration from './Configuration';
import NestjsContext from './NestjsContext';
import { RepositoryModule } from 'src/repository/RepositoryModule';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.local' }),
    RepositoryModule,
  ],
  controllers: [],
  providers: [Configuration, NestjsContext],
  exports: [NestjsContext],
})
export class CoreModule {}
