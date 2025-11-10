import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrdersRepository } from './orders.repository';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  create(createOrderDto: CreateOrderDto): Order {
    // OrderItemDto and Product have the same structure, so they are compatible
    return this.ordersRepository.create({
      ...createOrderDto,
      items: createOrderDto.items as Product[],
    });
  }

  findAll(): Order[] {
    return this.ordersRepository.findAll();
  }

  findOne(id: string): Order {
    const order = this.ordersRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Order {
    const updatedOrder = this.ordersRepository.update(id, updateOrderDto);
    if (!updatedOrder) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return updatedOrder;
  }

  remove(id: string): void {
    const deleted = this.ordersRepository.remove(id);
    if (!deleted) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
  }
}
