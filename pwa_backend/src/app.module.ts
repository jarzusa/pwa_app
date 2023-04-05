import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';
import { BouquetTypeRecipeModule } from './bouquet-type-recipe/bouquet-type-recipe.module';
import { ScanModule } from './scan/scan.module';
import { ProductionBandModule } from './production-band/production-band.module';
import { FinishedProductInventoryModule } from './finished-product-inventory/finished-product-inventory.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
      },
    ),
    UsersModule,
    AuthModule,
    ClientModule,
    RecipeModule,
    BouquetTypeRecipeModule,
    ScanModule,
    ProductionBandModule,
    FinishedProductInventoryModule,
    GradeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
