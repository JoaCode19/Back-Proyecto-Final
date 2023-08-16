# Curso de Backend en Coderhouse - Astros

## Abstract

Este proyecto es el resultado final del curso de backend con Node.js en Coderhouse.El mismo consiste en la implementación de un backend para una plataforma de comercio electrónico utilizando Node.js y a partir de la creación de una API REST. La experiencia Astros es un E-Commerce esta pensada para funcionar como un e-showroom deportivo.

## Librerias

**Servidor:**

- express
- handlebars
- dotenv

**Autenticación y autorización:**

- passport
- cookie-parser
- jsonwebtoken

**BBDD:**

- mongoose
- mongoose-paginate-v2

**Validaciones y encriptado:**

- crypto
- bcrypt

**Documentación:**

- swagger

**Mailing:**

- nodemailer

**Testing:**

- mocha

**Otras utilidades:**

- socket.io
- nodemon
- winston
- multer
- faker

## Api Rest Documentacion

Puede acceder a la documentación de los endpoints en la ruta "/api/docs" del proyecto de Curso de Backend en Coderhouse.

## Detalles de uso

**Scripts:**

En el proyecto de Curso de Backend en Coderhouse:

- `npm start`: Inicia el servidor usando node.
- `npm run start:dev`: Inicia el servidor en modo de desarrollo utilizando nodemon vigilado los siguientes tipo de archiv js,html,handlebars,css,yaml.
- `test`: Inicia el servidor en modo test haciando uso de nodemon + mocha recursivo y cargando la variable de entorno que setea la base de datos en MONGODB_CNX_STR=mongodb://127.0.0.1:27017/test.
- `npm run start:prodwin`: Adaptacion del homonimo(sacando el win) con la herramienta cross-env para manejar introduccion de variables de entorno en windows.
- `npm run testwin`: Adaptacion del homonimo(sacando el win) con la herramienta cross-env para manejar introduccion de variables de entorno en windows.

**ENTORNO**

Para el manejo de variabales de entorno utilizamos un archivo .env ubicado en "src/config", el mismo cuenta con las siguientes variables preestablecidas y necesarias para el correcto funcionamiento:

### //config

PERSISTENCIA=mongoose
COOKIE_KEY=xxxx
MONGODB_CNX_STR=mongodb+srv://xxxxxxx@cluster0.tmp8a5p.mongodb.net/E-comerce?retryWrites=true&w=majority
PORT=xxxx
SESSION_SECRET=xxxxxx

### //email

EMAIL_USER=xxxx
EMAIL_PASS=xxxx
TEST_EMAIL_USER=xxxx
TEST_EMAIL_PASS=xxxx

## Next update

En interfaz visual: Real time products (reutilizando lo hecho con socket.io previamente para la vista actual de productos), Reestructuracion del Schema de productos y la respectiva entidad para que incluyan los campos con sus medidas y peso buscando escalabilidad y una posible integracion futura con alguna api para envios.

## Contacto

- [Instagram](https://www.instagram.com/joabidart/)
- [LinkedIn](https://www.linkedin.com/in/joaquin-bidart-33561918a/)

### Deploy

- [web](https://back-proyecto-final-production-bee0.up.railway.app/)
