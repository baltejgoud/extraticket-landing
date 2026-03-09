# Extra Ticket Landing Page

A modern, responsive landing page for Extra Ticket - a fan-first marketplace for buying and reselling concert & event tickets with escrow protection and verified sellers.

## Features

- 🎫 Interactive hero section with animated ticket visual
- 💰 Live marketplace listings with real-time prices in INR (₹)
- ✅ Trust indicators and security features showcase
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Dark mode ready with CSS variables
- ⚡ Fast performance with Vite + React
- 🔒 Built with TypeScript for type safety

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via CSS variables)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/extraticket-landing.git
cd extraticket-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Development

### Available Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable components (Hero, Features, etc.)
├── hooks/            # Custom React hooks
├── services/         # API and utility services
├── utils/            # Helper functions
├── index.css         # Global styles with CSS variables
└── App.tsx           # Main app component
```

## Customization

### Currency & Pricing

The landing page uses INR (₹) for all pricing. To change currency:
- Update price values in component files
- Modify currency symbol in relevant components

### Colors & Theming

CSS variables are defined in `index.css`. Customize the design by editing:
- Primary colors
- Accent colors  
- Surface colors
- Typography scales

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
