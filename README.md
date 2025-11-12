Shopping Cart

Proyecto de carrito de compras online desarrollado con React + Vite.

- Descripción

Este proyecto permite a los usuarios navegar por una lista de productos, añadirlos a un carrito, ver el resumen del carrito, modificar cantidades y eliminar productos. Es un excelente punto de partida para una tienda online básica o un módulo de e-commerce más completo.

- Tecnologías usadas

React

Vite

JavaScript (ES6+)

HTML / CSS

ESLint (configuración básica)

(Posible extensión: almacenamiento en localStorage o backend para persistencia)

- Instalación y ejecución

Clona este repositorio

git clone https://github.com/edu8686/shopping-cart.git


Entra al directorio del proyecto

cd shopping-cart


Instala las dependencias

npm install


Ejecuta la aplicación en modo desarrollo

npm run dev


Abre en tu navegador la dirección que aparecerá en consola (usualmente http://localhost:3000).

- Estructura del proyecto
shopping-cart/
├─ public/
├─ src/
│  ├─ components/        ← componentes React (por ejemplo: ProductList, Cart, CartItem)
│  ├─ context/           ← (opcional) contexto para el estado del carrito
│  ├─ styles/            ← archivos CSS o módulos de estilos
│  ├─ App.jsx            ← componente raíz
│  └─ index.jsx          ← punto de entrada
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md

✅ Funcionalidades

Mostrar una lista de productos con nombre, imagen, precio, etc.

Añadir productos al carrito.

Ver el contenido del carrito: productos, cantidades, precio total.

Cambiar la cantidad de un producto en el carrito o eliminarlo.

Actualización dinámica del total conforme se modifican cantidades.

(Opcional) Persistencia del estado del carrito mediante localStorage.

(Opcional) Diseño responsive para dispositivos móviles.


📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes adaptarlo y usarlo libremente para tus fines personales o educativos.
