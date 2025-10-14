# 01: Architecture & Project Structure

Tasks related to project structure, file organization, and architectural patterns.

- [x] Create the base directory: `src/features`.
- [x] Create initial feature directories: `src/features/products`, `src/features/cart`, `src/features/checkout`, `src/features/authentication`.
- [x] Create standard sub-directories (`components`, `hooks`, `services`, `types`) inside each new feature folder.
- [x] **Migrate existing files:**
  - [x] Move `src/services/productServices.ts` to `src/features/products/services.ts`.
  - [x] Move `src/types/productTypes.ts` to `src/features/products/types.ts`.
  - [x] Move `src/data/product.json` to `src/features/products/data/product.json`.
  - [x] Move `src/redux/features/counter` to `src/features/counter` as an example.
- [x] Create `src/lib/api.ts` with a basic, configurable `fetch` wrapper for handling API requests.
- [x] Update all imports affected by the file migrations.
- [x] Update `tsconfig.json` with path aliases for the new `features` directory (e.g., `@/features/*`).
