# Proyecto Capstone - Sistema de Gestión de Eventos

## Descripción:
El Sistema de Gestión de Eventos es una aplicación web que permite a los usuarios organizar y gestionar diversos tipos de eventos, como conferencias, talleres y reuniones. Los usuarios pueden crear eventos, registrarse para asistir, gestionar la lista de asistentes y recibir notificaciones de eventos.

## Tecnologías Utilizadas

- Backend: Node.js, Express.js
- Base de Datos: MongoDB, Mongoose
- Autenticación: JWT, sesiones y cookies
- Notificaciones: Nodemailer para correo electrónico
- API RESTful: Implementada para la gestión de eventos y usuarios

## Instalación y Configuración

### Prerrequisitos
Asegúrate de tener instalado Git, Node.js y MongoDB en tu máquina.

### Clonar el Repositorio
``` bash
git clone https://github.com/YaragSerdna/ProyectoCapstone.git

cd ProyectoCapstone
```
### Instalar Dependencias
``` bash
npm install
```

### Configurar Variables de Entorno
Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables:

``` js
MONGODB_URI=mongodb://localhost:27017/
APP_PORT=3000
JWT_SECRET=tu_secreto_jwt
EMAIL_USER=tu_email
EMAIL_PASS=tu_contraseña
```

### Iniciar la Aplicación
``` bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000.

## Guía de Uso
La API RESTful se puede implementar y ralizar sus pruebas mediante Postman el cual se puede descargar desde su web oficial: 
https://www.postman.com/

### Endpoints Principales
#### Autenticación
##### Registro de Usuarios
- Endpoint: 
    ``` js
    POST /api/auth/register
    ```
- Body:
    ``` json
    {
        "username": "Juan",
        "email": "juan@example.com",
        "password": "tu_contraseña"
    }
    ```

##### Inicio de Sesión
- Endpoint:
    ``` js
    POST /api/auth/login
    ```
- Body:
    ``` json
    {
        "email": "juan@example.com",
        "password": "tu_contraseña"
    }
    ```

#### Eventos
##### Crear Evento
- Endpoint: 
    ``` js
    POST /api/events
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
    ```
- Body:
    ``` json
    {
        "title": "Conferencia de Node.js",
        "description": "Una conferencia sobre Node.js",
        "date": "2024-08-15",
        "location": "Sala de Conferencias",
        "type": "conference",
        "organizer": "{id_del_usuario}",
        "capacity": 100
    }

    ```

##### Obtener Evento por ID
- Endpoint: 
    ``` js
    GET /api/events/:id
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
- Params:
    - id: ID del evento que deseas obtener.

##### Actualizar Evento
- Endpoint: 
    ``` js
    PUT /api/events/:id
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
- Body:
    ``` js
    {
        "title": "Nuevo Título del Evento",
        "description": "Nueva descripción del evento",
        "date": "2024-08-16",
        "location": "Nueva Ubicación",
        "type": "workshop",
        "capacity": 150
    }

##### Eliminar Evento
- Endpoint:
    ``` js
    DELETE /api/events/:id
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
    ```
- Params:
    - id: ID del evento que deseas eliminar.

#### Notificaciones
##### Enviar Confirmación de Registro
- Endpoint: 
    ``` js
    POST /api/notifications/confirmation/:eventId
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
    ```
- Params:
    - eventId: ID del evento para el cual enviar la confirmación.

##### Enviar Recordatorio de Evento
- Endpoint: 
    ``` js
    POST /api/notifications/reminder/:eventId
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
    ```
- Params:
    - eventId: ID del evento para el cual enviar el recordatorio.

##### Enviar Actualización de Evento
- Endpoint: 
    ``` js
    POST /api/notifications/update/:eventId
    ```
- Headers:
    ``` json
    {
        "Authorization": "Bearer {tu_token}"
    }
    ```
- Params:
    - eventId: ID del evento para el cual enviar la actualización.

##### Obtener Notificaciones de un Usuario
- Endpoint: GET /api/notifications/user
- Headers:
``` json
Copiar código
{
  "Authorization": "Bearer {tu_token}"
}
```