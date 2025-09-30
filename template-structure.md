# Hero Template Project Structure

```

```
hero-template
├── messages
│   ├── en.json
│   ├── th.json
│   └── cn.json
├── public
├── src
│   ├── app
│   │   ├── [locale]
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ui
│   │   │   └── button.tsx (shadcn generated)
│   │   ├── layout
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── icons
│   │   │   ├── index.ts
│   │   │   ├── SunFilled.tsx
│   │   │   └── MoonFilled.tsx
│   │   ├── examples
│   │   │   └── counter.tsx
│   │   ├── primitives.ts
│   │   └── theme-switch.tsx
│   ├── config
│   │   ├── fonts.ts
│   │   └── site.ts
│   ├── data
│   │   └── product.json
│   ├── hooks
│   ├── i18n
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── lib
│   │   └── utils.ts
│   ├── providers
│   │   ├── HeroProviders.tsx
│   │   └── StoreProvider.tsx
│   ├── redux
│   │   ├── features
│   │   │   └── counter
│   │   │       └── counterSlice.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── services
│   │   └── productServices.ts
│   ├── types
│   │   ├── index.ts
│   │   └── productTypes.ts
│   ├── utils
│   │   └── productUtils.ts
│   └── middleware.ts
├── styles
│   └── global.css
├── hero.ts
├── tailwind.config.ts
└── tsconfig.json
```