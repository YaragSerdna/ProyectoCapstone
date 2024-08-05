# INTRODUCCIÓN A APIs RESTful

## Intrdución a REST ful

API RESTful

- Estilo arquitectonico se centra en los recursos.

REST: Maneja principios

- Interfaz uniforme: se requiere una estructura coherente y estandarizada. Tomando en consideracion los metodos HTTP y el tipado (forma) de la URI.
-  Sin estado (stateless): El servidor no mantien informacion sobre el estado del cliente entre solicitudes.
- Caché (Cacheabilidad): Las respuestas (sobre todo las m'as utilizadas o comunes) pueden implementarse en almacenamiento de caché y asi liberar al servidor de tareas repetitivas.
- Cliente-Servidor: El cliente maneja la interfaz de usuario (Front End), mientras el servidor maneja la parte relacionada a la base de datosy la logica de negocio.
- Sistema de capas:  Una API REST puede contener diferentes capas (servidores de seguridad, servidores de proxy, balanceadores de cargas).
- Codigo bajo demanda (opcional): El servidor puede proporcionar codigo ejecutable al cliente.

Métodos HTTP:
- GET: Se utiliza para obtener un recurso del servidor. Ejemplo, obtener el perfil de un usuario `GET /users/1234`
- POST: Crear nuevos recursos apartir del envio de datos al servidor. `POST /usuarios`.
- PUT: Se utiliza para actualizar un recurso o crear un recurso en caso de que no exista. `PUT /usuario/1234`.
DELETE: Se implementa para elmininar un recurso. `DELETE /usuarios/1234`.
- PATCH: Permite actualizar parcialmente la información de un recurso. `PATCH /usuarios/1234`.

## DISEÑO DE API RESTful

### ORGANIZACIÖN DE DIRECTORIOS Y ARCHIVOS (ARQUITECTURA DE LA APP)
- controller
- models
- views
- routes
- middlewares
- config
- utils
- Archivo principal (app.js o server.js)