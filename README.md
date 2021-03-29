# Boilerplate 2021 edition
Tire toi une bûche! vl'a ti mon petit boilerplate.  

## Summary
- [Getting Started](#getting-started)
- [Unit Testing](#unit-testing)
- [Cypress](#cypress)
- [CircleCI](#circleci)

## Getting started
This boilerplate contains:
- React
- React-Router
- Redux
- Redux-Saga
- SASS
- Jest and Testing-library (Unit Tests)
- Cypress (End-to-End Test)
- And others salty things (Husky, Eslint...)
### Installation
Install your dependencies
```bash
$ yarn install
```

### Launch your development
First off, you can delete the useless components and styles. It's just a skeleton with the strict basis in order to build a React Application with Redux and Redux Saga.   
You can begin to develop with webpack and Hot Reload.
```bash
$ yarn dev
```
You can see your website on [http://localhost:9000](http://localhost:9000)

### Put your application in production
```bash
$ yarn build
```

## Unit Testing
You want to test your components, no problem, you can create a file with this nomenclature `${nameComponent}.test.tsx` and launch this command:
```bash
$ yarn test:watch
```
You component will be also tested for `a11y`

## Cypress
You can cover your application with tests E2E, you may find all the necessary in the folder `cypress`.
```bash
$ yarn cypress
```

## Circle CI
With Circle CI, your project will be monitored directly when you will push your code if you have an account.

### To be continued...
