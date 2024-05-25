"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConnectionConfig = void 0;
const port = parseInt(process.env.PORT) || 3306;
exports.typeormConnectionConfig = {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: port,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    timezone: 'utc',
};
//# sourceMappingURL=typeorm.config.js.map