/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import {Request} from "express";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private configService: ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];
    console.log('Auth Header:', authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer')){
      throw new UnauthorizedException('No Token Provided');
    }
    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token);
    const jwtSecret = this.configService.get<string>('SUPABASE_JWT_SECRET');
    console.log('JWT Secret:', jwtSecret);
    if(!jwtSecret){
      throw new UnauthorizedException('JWT Secret Not Found');
    }
    try {
      const decoded = jwt.verify(token, jwtSecret);
      console.log('Decoded Token:', decoded);
      request['user'] = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid Token');
    }
   
  }
}
