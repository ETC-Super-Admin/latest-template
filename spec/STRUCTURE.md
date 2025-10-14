# Project Structure

This document outlines the current project structure after the Phase 1 refactoring. It should be kept updated as new features and files are added.

```
hero-template
├── .github
│   └── workflows
│       └── ci.yml
├── .husky
│   └── pre-commit
├── messages
├── public
├── src
│   ├── app
│   │   └── ...
│   ├── components
│   │   └── ...
│   ├── features
│   │   ├── products
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   │   └── product.json
│   │   │   ├── hooks/
│   │   │   ├── services.ts
│   │   │   └── types.ts
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── authentication/
│   │   └── counter/
│   │       └── counterSlice.ts
│   ├── lib
│   │   ├── api.ts
│   │   ├── utils.ts
│   │   └── utils.test.ts
│   ├── providers
│   │   └── ...
│   └── redux
│       ├── hooks.ts
│       └── store.ts
├── styles
├── tests
│   └── example.spec.ts
├── package.json
├── playwright.config.ts
├── vitest.config.ts
├── vitest.setup.ts
└── ... (other root config files)
```
