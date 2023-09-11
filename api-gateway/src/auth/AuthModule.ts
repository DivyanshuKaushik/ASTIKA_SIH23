// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: {
        expiresIn: '1h', // Token expiration time
      },
    }), // Register the JWT module with the provided configuration.
  ],
})
export class AuthModule {}
