import { ShopItem } from "src/interfaces/shop";
import { Controller, Get, Inject } from "@nestjs/common";
import { ShopService } from "./shop.service";

@Controller("shop")
export class ShopController {
  constructor(@Inject(ShopService) private shopService: ShopService) {}
  @Get("/")
  getProductList(): Promise<ShopItem[]> {
    return this.shopService.getProducts();
  }
}
