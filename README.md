<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

# V-ai

## Descripción
Esta API permite gestionar usuarios y enviar mensajes, integrándose con OpenAI para proporcionar respuestas automatizadas. Los usuarios pueden crear cuentas, enviar mensajes y ver su historial de interacciones.

## Herramientas
- NodeJS (Framework NestJS)
- npm manejador de paquetes 
- PostgreSQL 

## Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
$ npm install
```

## Compilacion

```bash
# development
$ npm run start
```

## Dev
```bash
1. Instalar dependencias
2. Crear un archivo `.env` basado en el `env.template`
4. Ejecutar migración de postgres 
5. Levantar el servidor Dockert
   docker compose up -d
6. Ejecutar `npm run start:dev`
```

## Endpoints

```bash
Crear Usuario  (createUser)

  http://localhost:3000/users

Ver todos Usuarios (findAll)

  http://localhost:3000/users

Ver Usuario por ID (findByID)

(http://localhost:3000/users/:id)

Crear Usuario  (createMessage)

  http://localhost:3000/message

Historial de Mensajes (getHistory)

  http://localhost:3000/message/history?user_id=?

```