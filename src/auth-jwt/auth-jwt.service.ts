/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserJWT, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
    constructor(
        @InjectModel(UserJWT.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ){}

    async signup(email:string, password: string){
        const hash = await bcrypt.hash(password, 10);
        console.log("hash20",hash);
        const newUser = new  this.userModel({ email, password: hash });
        console.log("newUser20",newUser);
       return newUser.save();
    }

    async login(email: string, password: string){
        const user = await this .userModel.findOne({ email });
        if(!user) return null;
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return null;
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload)
        } 
    }
}
