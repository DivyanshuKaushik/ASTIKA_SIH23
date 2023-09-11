import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IConfiguration from 'src/base/IConfiguration';

@Injectable()
export default class Configuration implements IConfiguration {
  mongoUri: string;

  constructor(private configService: ConfigService) {
    this.mongoUri = this.configService.get<string>('MONGO_URI');
  }
}
