# MS-IAM

Microservicio para el manejo de usuarios y activos

## Instalaciones requeridas

- NodeJS (NVM)
  https://github.com/coreybutler/nvm-windows

- NestJS
  npm i -g @nestjs/cli

- Docker (docker-desktop o terminal)
  https://docs.docker.com/desktop/install/windows-install/

- MongoDB Compass
  https://www.mongodb.com/products/tools/compass

## Instalar el proyecto

- Instalar dependencias necesarias para el funcionamiento
  npm install

- Generar docker con Base de datos MongoDB
  docker-compose up -d

- Crear archivo de variables de entorno
  Crear en la raiz del proyecto un archivo .env

Especificar las siguientes variables

MONGODB_URI=mongodb://root:toor@localhost:27017/

MONGODB_DATABASE=ms-iam

guardar el archivo.

## Iniciar el proyecto

Para iniciar el proyecto debemos usar

npm run start:dev

nest generate resource http/machine/machine --flat
