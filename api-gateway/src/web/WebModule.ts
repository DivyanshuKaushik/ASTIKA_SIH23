import { Module } from '@nestjs/common';
import { CoreModule } from 'src/integration/CoreModule';
import { AuthController } from './AuthController';

@Module({
  imports: [CoreModule],
  controllers: [AuthController],
  providers: [],
})
export class WebModule {}
