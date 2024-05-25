import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  // Import the TypeOrmModule and specify the entities to be used
  imports: [TypeOrmModule.forFeature([Product])],
  // Specify the controller(s) to be used
  controllers: [ProductsController],
  // Specify the service(s) to be used
  providers: [ProductsService],
})
export class ProductsModule {}
