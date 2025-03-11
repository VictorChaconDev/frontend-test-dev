📱 Vue Mobile Store

Este proyecto es una aplicación web desarrollada con Vue.js y Vite, que permite ver una lista de dispositivos móviles, filtrarlos y ver sus detalles. También incluye un sistema de carrito de compras.

🚀 Instalación y Configuración

1️⃣ Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

Node.js (versión 16 o superior)

npm o yarn

2️⃣ Clonar el Repositorio

git clone https://github.com/VictorChaconDev/frontend-test-dev
cd my-project

3️⃣ Instalar Dependencias

npm install

🎯 Scripts Disponibles

🔹 Iniciar en Modo Desarrollo

npm run start

Esto iniciará la aplicación en http://localhost:5173/ (o el puerto definido en Vite).

🔹 Compilar para Producción

npm run build

Esto generará la carpeta dist/ con los archivos optimizados para producción.

🔹 Ejecutar Tests

npm run test

🔹 Revisar Código con ESLint

npm run lint

Si quieres corregir errores automáticamente:

npm run lint -- --fix

📌 Estructura del Proyecto

📂 src
 ├── 📂 components  # Componentes reutilizables
 ├── 📂 views       # Páginas principales (PLP, PDP)
 ├── 📂 router      # Configuración de Vue Router
 ├── 📂 stores      # Estado global con Pinia (carrito de compras)
 ├── 📂 assets      # Imágenes y estilos globales
 ├── main.js       # Punto de entrada de la aplicación
 ├── App.vue       # Componente raíz

🛠️ Tecnologías Utilizadas

Vue.js 3 con Composition API

Vite para un desarrollo rápido

Tailwind CSS para estilos

Pinia para la gestión del estado global (carrito de compras)

Axios para hacer peticiones a la API

💡 Notas Adicionales

El proyecto incluye almacenamiento en localStorage para caché de productos.

Se usa Vue Router para la navegación entre páginas.

Los productos y detalles se obtienen de la API: https://itx-frontend-test.onrender.com/api
