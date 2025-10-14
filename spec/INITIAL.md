# Project Initialization Summary

This document provides a high-level overview of the Hero E-commerce Template, its purpose, and its core technology stack.

---

## 1. Project Goal

The primary goal of this project is to create a production-grade **Next.js template** specifically tailored for building modern **e-commerce applications**. It is designed to provide a robust foundation that incorporates industry best practices for architecture, code quality, and developer experience, allowing teams to start developing features immediately.

---

## 2. Core Technologies

- **Framework:** Next.js (with App Router)
- **Language:** TypeScript
- **Runtime:** Bun

---

## 3. Implemented Stacks & Libraries

This template follows a "right tool for the job" philosophy, integrating the following libraries:

#### Styling & UI

- **Styling:** Tailwind CSS for utility-first styling.
- **Component Library:** HeroUI for a base set of React components.
- **Component Primitives:** Intended for use with `shadcn/ui` for accessible, unstyled component building blocks.

#### State Management

- **Server State:** **TanStack Query** is used on the client-side to manage data that originates from a server. It handles all complexities of data fetching, caching, and synchronization (e.g., loading product lists).
- **Client State:** **Redux Toolkit** is used for all global client-side state management, such as the shopping cart.

#### Testing

- **Unit/Integration Testing:** **Vitest** provides a fast and modern environment for component and utility testing.
- **End-to-End (E2E) Testing:** **Playwright** is configured for testing critical user flows across the entire application.

#### Internationalization (i18n)

- **`next-intl`** is fully configured to support multiple languages, with dedicated message files and locale-based routing.

#### Code Quality & Automation

- **Linting:** ESLint
- **Formatting:** Prettier
- **Git Hooks:** Husky and lint-staged are configured to automate code formatting and linting before every commit.
- **CI/CD:** A GitHub Actions workflow is in place to run tests and builds on every pull request.

---

## 4. Architectural Principles

- **Feature-Based Structure:** The project is organized by features (e.g., `products`, `cart`) rather than by file types. This improves scalability and makes the codebase easier to navigate.
- **Clear State Separation:** A strong distinction is maintained between server state (managed by TanStack Query) and client state (managed by Redux), which is a cornerstone of modern React development.
