import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsNumber,
  Min,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OrderItemDto } from './order-item.dto';

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export class CreateOrderDto {
  @ApiProperty({
    description: 'Teléfono del usuario',
    example: '+1234567890',
  })
  @IsString()
  @IsNotEmpty()
  userPhone: string;

  @ApiProperty({
    description: 'Dirección de entrega',
    example: '123 Main St, City, Country',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'Lista de productos en la orden',
    type: [OrderItemDto],
    example: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Laptop',
        url: 'https://example.com/product1',
        description: 'High-performance laptop',
        price: 999.99,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @ApiProperty({
    description: 'Total a pagar',
    example: 999.99,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  totalPayment: number;

  @ApiProperty({
    description: 'Estado de la orden',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
