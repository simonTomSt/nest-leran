import { AddProductDto } from "./../dto/add-product.dto";

export interface RemoveProductFromBasket {
  isSuccess: boolean;
}

export type getBasketProductsResponse = AddProductDto[];
