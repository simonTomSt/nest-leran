import { Module } from "@nestjs/common";
import { ShopController } from "./shop.controller";
import { ShopItem } from "./shop-item.entity";
import { ShopService } from "./shop.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([ShopItem])],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
