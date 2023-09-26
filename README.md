# Fastify with Mongo in TypeScript

<div>This is a fastify with mongo starter project in typescript.</div>
<br/>
<div>The projects follows the plugins & controllers/models architecture. You can find two plugin in the plugins folder. The buildFastifyEnvPlugin links the .env file to the fastify server and the connectToDbPlugin connects the server to your Mongo Atlas Cluster.</div>

## Installation

```bash
$ git clone https://github.com/imevanc/fastify-typescript-mongo-starter.git
$ cd fastify-typescript-mongo-starter
$ npm run install
```

## Development

<div>You need to create a .env file in the root of your project and populate it with the following entries.</div>

```bash
NODE_ENV=
MONGO_URL=
MONGO_DB_NAME=
MONGO_COLLECTION_NAME=
HTTP_PORT=
HTTP_HOST=
```

<div>You can run the project with hot reload.</div>

```bash
$ npm run dev
```
