/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
 import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaGraphqlNeonDbService extends PrismaClient implements OnModuleInit, OnModuleDestroy
 {
   
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
 }
