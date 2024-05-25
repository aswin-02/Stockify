import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Parse the PORT environment variable as a number, defaulting to 3306 if it's not set
const port: number = parseInt(<string>process.env.PORT) || 3306;

// Configuration options for the TypeORM module
export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql', // Database type
  host: process.env.MYSQL_HOST, // MySQL server host
  port: port, // MySQL server port
  username: process.env.MYSQL_USER,  
  password: process.env.MYSQL_PASSWORD,  
  database: process.env.MYSQL_DATABASE,  
  entities: ['dist/**/*.entity{.ts,.js}'], // Entity files to be included
  synchronize: true, // Automatically synchronize the database schema
  timezone: 'utc', // Set the timezone to UTC
};
