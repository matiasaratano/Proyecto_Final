# Gestión de Presencialidad: BDToficina

## Visión General del Sistema

**Descripción de la Aplicación:**  
La aplicación es un sistema de gestión de reservas que permite a los usuarios realizar, confirmar y revisar reservas. Incluye funcionalidades para la gestión de usuarios, listas de espera y generación de reportes.

**Arquitectura del Sistema:**  
La aplicación sigue una arquitectura cliente-servidor. El backend está desarrollado con Node.js y Express, mientras que el frontend utiliza React. La base de datos es manejada con Sequelize y MySQL.

## Tecnologías Utilizadas

- Node.js
- Express
- React
- Sequelize
- MySQL
- Firebase
- GitHub

## Configuración del Entorno de Desarrollo

**Requisitos del Sistema:**

- **Hardware:** Procesador de al menos 2 GHz, 4 GB de RAM, 10 GB de espacio en disco.
- **Software:** Node.js (versión 14 o superior), npm (versión 6 o superior), MySQL, Firebase CLI.

**Instalación y Configuración del Entorno:**

1. Clonar el repositorio del proyecto:

   ```bash
   git clone https://github.com/matiasaratano/Proyecto_Final.git
   ```

2. Instalar las dependencias del backend y frontend utilizando `npm install`:

   ```bash
   cd Proyecto_Final
   npm install
   cd client
   npm install
   ```

3. Configurar las variables de entorno en el archivo `.env` (ver ejemplo en `API/.env`).

4. Iniciar el servidor de desarrollo con `npm start`:
   ```bash
   cd ..
   npm start
   ```

**Dependencias:**  
Todas las dependencias del proyecto están listadas en los archivos `package.json` en las carpetas raíz y `API`.

## Estructura del Proyecto

**Organización de Directorios:**

- `API/`: Contiene el backend de la aplicación.
- `API/connection/`: Configuración de la conexión a la base de datos.
- `API/controllers/`: Controladores que manejan las solicitudes y respuestas del servidor.
- `API/helpers/`: Funciones auxiliares y mensajes de error.
- `API/middleware/`: Middleware para la autenticación y autorización.
- `API/models/`: Definiciones de los modelos de la base de datos.
- `API/routes/`: Definición de las rutas de la API.

- `components/`: Componentes reutilizables del frontend.
- `screens/`: Pantallas principales de la aplicación.
- `services/`: Servicios que manejan la lógica de negocio y la comunicación con el backend.
- `styles/`: Archivos de estilos CSS.
- `assets/`: Recursos estáticos como imágenes y fuentes.

**Principales Módulos y Componentes:**

- `App.js`: Archivo principal de la aplicación.
- `firebase.js`: Configuración de Firebase.
- `notificationHelper.js`: Helper para manejar notificaciones.
- `API/controllers/`: Controladores para manejar diferentes entidades como usuarios, reservas y listas de espera.
- `API/models/`: Modelos de datos como User, Reserva, ListaEspera.
- `API/routes/`: Definición de rutas para diferentes endpoints de la API.

## Descripción del Código

**Modelos:**

- `User.js`: Define el modelo del usuario con atributos como `fullName`, `email`, `userPassword`.
- `Reserva.js`: Define el modelo de la reserva con atributos como `fecha`, `presente`.
- `ListaEspera.js`: Define el modelo de la lista de espera con atributos como `fecha`.
- `UserXLista.js`: Define la relación entre usuarios y listas de espera.

**Controladores:**

- `ListaEsperaController.js`: Maneja las operaciones CRUD para la lista de espera.
- `ReportController.js`: Maneja las operaciones CRUD para los reportes.
- `ReservaController.js`: Maneja las operaciones CRUD para las reservas.
- `UserController.js`: Maneja las operaciones CRUD para los usuarios.
- `UserXListaController.js`: Maneja las operaciones CRUD para la relación entre usuarios y listas de espera.

**Rutas:**

- `ListaEsperaRoutes.js`: Define las rutas relacionadas con las listas de espera.
- `ReportRoutes.js`: Define las rutas relacionadas con los reportes.
- `ReservaRoutes.js`: Define las rutas relacionadas con las reservas.
- `UserRoutes.js`: Define las rutas relacionadas con los usuarios.
- `UserXListaRoutes.js`: Define las rutas relacionadas con la relación entre usuarios y listas de espera.

**Validaciones:**
Las validaciones se implementan en los controladores y modelos utilizando paquetes como `express-validator`.

**Middleware:**

- `Auth.js`: Middleware para manejar la autenticación y autorización de usuarios.

## Guía de Uso

Para utilizar la aplicación, sigue estos pasos:

1. Regístrate como usuario en la aplicación.
2. Inicia sesión con tus credenciales.
3. Realiza una reserva seleccionando la fecha y hora deseada.
4. Revisa el estado de tus reservas en la sección correspondiente.
5. Si es necesario, únete a la lista de espera.
6. Genera y revisa reportes según sea necesario.

## Contacto

Para soporte o preguntas, por favor contacta a alguno de los desarrolladores:

- Kevin Mercs [kevin.mercs.kam@gmail.com](mailto:kevin.mercs.kam@gmail.com).
- Matias Aratano [matiasaratano@gmail.com](mailto:matiasaratano@gmail.com).
- Juan Sosa [juan.sosav17@gmail.com](mailto:juan.sosav17@gmail.com).
- Nicolas Fernandez [smandes@gmail.com](mailto:smandes@gmail.com).
- Ezequiel Venuti [ezequiel.venuti@hotmail.com](mailto:ezequiel.venuti@hotmail.com).
