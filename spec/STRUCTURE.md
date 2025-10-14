# Project Structure

This document outlines the current project structure. It should be kept updated as new features and files are added.

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
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── contexts/
│   ├── features/
│   │   ├── products/
│   │   │   ├── data/product.json
│   │   │   ├── services.ts
│   │   │   └── types.ts
│   │   ├── cart/
│   │   │   └── cartSlice.ts
│   │   ├── checkout/
│   │   ├── authentication/
│   │   └── counter/
│   │       └── counterSlice.ts
│   ├── i18n/
│   ├── lib/
│   │   ├── api.ts
│   │   ├── utils.ts
│   │   └── utils.test.ts
│   ├── providers/
│   ├── redux/
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── productUtils.ts
├── styles/
│   └── globals.css
├── tests/
│   └── example.spec.ts
└── ... (other root config files)
```
