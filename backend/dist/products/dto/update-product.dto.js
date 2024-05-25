"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const index_1 = require("./index");
/**
 * Data transfer object for updating a product.
 * Extends the `CreateProductDto` class with partial properties.
 */
class UpdateProductDto extends (0, swagger_1.PartialType)(index_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map