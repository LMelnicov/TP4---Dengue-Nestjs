## Diferencias entre la versión en Node.js y la versión migrada a NestJS
### 1. Estructura del proyecto
Node.js: El proyecto original en Node.js y Express tenía una estructura más sencilla y monolítica, con todos los controladores, rutas y lógica de negocio en archivos individuales.
NestJS: En la versión migrada a NestJS, el proyecto está organizado de manera modular. Cada recurso (por ejemplo, pacientes) tiene su propio módulo, controlador, servicio y DTO (Data Transfer Object). Esto mejora la escalabilidad y la mantenibilidad.
### 2. Controladores y rutas
Node.js: En Node.js, las rutas se definían manualmente en el archivo app.js utilizando Express.
NestJS: En NestJS, se usan controladores con decoradores (@Get(), @Post(), etc.) que definen las rutas de manera más estructurada y declarativa.
### 3. Servicios
Node.js: En la versión original, la lógica de negocio estaba directamente en los controladores, lo que hacía más difícil probar y mantener el código.
NestJS: En la versión migrada, la lógica de negocio se maneja a través de servicios, que se inyectan en los controladores. Esto hace que el código sea más modular, reutilizable y fácil de probar.
### 4. Pruebas
En la versión de NestJS se promueve el uso de pruebas unitarias mediante Jest.
## Conclusión
La migración de Node.js a NestJS mejora la estructura y escalabilidad de la aplicación. NestJS aprovecha las ventajas de TypeScript, la inyección de dependencias y un sistema modular que facilita la extensión de la aplicación en el futuro.
