import {
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  Min,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { OrderItemDto } from './order-item.dto';
import { OrderStatus } from './create-order.dto';

export class UpdateOrderDto {
  @ApiPropertyOptional({
    description: 'Teléfono del usuario',
    example: '+1234567890',
  })
  @IsString()
  @IsOptional()
  userPhone?: string;

  @ApiPropertyOptional({
    description: 'Dirección de entrega',
    example: '123 Main St, City, Country',
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({
    description: 'Lista de productos en la orden',
    type: [OrderItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @IsOptional()
  items?: OrderItemDto[];

  @ApiPropertyOptional({
    description: 'Total a pagar',
    example: 999.99,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  totalPayment?: number;

  @ApiPropertyOptional({
    description: 'Estado de la orden',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
