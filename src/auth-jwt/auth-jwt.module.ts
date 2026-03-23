/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthJwtController } from './auth-jwt.controller';
import { AuthJwtService } from './auth-jwt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserJWT, userSchema } from './user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[MongooseModule.forFeature(
    [
      {name: UserJWT.name, schema: userSchema}
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>({
        secret: config.get<string>('MY_JWT_SECRET'),
        signOptions: {expiresIn: '1h'}
      }) 
    })
  ],
  controllers: [AuthJwtController],
  providers: [AuthJwtService, JwtStrategy]
})
export class AuthJwtModule {}
