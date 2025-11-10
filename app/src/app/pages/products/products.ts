import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
    {
        "id": "07b0f34a-0e4d-4bde-81ee-20c722b2b353",
        "name": "Ceviche de chicharron",
        "url": "https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/ceviche.webp",
        "description": "Delicioso ceviche de chicharron ahumado",
        "price": 35000
    },
    {
        "id": "0211b002-6db7-4837-a6b1-222bf31f8cfe",
        "name": "Cazuela de frijoles",
        "url": "https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/Frijoles-Colombianos.webp",
        "description": "Cazuela de frijoles con carne y vegetales",
        "price": 45000
    },
    {
        "id": "11bc28ef-ba42-422e-98c3-9a5e6c9aa35a",
        "name": "Hamburguesa",
        "url": "https://jlkkpfvhavizoybkccez.supabase.co/storage/v1/object/public/menu/hamburguesa.jpg",
        "description": "Hamburguesa con queso, lechuga, tomate y cebolla",
        "price": 40000
    }
]

}
