import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';
import { OrderStatus } from '../dto/create-order.dto';

export class Order {
  @ApiProperty({
    description: 'ID único de la orden',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Teléfono del usuario',
    example: '+1234567890',
  })
  userPhone: string;

  @ApiProperty({
    description: 'Dirección de entrega',
    example: '123 Main St, City, Country',
  })
  address: string;

  @ApiProperty({
    description: 'Lista de productos en la orden',
    type: [Product],
  })
  items: Product[];

  @ApiProperty({
    description: 'Total a pagar',
    example: 999.99,
    minimum: 0,
  })
  totalPayment: number;

  @ApiProperty({
    description: 'Estado de la orden',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  status: OrderStatus;
}
