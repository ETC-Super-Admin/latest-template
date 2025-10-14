# 04: Core Feature Implementation

Tasks for building the core e-commerce features.

### 4.1: Shopping Cart State

- [x] Create the cart slice file at `src/features/cart/cartSlice.ts`.
- [x] Define the cart state and reducers (`addItem`, `removeItem`, etc.).
- [x] Add the cart slice to the main Redux store.
- [x] Integrate the Redux hooks (`useAppDispatch`, `useAppSelector`) into the `ProductCard` and `Navbar` components.

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
