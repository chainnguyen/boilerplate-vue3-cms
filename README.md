# Boilerplate Vue3 CMS

## Technologies
Project is created with:
* Node version: >= 14.18
* Vite version: 4.0.0
* VueJS version: 3.2.45
* TypeScript version: 4.9.3
* Ant design Vue version: 1.6.2
* Lodash es version: 4.17.15
* Moment version: 2.28.0

## Setup
```
yarn | npm install
```

## Create a global <code>.env.{development|staging|production}</code> file from .env.example
<code>.env.development</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=https://localhost:8080/dev
```

<code>.env.staging</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=https://localhost:8080/stag
```

<code>.env.production</code>
```
VITE_ROUTER_BASE=/
VITE_AXIOS_BASE_URL=https://localhost:8080/prod
```

### Compiles and hot-reloads for development
```
yarn dev | npm run dev
```

### Compiles and build each of environments
```
yarn build:development | npm run build:development
yarn build:staging | npm run build:staging
yarn build:production | npm run build:production
```

### Lints and fixes files
```
yarn lint | npm run lint
```

## Commit guide and changelog

See more [COMMIT_GUIDE.md](COMMIT_GUIDE.md) and [CHANGELOG.md](CHANGELOG.md).

## License
Copyright by [Chain Nguyễn](https://chainnguyen.github.io/chain-curriculum-vitae/).
