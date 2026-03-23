/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth-jwt')
export class AuthJwtController {
    constructor(private authJwtService: AuthJwtService){}

    @Post('signup')
    signup(@Body() body: {email:string, password:string}){
        return this.authJwtService.signup(body.email, body.password);
    }

    @Post('login')
    login(@Body() body : {email:string, password:string}){
        return this.authJwtService.login(body.email, body.password);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getprofile(@Request() req){
        return req.user;
    }
}
