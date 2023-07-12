[Retour](../README.md)

# Server
## Technologies
- Node ^16.20.0
- Mongoose
- Mogodb
- Express
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

## Commandes
### Développement
```bash
yarn dev
```

### Production
```bash
yarn start
```

### Compilation .ts vers .js
```bash
yarn compile
```

### Compilation .ts vers .js en mode Watch
```bash
yarn compile:watch
```

### Tests:
```bash
# Tous les tests
yarn test

# Tests typescript
yarn test:ts

# Tests JS
yarn test:js

# Tous les tests en mode watch
yarn test:watch

# Coverage des tests
yarn coverage
```

### Docker:
```bash
# Développement
yarn docker:dev

# Production
yarn docker:prod

# Tests
yarn docker:test
```

### Linting:
```bash
# ESLint
yarn lint

# Erreurs ESLint
yarn lint:fix

# Prettier
yarn prettier

# Prettier erreurs
yarn prettier:fix
```

### Fixtures
```shell
yarn seed
```

### Création d'un utilisateur

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
- docs (swagger) (http://localhost:3000/v1/docs) - Seulement en mode développement

## Message d'erreur
### Exemple
```json
{
  "code": 404,
  "message": "Not found"
}
```

## Logger
```javascript
import logger from 'src/config/logger';

logger.error('message'); // Niveau 0
logger.warn('message'); // Niveau 1
logger.info('message'); // Niveau 2
logger.http('message'); // Niveau 3
logger.verbose('message'); // Niveau 4
logger.debug('message'); // Niveau 5
```

## Tri
```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```

## Pagination
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
