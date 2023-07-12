[Retour](../README.md)

# Client

## Technologies

- Vue 3.3
- Vite
- Typescript

## Installation

Installation des dépendances:

```bash
yarn install
```

Variables d'environment

```bash
cp .env.example .env
```

### Développement

```shell
yarn dev
```

### Production

```shell
yarn build
# Déployer ensuite l'application avec un serveur Web (Apache, Nginx) ou docker
```

## Fonctionalités

- Page d'accueil
- Page de listsing des recettes avec fonction de recherche
- Page d'une recette
- Page de génération d'une recette aléatoire
- Page de création d'une recette avec analyse des calories en direct (connexion requise)
- Connexion / Déconnexion
- Sécurité des routes avec authentification
- Système de messages flash pour informer l'utilisateur

## Améliorations

### Fonctionnalités

- CRUD des utilisateurs
- CRUD des recettes
- CRUD des ingrédients

### Sécurité

- Utiliser le token de l'utilisateur
- Utiliser le refresh token pour recharger le token de l'utilisateur quand il n'est plus valide
- Utiliser une validation de formulaire avant envoi des requètes

### Ux

- Pagination des recettes
