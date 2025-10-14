# Hero E-commerce Template Structure

This file outlines a target feature-based project structure suitable for a scalable e-commerce application.

```
hero-template
├── messages
│   └── ...
├── public
│   └── ...
├── src
│   ├── app
│   │   ├── (main)
│   │   │   ├── products
│   │   │   │   ├── [slug]
│   │   │   │   │   └── page.tsx  // Product Detail Page (PDP)
│   │   │   │   └── page.tsx      // Product Listing Page (PLP)
│   │   │   ├── cart
│   │   │   │   └── page.tsx
│   │   │   └── ...
│   │   ├── checkout
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ui/                 # Generic shadcn/ui components (Button, Input, etc.)
│   │   └── layout/             # Navbar, Footer, Sidebar, etc.
│   ├── features
│   │   ├── products
│   │   │   ├── components/     # ProductCard, ProductCarousel, PriceDisplay
│   │   │   ├── hooks/          # useProducts, useProductFilters
│   │   │   ├── services.ts     # fetchProducts, getProductBySlug
│   │   │   └── types.ts        # Product, Category, Variant interfaces
│   │   ├── cart
│   │   │   ├── components/     # CartIcon, CartItem, CartSummary
│   │   │   ├── store.ts        # Zustand store for cart state management
│   │   │   └── types.ts        # Cart, CartItem interfaces
│   │   ├── checkout
│   │   │   ├── components/     # ShippingForm, PaymentForm
│   │   │   ├── services.ts     # processPayment
│   │   │   └── types.ts        # Order, Address interfaces
│   │   └── authentication
│   │       ├── components/     # LoginForm, RegisterForm, UserAvatar
│   │       └── services.ts     # login, logout
│   ├── lib
│   │   ├── api.ts              # Centralized API client
│   │   └── utils.ts            # Global utility functions
│   ├── providers/              # ThemeProvider, QueryClientProvider, etc.
│   └── ... (other root folders)
├── styles
│   └── globals.css
└── ... (root config files)
```
