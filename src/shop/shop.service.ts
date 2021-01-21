import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShopItem } from "src/interfaces/shop";
import { Repository } from "typeorm";
import { ShopItem as ShopEntity } from "./shop-item.entity";

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopItemRepository: Repository<ShopEntity>
  ) {}
  async getProducts(): Promise<ShopItem[]> {
    return await this.shopItemRepository.find();
    // return [
    //   { name: "Pickles", description: "Nice pickles", price: 12 },
    //   {
    //     name: "Better Pickles",
    //     description: "Nice better pickles",
    //     price: 1221,
    //   },
    // ];
  }
  async hasProduct(name: string): Promise<boolean> {
    return (await this.getProducts()).some((item) => item.name === name);
  }

  async getPriceOfProduct(name: string): Promise<number> {
    return (await this.getProducts()).find((item) => item.name === name).price;
  }
}
