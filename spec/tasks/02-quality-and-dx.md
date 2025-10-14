# 02: Code Quality & Developer Experience

Tasks for improving code quality, developer experience, and automation (CI/CD, linting).

- [x] Install Prettier and its ESLint config: `bun add -d prettier eslint-config-prettier`.
- [x] Update `eslint.config.mjs` to include the Prettier config.
- [x] Install Husky and lint-staged: `bun add -d husky lint-staged`.
- [x] Initialize Husky (`bunx husky init`) and configure a `pre-commit` hook to run `bunx lint-staged`.
- [x] Add the `lint-staged` configuration to `package.json` to run ESLint and Prettier on staged files.
- [x] Create a GitHub Actions workflow file at `.github/workflows/ci.yml`.
- [x] Configure the CI workflow to run on pull requests, executing jobs for type checking, linting, and testing.
