import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { RecipeModule } from './recipe/recipe.module';

const localDb = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'cloudfarmers',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  // synchronize: true,
}

const testDb = {
  type: 'mysql',
  host: 'cloud-farmers-db.cdymaeielg5i.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'dbmasteruser',
  password: 'Cl0udf4rm3r52022Jan*',
  database: 'cloudfarmers_test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  // synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(testDb),
    UsersModule,
    AuthModule,
    ClientModule,
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
