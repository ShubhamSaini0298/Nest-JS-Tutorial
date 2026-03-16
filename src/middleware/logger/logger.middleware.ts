import { Injectable, NestMiddleware } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { Request, Response, NextFunction} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} --- ${req.originalUrl}`);
    next();
  }
}
