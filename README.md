🛒 TechStore

Sistema web de gestión de ventas e inventario para una tienda de tecnología. Permite administrar productos, registrar ventas con su detalle (incluyendo el cálculo del IGV) y controlar el acceso mediante usuarios con distintos roles.

El proyecto está dividido en un frontend en Angular y un backend en Spring Boot conectado a una base de datos MySQL.

📌 Características
Catálogo de productos organizado por categorías (Laptops, Tablets, Celulares, Almacenamiento, Periféricos).
Control de precio y stock por producto.
Registro de ventas con detalle por producto (cantidad, precio unitario y subtotal).
Cálculo automático de subtotal, IGV (18 %) y total por venta.
Gestión de usuarios con tres roles: Administrador, Vendedor y Supervisor.

🧰 Tecnologías
Capa	Tecnología
Frontend	Angular 22, Angular Material, Angular CDK, Angular SSR, RxJS, TypeScript
Backend	Java 17, Spring Boot 4.1.2, Spring Web, Spring Data JPA, Lombok
Base de datos	MySQL 8
Herramientas	Maven, npm, Git


🗄️ Modelo de datos

La base de datos techstore contiene cinco tablas:

Tabla	Descripción
rol	Roles del sistema (ADMINISTRADOR, VENDEDOR, SUPERVISOR).
usuario	Usuarios con nombre, correo, contraseña y rol asociado (rol_id).
producto	Productos con nombre, categoría, precio y stock.
venta	Cabecera de la venta: fecha, subtotal, IGV y total.
detalle_venta	Líneas de cada venta: venta, producto, cantidad, precio unitario y subtotal.

Relaciones: un usuario pertenece a un rol; una venta tiene muchos detalle_venta; cada detalle_venta referencia a un producto.


⚙️ Requisitos previos
Java JDK 17
Maven (o el wrapper incluido en el proyecto)
Node.js y npm, en una versión compatible con Angular 22
MySQL 8


👤 Autor

Alessandro León — @alessandro271206-glitch
