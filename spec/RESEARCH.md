# Research: Anatomy of a Production-Grade Next.js Project

This document summarizes research on the common stacks, structures, and practices used in modern, productive, client-side focused Next.js applications as of 2024.

---

## 1. Core Stack & Philosophy

- **Framework:** Next.js with the **App Router** is the universal standard. It enables a hybrid approach with React Server Components (RSCs) for performance and Client Components for interactivity.
- **Language:** **TypeScript** is non-negotiable for any project aiming for scalability and maintainability.
- **Styling:** **Tailwind CSS** is the dominant choice due to its utility-first nature, which pairs well with component-based architectures. It's often combined with libraries like `tailwind-variants` or `cva` for creating reusable component styles.
- **UI Components:** The trend is to use **headless UI** libraries (like Radix UI, Headless UI) as a foundation for custom component libraries. **shadcn/ui** is extremely popular as it provides pre-built, accessible components based on Radix and Tailwind that are copied directly into the project, giving developers full control.

---

## 2. Architecture & Code Structure

The most prevalent and scalable structure is **feature-based** or **modular**.

- **`src/` Directory:** Almost universally adopted to separate application code from root-level configuration files.
- **Feature-Based Grouping:** Instead of organizing by file type (e.g., all hooks in one folder), code is grouped by domain or feature.

```
src/
├── features/
│   ├── authentication/
│   │   ├── components/     # <LoginForm />, <UserProfile />
│   │   ├── hooks/          # useAuth()
│   │   └── utils.ts        # auth-related helpers
│   └── products/
│       ├── components/     # <ProductCard />, <ProductList />
│       ├── hooks/          # useProducts()
│       └── services.ts     # fetchProducts()
├── components/
│   ├── ui/                 # Generic, unstyled atoms (Button, Input, Card) - often from shadcn/ui
│   └── layout/             # Navbar, Footer, Sidebar
├── lib/
│   ├── api.ts              # Centralized API client (e.g., configured Axios/fetch instance)
│   └── utils.ts            # Global utility functions
├── hooks/                  # Global, non-feature-specific hooks
├── providers/              # React Context providers (Theme, Auth, QueryClient)
└── app/                    # Next.js routing, layouts, and pages
```

---

## 3. State Management

A clear distinction is made between **Server State** and **Client State**.

- **Server State (Remote Data):**
  - **TanStack Query (React Query)** is the industry standard. It handles fetching, caching, revalidation, and optimistic updates of data from APIs. SWR is a viable alternative.
- **Client State (UI State):**
  - **Redux Toolkit:** Still the go-to for large-scale applications with complex, interdependent client state. Its robust ecosystem and devtools are major advantages.
  - **React Context:** Used sparingly for low-frequency global state like theme information or authentication status.

---

## 4. Testing

A multi-layered testing strategy is standard practice.

- **Unit & Integration Testing:**
  - **Vitest** is rapidly gaining on **Jest** as the preferred framework. Its speed, modern ESM support, and Jest-compatible API make it a strong choice for new projects.
  - **React Testing Library** is used alongside Jest/Vitest to test components from a user's perspective.
- **End-to-End (E2E) Testing:**
  - **Playwright** and **Cypress** are the top contenders. Playwright is often praised for its speed and cross-browser capabilities. They are essential for testing critical user flows in a real browser environment.

---

## 5. Code Quality & Automation

Automating quality checks is a cornerstone of productive teams.

- **Linting & Formatting:** **ESLint** and **Prettier** are the universal standard.
- **Git Hooks:** **Husky** combined with **lint-staged** is the de-facto solution for running linters, formatters, and tests automatically before commits are made. This prevents bad code from ever entering the codebase.
- **CI/CD:** **GitHub Actions** (or GitLab CI) is used to create pipelines that automatically run all checks (linting, testing, building) on every pull request, ensuring the main branch is always stable. Deployment is typically to platforms like **Vercel** or **Netlify**.

---

## 6. Authentication

- **NextAuth.js (Auth.js):** The most popular and comprehensive open-source solution, designed specifically for Next.js.
- **Managed Services:** **Clerk**, **Supabase Auth**, and **Lucia** are increasingly popular for offering a more managed, out-of-the-box experience with pre-built UI components and user management features.
