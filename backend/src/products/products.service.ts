import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto/index';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  // Get all products
  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Get a product by ID
  async getOneById(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOneOrFail({
        where: { product_id: id },
      });
    } catch (err) {
      console.log('Get one product by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  // Create a new product
  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = this.productRepository.create(product);
    return await this.productRepository.save(createdProduct);
  }

  // Update a product by ID
  async update(id: number, product: UpdateProductDto): Promise<Product> {
    let foundProduct = await this.productRepository.findOneBy({
      product_id: id,
    });

    if (!foundProduct) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    // Update the found product with the new data
    foundProduct = { ...foundProduct, ...product };
    return await this.productRepository.save(foundProduct);
  }

  // Delete a product by ID
  async delete(id: number): Promise<number> {
    let foundProduct = await this.productRepository.findOneBy({
      product_id: id,
    });

    if (!foundProduct) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    // Delete the product from the database
    await this.productRepository.delete(id);
    return foundProduct.product_id;
  }
}