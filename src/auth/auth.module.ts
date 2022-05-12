import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [
    JwtStrategy,
    {
      provide: 'AUTH0_ISSUER_URL',
      useFactory: () => process.env.AUTH0_ISSUER_URL,
    },
    {
      provide: 'AUTH0_AUDIENCE',
      useFactory: () => process.env.AUTH0_AUDIENCE,
    },
  ],

  exports: [PassportModule],
})
export class AuthModule {}
