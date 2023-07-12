[Retour](../README.md)

# Client

## Technologies

- Vue 3.3
- Vite
- Typescript

## Installation

```shell
yarn install
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
- Page de création d'une recette avec analyse des calories en direct (connexion requise)
- Connexion / Déconnexion

## Améliorations

### Fonctionnalités

- CRUD des utilisateurs
- CRUD des recettes
- CRUD des ingrédients

### Sécurité

- Utiliser le token de l'utilisateur
- Utiliser le refresh token pour recharger le token de l'utilisateur quand il n'est plus valide
- Utiliser une validation de formulaire avant envoi des requètes
- Ne pas laisser l'accès à la page login si déja connecté
- Ne pas laisser l'accès à la page création de recette si non connecté

### Ux
- Système de message flash
- Pagination des recettes
