import { Controller, Get, Inject } from '@nestjs/common';
import Context from 'src/context/Context';

@Controller('auth')
export class AuthController {
  constructor(@Inject('core') private readonly core: Context) {}

  @Get()
  getHello() {
    return this.core.useCase.hello.getHello();
  }
}
