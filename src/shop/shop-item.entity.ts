import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShopItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({
    length: 10000,
  })
  description: string;
  @Column({
    type: "float",
    precision: 4,
    scale: 2,
  })
  price: number;
}
