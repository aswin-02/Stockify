"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAll() {
        return await this.productRepository.find();
    }
    async getOneById(id) {
        var _a;
        try {
            return await this.productRepository.findOneOrFail({
                where: { product_id: id },
            });
        }
        catch (err) {
            console.log('Get one product by id error: ', (_a = err.message) !== null && _a !== void 0 ? _a : err);
            throw new common_1.HttpException(`Product with id ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async create(product) {
        const createdProduct = this.productRepository.create(product);
        return await this.productRepository.save(createdProduct);
    }
    async update(id, product) {
        let foundProduct = await this.productRepository.findOneBy({
            product_id: id,
        });
        if (!foundProduct) {
            throw new common_1.HttpException(`Product with id ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
        }
        foundProduct = Object.assign(Object.assign({}, foundProduct), product);
        return await this.productRepository.save(foundProduct);
    }
    async delete(id) {
        let foundProduct = await this.productRepository.findOneBy({
            product_id: id,
        });
        if (!foundProduct) {
            throw new common_1.HttpException(`Product with id ${id} not found.`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.productRepository.delete(id);
        return foundProduct.product_id;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map