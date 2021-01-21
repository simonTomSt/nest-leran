import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.modulte';
import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';

@Module({
  imports: [TypeOrmCoreModule.forRoot(), BasketModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
