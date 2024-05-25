import { CreateProductDto, UpdateProductDto } from './dto/index';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    GetAll(): Promise<Product[]>;
    GetOne(id: number): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    update(id: number, product: UpdateProductDto): Promise<Product>;
    delete(id: number): Promise<number>;
}
