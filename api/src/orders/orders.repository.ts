import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { v4 as uuidv4 } from 'uuid';
import { OrderStatus } from './dto/create-order.dto';

@Injectable()
export class OrdersRepository {
  orders: Order[] = [];

  create(orderData: Omit<Order, 'id'>): Order {
    const id = Math.floor(Math.random()*10000).toString();
    const newOrder: Order = {
      ...orderData,
      status: OrderStatus.PENDING,
      id
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order | undefined {
    return this.orders.find((order) => order.userPhone === id);
  }

  update(id: string, updateData: Partial<Order>): Order | undefined {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) {
      return undefined;
    }

    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...updateData,
    };

    return this.orders[orderIndex];
  }

  remove(id: string): boolean {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) {
      return false;
    }

    this.orders.splice(orderIndex, 1);
    return true;
  }
}
