/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentMongoModule } from './student-mongo/student-mongo.module';
import { UserMongoRelationshipModule } from './user-mongo-relationship/user-mongo-relationship.module';
import { EmployeeMongoRelationshipOnetooneRefrencingModule } from './employee-mongo-relationship-onetoone-refrencing/employee-mongo-relationship-onetoone-refrencing.module';
import { ProductMongoRelationshipOneToManyEmbeddingModule } from './product-mongo-relationship-one-to-many-embedding/product-mongo-relationship-one-to-many-embedding.module';
import { LibraryMongoRelationshipOneToManyRefrencingModule } from './library-mongo-relationship-one-to-many-refrencing/library-mongo-relationship-one-to-many-refrencing.module';
import { ProjectMongoRelationshipManyToManyRefrencingModule } from './project-mongo-relationship-many-to-many-refrencing/project-mongo-relationship-many-to-many-refrencing.module';
import { UserSupbasePostgreSqlModule } from './user-supbase-postgre-sql/user-supbase-postgre-sql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSupabasePostgreSqlModule } from './employee-supabase-postgre-sql/employee-supabase-postgre-sql.module';
import { AuthJwtModule } from './auth-jwt/auth-jwt.module';
import { BookCrudGraphqlModule } from './book-crud-graphql/book-crud-graphql.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaGraphqlNeonDbModule } from './prisma-graphql-neon-db/prisma-graphql-neon-db.module';
import { BookPrismaGraphqpNeondbModule } from './book-prisma-graphql-neondb/book-prisma-graphql-neondb.module';


@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule, ConfigModule.forRoot({ isGlobal: true }),MongooseModule.forRoot(process.env.MONGO_URL!),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   sortSchema: true,
    //   playground: true,
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema2.gql'),
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      url: config.get<string>('DATABASE_URL'),
      autoLoadEntities: true,
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    inject: [ConfigService],
  }), 
    StudentMongoModule, UserMongoRelationshipModule, EmployeeMongoRelationshipOnetooneRefrencingModule, ProductMongoRelationshipOneToManyEmbeddingModule, 
    LibraryMongoRelationshipOneToManyRefrencingModule, ProjectMongoRelationshipManyToManyRefrencingModule, UserSupbasePostgreSqlModule, EmployeeSupabasePostgreSqlModule, AuthJwtModule, BookCrudGraphqlModule, PrismaGraphqlNeonDbModule, BookPrismaGraphqpNeondbModule],
  controllers: [AppController, UserController, ProductController, MynameController, UserRolesController, ExceptionController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

