# EmpathyShop - Backend

Este documento describe la configuración y los pasos necesarios para configurar y ejecutar el backend de la aplicación EmpathyShop.
El backend está construido con Node.js y Express y utiliza MongoDB para el almacenamiento de datos.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Instalación

Para instalar y ejecutar el backend localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/Iglesias0714/Backend-EmpathyShop>
2. Navega al directorio del backend:
   ```bash
   cd EmpathyShop/backend
3. Instala las dependencias:
   ```bash
   npm install
4. Crea un archivo .env en la raíz del directorio del backend y agrega tu URI de MongoDB:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/empathyshop
5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
6. Frontend de la aplicación web:
  [AWM-Proyecto-Final-EmpathyShop](https://github.com/Iglesias0714/AWM-Proyecto-Final-EmpathyShop)
    
## Configuración de componentes
| Nombre del Componente | Descripción | Enlace |
|-----------------------|-------------|--------|
| `Product`             | Modelo de datos para los productos. | [Product.js](./models/Product.js) |
| `products`            | Rutas para manejar las operaciones CRUD de productos. | [products.js](./routes/products.js) |
| `server`              | Configuración del servidor Express. | [server.js](./server.js) |
| `.env`                | Archivo de variables de entorno. | [.env](./.env) |


