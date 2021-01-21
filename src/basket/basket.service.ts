import { ShopService } from "src/shop/shop.service";
import { AddProductDto } from "../dto/add-product.dto";
import { Inject, Injectable } from "@nestjs/common";
import {
  getBasketProductsResponse,
  RemoveProductFromBasket,
} from "./../interfaces/basket";
import { ResponseDto } from "./../dto/response.dto";

@Injectable()
export class BasketService {
  private basketProducts: AddProductDto[] = [];

  constructor(@Inject(ShopService) private shopService: ShopService) {}

  getProducts(): getBasketProductsResponse {
    return this.basketProducts;
  }
  addProduct(item: AddProductDto): ResponseDto {
    this.basketProducts.push(item);
    if (
      typeof item.name !== "string" ||
      typeof item.amount !== "number" ||
      item.name === "" ||
      item.amount < 1 ||
      !this.shopService.hasProduct(item.name)
    ) {
      return {
        isSuccess: false,
        responseMessage: "Added failed",
      };
    }
    return {
      isSuccess: true,
      responseMessage: "Added",
    };
  }

  deleteProduct(index: number): RemoveProductFromBasket {
    const { length, slice } = this.basketProducts;
    if (index > length || index < 0 || length === 0) {
      return {
        isSuccess: false,
      };
    }
    slice(index, 1);
    return {
      isSuccess: true,
    };
  }

  async getTotalPrice(): Promise<number> {
    return (
      await Promise.all(
        this.basketProducts.map(
          async (item) =>
            (await this.shopService.getPriceOfProduct(item.name)) *
            item.amount *
            1.23
        )
      )
    ).reduce((prev, curr) => prev + curr, 0);
  }
}
