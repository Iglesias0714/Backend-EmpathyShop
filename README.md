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

Estructura del Proyecto
El proyecto tiene la siguiente estructura de directorios:
/backend
  /models
    Product.js
  /routes
    products.js
  server.js
  .env

| Nombre del Componente | Descripción | Enlace |
|-----------------------|-------------|--------|
| `Product`             | Modelo de datos para los productos. | [Product.js](backend/models/Product.js) |
| `products`            | Rutas para manejar las operaciones CRUD de productos. | [products.js](backend/routes/products.js) |
| `server`              | Configuración del servidor Express. | [server.js](backend/server.js) |
| `.env`                | Archivo de variables de entorno. | [.env](backend/.env) |

