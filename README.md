# TheAbhiPatel Portfolio

A modern, dark-mode portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion 11.15.0
- **Testing**: Vitest 2.1.8 + fast-check 3.23.1
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
```

### Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

### Code Formatting

```bash
npx prettier --write .
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
├── constants/            # Static data (to be added)
├── hooks/                # Custom React hooks (to be added)
└── utils/                # Helper utilities (to be added)
```

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui component library
- ✅ Framer Motion for animations
- ✅ Vitest for unit testing
- ✅ fast-check for property-based testing
- ✅ ESLint + Prettier for code quality
- ✅ Husky + lint-staged for pre-commit hooks
- ✅ Dark mode by default
- ✅ Blue and indigo gradient theme

## Development Workflow

1. Make changes to the code
2. Run tests: `npm run test`
3. Check linting: `npm run lint`
4. Format code: `npx prettier --write .`
5. Commit changes (Husky will run pre-commit hooks automatically)

## License

Private - All rights reserved
