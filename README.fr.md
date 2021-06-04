# CarFleet front end v0.2.0

Voici la partie frontend de l'application Carfleet.

## Prérequis

- Nodejs avec npm -> <https://nodejs.org/en/download>
- Yarn de façon globale -> `npm install --global yarn`

## Installation

Lancer `yarn install`

## Pousser sur un serveur de production

Une fois que vous avez accès à votre serveur, faites ces tâches dans cet ordre.

1. Installer les prérequis
1. Lancer `yarn install`.
1. Lancer `yarn build`.
1. Déplacer manuellement le dossier _dist_ sur votre serveur.

## Build

Lancer `yarn build` pour construire le projet de production. Les artefacts de construction seront stockés dans le répertoire `dist`.

## Utilisation

### Entreprise

- Entreprises -> <https://youtu.be/Uj-ytaJhz1I>
- Détail d'une entreprise -> <https://youtu.be/YVXg963OmCQ>

### Utilisateurs

- [Utilisateurs](https://youtu.be/ceh57pPFyTw)
- [Créer un nouvel utilisateur](https://youtu.be/UiAH7_0JF0Q)
- [Modifier un utilisateur](https://youtu.be/efMSJDp7acA)

## Documentation

Lancer `yarn generate:doc` pour générer la documentation dans le dossier `documentation`

La commande `yarn generate:doc:serve` démarre un serveur sur le port 51001 et ouvre la documentation dans le navigateur par défaut une fois la génération terminée.

_La documentation n'est pas prise en compte par git._

## Serveur de développement

Lancer `yarn start:dev` pour un serveur de développement. Naviguez sur `http://localhost:4200/`. L’application se recharge automatiquement si vous modifiez l’un des fichiers sources.

### Serveur de production

Lancer `yarn start:dev` pour un serveur de développement.

Naviguez sur `http://localhost:4200/`.

## Tests

_Il n’y a que des tests de base de l’application front-end._

### Tests unitaires

Lancer `yarn test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io).

### Tests bout-à-bout

Lancer `yarn e2e` pour exécuter les tests bout-à-bout via [Protractor](http://www.protractortest.org/).

### Régler les vulnarabilités des dépendances

Utiliser la commande `yarn-audit-fix` pour régler les vulnérabilités des dépendances.

Si cela ne fonctionne pas, veuillez vous référer à cette [page](https://stackoverflow.com/a/60878037)(https://stackoverflow.com/a/60878037) et régler les manuellement si nécessaire.
