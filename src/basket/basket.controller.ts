import {
  getBasketProductsResponse,
  RemoveProductFromBasket,
} from "./../interfaces/basket";
import { ResponseDto } from "./../dto/response.dto";
import { AddProductDto } from "../dto/add-product.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from "@nestjs/common";
import { BasketService } from "./basket.service";

@Controller("basket")
export class BasketController {
  constructor(@Inject(BasketService) private basketService: BasketService) {}
  @Get("/")
  getBasketProducts(): getBasketProductsResponse {
    return this.basketService.getProducts();
  }
  @Post("/")
  addProductToBasket(@Body() item: AddProductDto): ResponseDto {
    return this.basketService.addProduct(item);
  }
  @Delete("/:index")
  deleteProductFromBasket(
    @Param("index") index: string
  ): RemoveProductFromBasket {
    return this.basketService.deleteProduct(Number(index));
  }
  @Get("/total")
  async getTotalPrice(): Promise<number> {
    return await this.basketService.getTotalPrice();
  }
}
