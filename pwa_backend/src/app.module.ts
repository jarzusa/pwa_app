import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cloudfarmers',
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
