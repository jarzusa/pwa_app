import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { RecipeModule } from './recipe/recipe.module';

//mysql://dbmasteruser:Cl0udf4rm3r52022Jan*@cloud-farmers-db.cdymaeielg5i.us-east-1.rds.amazonaws.com:3306/cloudfarmers_test
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cloud-farmers-db.cdymaeielg5i.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'dbmasteruser',
      password: 'Cl0udf4rm3r52022Jan*',
      database: 'cloudfarmers_test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      // synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ClientModule,
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
