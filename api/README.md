# NestJS API - Products and Orders

API REST construida con NestJS que gestiona productos y órdenes usando almacenamiento en memoria (sin ORM).

## Características

- **Products**: CRUD completo para productos (id, name, url, description, price)
- **Orders**: CRUD completo para órdenes (id, userPhone, address, items, totalPayment, status)
- Almacenamiento en memoria mediante arrays
- Validación de datos con class-validator
- Sin dependencias de ORM

## Instalación

```bash
npm install
```

## Ejecución

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod
```

La aplicación se ejecuta en `http://localhost:3000`

## Endpoints

### Products

- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID
- `POST /products` - Crear un nuevo producto
- `PATCH /products/:id` - Actualizar un producto
- `DELETE /products/:id` - Eliminar un producto

### Orders

- `GET /orders` - Obtener todas las órdenes
- `GET /orders/:id` - Obtener una orden por ID
- `POST /orders` - Crear una nueva orden
- `PATCH /orders/:id` - Actualizar una orden
- `DELETE /orders/:id` - Eliminar una orden

## Estructura del Proyecto

```
src/
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── entities/
│   │   └── product.entity.ts
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
├── orders/
│   ├── dto/
│   │   ├── create-order.dto.ts
│   │   └── update-order.dto.ts
│   ├── entities/
│   │   └── order.entity.ts
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   └── orders.module.ts
├── app.module.ts
└── main.ts
```

## Ejemplos de Uso

### Crear un Producto

```bash
POST /products
Content-Type: application/json

{
  "name": "Laptop",
  "url": "https://example.com/laptop",
  "description": "High-performance laptop",
  "price": 999.99
}
```

### Crear una Orden

```bash
POST /orders
Content-Type: application/json

{
  "userPhone": "+1234567890",
  "address": "123 Main St",
  "items": [
    {
      "id": "1",
      "name": "Laptop",
      "url": "https://example.com/laptop",
      "description": "High-performance laptop",
      "price": 999.99
    }
  ],
  "totalPayment": 999.99,
  "status": "PENDING"
}
```

## Estados de Orden

- `PENDING` - Pendiente
- `CONFIRMED` - Confirmada
- `DELIVERED` - Entregada
- `CANCELLED` - Cancelada

