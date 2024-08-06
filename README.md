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
```
git clone https://github.com/YaragSerdna/ProyectoCapstone.git

cd ProyectoCapstone
```
### Instalar Dependencias
```
npm install
```

### Configurar Variables de Entorno
Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables:

```
MONGODB_URI=mongodb://localhost:27017/
APP_PORT=3000
JWT_SECRET=tu_secreto_jwt
EMAIL_USER=tu_email
EMAIL_PASS=tu_contraseña
```

### Iniciar la Aplicación
```
npm run dev
```