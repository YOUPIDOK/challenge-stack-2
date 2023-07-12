[Retour](../README.md)

# Server
## Technologies
- Mongoose
- Docker
  - App
  - Mongodb
## Installation
### Dev
#### FIXTURES
### Prod
## Fonctionalités
## Améliorations
- Sécurisé toutes les routes sauf GET
- Améliorer la documentation en ligne

DOC EN LIGNE (swagger)
GESTION des erreurs (structures du message)

```bash
npx create-nodejs-ts-app <project-name>
```

Or

```bash
npm init nodejs-ts-app <project-name>
```

## Manual Installation
Installation des dépendances:
```bash
yarn install
```

Variables d'environment
```bash
cp .env.example .env
```

## Commands
Running locally:
```bash
yarn dev
```

Running in production:
```bash
yarn start
```

Compiling to JS from TS
```bash
yarn compile
```

Compiling to JS from TS in watch mode
```bash
yarn compile:watch
```

Testing:

```bash
# run all tests
yarn test

# run TypeScript tests
yarn test:ts

# run JS tests
yarn test:js

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Making Changes

Run `yarn dev` so you can compile Typescript(.ts) files in watch mode

```bash
yarn dev
```

Add your changes to TypeScript(.ts) files which are in the src folder. The files will be automatically compiled to JS if you are in watch mode.

Add tests for the new feature

Run `yarn test:ts` to make sure all Typescript tests pass.

```bash
yarn test:ts
```

## Error Handling

```json
{
  "code": 404,
  "message": "Not found"
}
```

## Validation
- Middleare
- Vérification de donné

## Authentication
- login
- logout
- refreshToken

### Logger
```javascript
const logger = require('<path to src>/config/logger');

logger.error('message');    // Niveau 0
logger.warn('message');     // Niveau 1
logger.info('message');     // Niveau 2
logger.http('message');     // Niveau 3
logger.verbose('message');  // Niveau 4
logger.debug('message');    // Niveau 5
```

### Sort
```json
{
  "sortBy": "name:desc",
  "limit": 5,
  "page": 2,
  "projectBy": "name:hide, role:hide"
}
```

### Pagination

```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```

