import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    description: 'ID único del producto',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Laptop',
  })
  name: string;

  @ApiProperty({
    description: 'URL del producto',
    example: 'https://example.com/product1',
  })
  url: string;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'High-performance laptop',
  })
  description: string;

  @ApiProperty({
    description: 'Precio del producto',
    example: 999.99,
    minimum: 0,
  })
  price: number;
}
