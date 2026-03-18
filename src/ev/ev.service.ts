import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private configureService: ConfigService){}

    getDBURL(){
        return this.configureService.get<string>('MONGO_URL');
        }
}
