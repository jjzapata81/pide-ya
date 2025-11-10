import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsRepository {
  products: Product[] = [
    {
      id: "1",
      name: 'Ceviche de chicharron',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/ceviche.webp',
      description: 'Delicioso ceviche de chicharron ahumado',
      price: 35000,
    },
    {
      id: "2",
      name: 'Cazuela de frijoles',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/Frijoles-Colombianos.webp',
      description: 'Cazuela de frijoles con carne y vegetales',
      price: 45000,
    },
    {
      id: "3",
      name: 'Hamburguesa',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/hamburguesa.jpg',
      description: 'Hamburguesa con queso, lechuga, tomate y cebolla',
      price: 40000,
    },
    {
      id: "4",
      name: 'Pasta bolognesa',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/pasta.webp',
      description: 'Pasta bolognesa con carne y vegetales',
      price: 55000,
    },
    {
      id: "5",
      name: 'Perro caliente',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/perro-caliente.webp',
      description: 'Perro caliente con queso, lechuga, tomate y cebolla',
      price: 45000,
    },
    {
      id: "6",
      name: 'Pizza hawaiiana',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/pizza.jpg',
      description: 'Pizza hawaiiana con piña y queso',
      price: 32000,
    },
    {
      id: "7",
      name: 'Pollo apanado',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/pollo.jpg',
      description: 'Pollo apanado con cebolla y queso',
      price: 48000,
    },
    {
      id: "8",
      name: 'Sancocho colombiano ',
      url: 'https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/sancocho.jpeg',
      description: 'Sancocho de res, cerdo, pollo o trifásico',
      price: 50000,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }
}
