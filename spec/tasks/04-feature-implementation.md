# 04: Core Feature Implementation

Tasks for building the core e-commerce features.

### 4.1: Shopping Cart State

- [ ] Install Zustand: `bun add zustand`.
- [ ] Create the cart store file at `src/features/cart/store.ts`.
- [ ] Define the cart state (`items`) and core actions (`addItem`, `removeItem`, `updateItemQuantity`) in the Zustand store.
- [ ] Create a `useCart` hook for easy access to the store.
- [ ] Integrate the `useCart` hook into a `ProductCard` component (to add items) and the `Navbar` (to display item count).

### 4.2: Authentication

- [ ] Choose and install an authentication provider: **Clerk** (`@clerk/nextjs`) or **NextAuth.js** (`next-auth`).
- [ ] Configure the provider with environment variables.
- [ ] Wrap the application in the provider's context.
- [ ] Create basic `LoginForm` and `RegisterForm` components in `src/features/authentication/components`.
- [ ] Implement protected routes using Next.js middleware.

### 4.3: Payment Gateway

- [ ] Install Stripe's libraries: `bun add @stripe/react-stripe-js @stripe/stripe-js`.
- [ ] Create a placeholder `PaymentForm` component in `src/features/checkout/components`.
- [ ] Create a placeholder `processPayment` function in `src/features/checkout/services.ts`.
