import { CreateProductDto, UpdateProductDto } from './dto/index';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import {
Body,
Controller,
Get,
Post,
Delete,
Param,
ParseIntPipe,
UsePipes,
ValidationPipe,
Patch,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
constructor(private productsService: ProductsService) {}

// Get all products
@Get()
async GetAll(): Promise<Product[]> {
  return this.productsService.getAll();
}

// Get a single product by ID
@Get(':id')
async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
  return this.productsService.getOneById(id);
}

// Create a new product
@Post()
async create(@Body() product: CreateProductDto): Promise<Product> {
  return this.productsService.create(product);
}

// Update a product by ID
@Patch(':id')
@UsePipes(ValidationPipe)
async update(
  @Param('id', ParseIntPipe) id: number,
  @Body() product: UpdateProductDto,
): Promise<Product> {
  return this.productsService.update(id, product);
}

// Delete a product by ID
@Delete(':id')
async delete(@Param('id') id: number): Promise<number> {
  return this.productsService.delete(id);
}
}
