import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('Database connected onModuleInit');
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`Database disconnected due to app shutdown Signal ${signal}`);
  }

  getStatus() {
    return this.isConnected
      ? 'Databse id connected'
      : 'Database is disconnected';
  }
}
