[Retour](../README.md)

# Server

## Technologies

- Mongoose
- Docker
  - App
  - Mongodb

## Installation

Installation des dépendances:

```bash
yarn install
```

Variables d'environment

```bash
cp .env.example .env
```

## Commands

### Running locally:

```bash
yarn dev
```

### Running in production:

```bash
yarn start
```

### Compiling to JS from TS

```bash
yarn compile
```

### Compiling to JS from TS in watch mode

```bash
yarn compile:watch
```

### Testing:

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

### Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

### Linting:

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

### FIXTURES

```shell
yarn seed
```

### Create User In Terminal

```shell
yarn create:user
```

## Fonctionalités

- Authentication (register / login / logout / refreshToken / forgotPassword / resetPassword)
- Authorization
- CRUD User
- CRUD Recipe
- CRUD Nutrition
- Vérification de données

## Error Handling

```json
{
  "code": 404,
  "message": "Not found"
}
```

### Logger

```javascript
import logger from 'src/config/logger';

logger.error('message'); // Niveau 0
logger.warn('message'); // Niveau 1
logger.info('message'); // Niveau 2
logger.http('message'); // Niveau 3
logger.verbose('message'); // Niveau 4
logger.debug('message'); // Niveau 5
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

### Pagination Sort

```json
{
  "sortBy": "name:desc",
  "limit": 5,
  "page": 2,
  "projectBy": "name:hide, role:hide"
}
```

## Améliorations

- Améliorer la documentation en ligne
- Ajouter des tests
- Ajouter des plus de fixtures pour le dev
- Ajouter les routes pour les admins