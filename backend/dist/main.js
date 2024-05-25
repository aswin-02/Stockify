"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({ disableErrorMessages: false }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Products Demo API')
        .setDescription('A REST API using Nestjs to create CRUD operations on products table')
        .setVersion('1.0')
        .addTag('products')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.API_PORT || 5000);
}
bootstrap();
//# sourceMappingURL=main.js.map