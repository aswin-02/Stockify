import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number; // Unique identifier for the product

  @Column({
    nullable: false,
  })
  name: string; // Name of the product

  @Column({
    nullable: false,
  })
  description: string; // Description of the product

  @Column({ 
    nullable: false,
  })
  price: string; // Price of the product

  @Column({
    type: 'text',
  })
  quantity: string; // Quantity of the product

 
}
