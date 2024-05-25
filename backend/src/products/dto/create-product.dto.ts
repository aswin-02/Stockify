import {
  IsNotEmpty, 
  IsString,
  MaxLength, 
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(255)
  @MinLength(1)
  @ApiProperty()
  name: string; //name of the product

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(1)
  @ApiProperty()
  description: string;//description of the product

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(1)
  @ApiProperty()
  price: string;//price of the product

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(1)
  @ApiProperty()
  quantity: string;//quantity of the product
}
