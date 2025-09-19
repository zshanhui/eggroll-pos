# eggroll-pos

Restaurant margins are slim enough already, typically between 5% and 10%. And now SaaS companies and tech platforms want a piece of that as well. The opensource project, eggroll-pos will be a completely free restaurant pos and online ordering solution that you can self host and not have to pay a dime to platforms. Restaurants will have control of their customer data and market however they see fit whether that is email or sms marketing.

## Getting started

Project is based on:

- Express: http://expressjs.com/
- Postgres using Knex: http://knexjs.org/
- React: https://reactjs.org/
- Vite: https://vitejs.dev/ (Build tool)
- TypeScript: https://www.typescriptlang.org/ (Type safety)

Requirements:

- `postgresql` running on local machine
- `node 22.14.0+` and `pnpm`
- `knex-cli`

1. Change database settings in `knexfile.js`
2. `cd` into `/db` and run migrations with `knex migrate:latest` or `knex migrate:up $filename`
3. Run application with `pnpm run dev`
4. Develop server-side code in `/src/server` and client code in `/src/client`
5. Messenger chat templates in `/src/messenger/templates`

## Development Experience Updates (2025)

This project has been modernized with cutting-edge development tools and practices:

### 🚀 **Build System Migration: Webpack → Vite**

- **Faster builds**: Vite's esbuild-based bundling is 10-100x faster than Webpack
- **Instant dev server**: Hot Module Replacement (HMR) starts in milliseconds
- **Modern tooling**: Built-in TypeScript support, CSS preprocessing, and asset handling
- **Better developer experience**: Faster feedback loop and smoother development workflow

### 📘 **TypeScript Integration**

- **Type safety**: Catch errors at compile time instead of runtime
- **Enhanced IDE support**: Better autocomplete, refactoring, and navigation
- **Self-documenting code**: Types serve as inline documentation
- **Gradual migration**: Can add stricter types incrementally
- **Modern standards**: Aligned with 2025 development practices

### 🛠 **Development Scripts**

```bash
# Development
pnpm run dev              # Start Vite dev server + Node.js server
pnpm run build            # Build for production with Vite
pnpm run build:server     # Compile server-side TypeScript
pnpm run build:all        # Build both client and server
pnpm run type-check       # TypeScript type checking
pnpm run preview          # Preview production build locally
```

### 🎯 **Key Improvements**

- **Path aliases**: Clean imports with `@/`, `@/client`, `@/server`, `@/shared`
- **Type definitions**: Comprehensive types for all dependencies
- **Global types**: Proper Window interface extensions
- **Modern React**: Updated to use latest React patterns and TypeScript
- **Faster feedback**: Instant compilation and hot reloading
- **Better debugging**: Source maps and improved error messages

### 📁 **Project Structure**

```
src/
├── client/           # React frontend (TypeScript)
│   ├── js/          # Components and pages
│   └── css/         # Stylesheets
├── server/          # Express backend (JavaScript)
├── shared/          # Shared utilities (TypeScript)
└── types/           # Global type definitions
```

### 🔧 **Configuration Files**

- `vite.config.ts` - Vite configuration with TypeScript support
- `tsconfig.json` - TypeScript configuration for client-side code
- `tsconfig.server.json` - TypeScript configuration for server-side code
- `package.json` - Updated with modern dependencies and scripts
