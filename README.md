# my-material-theme-ui-components

A premium, dynamic-themed React design system component library built with TypeScript and styled-components. It generates complete, accessible, and responsive color palettes (surfaces, accents, and text contrasts) dynamically from a single primary color input.

---

## Features

- **Dynamic Theme Palette Engine**: Supply a single primary hex color (e.g. `#1A73E8`), and the library automatically calculates:
  - Accessible, high-contrast text colors (`primaryText`, `secondaryTextHigh`, `primaryContrastText`).
  - Lighter background tints and surfaces (`surfaceDefault`, `surfaceHigh`).
  - Active and hover modifiers (`primaryHigh`).
  - Standard status colors (`success`, `warning`, `danger`, `info`).
- **Premium Components**: Fully type-safe React components including Modal, ImageCard, Button, Badge, forms, loaders, tooltips, and containers.
- **Backwards Compatibility**: Can be configured globally (singleton pattern) or dynamically using styled-components' `<ThemeProvider>`.

---

## Installation

Install the package and its peer dependencies:

```bash
npm install my-material-theme-ui-components styled-components tinycolor2
```

---

## Theme Configuration

You can customize the theme using two main approaches:

### 1. Global Setup (Singleton Pattern)
Call `configureTheme` early in your application entry point (e.g., `main.tsx` or `index.tsx`). All default styled-components will fall back to this configuration automatically.

```tsx
import { configureTheme } from 'my-material-theme-ui-components';

// This dynamically calculates matches for surface, contrast text, etc.
configureTheme('#1A73E8');
```

### 2. Contextual Theme Provider
Wrap your application in styled-components' `ThemeProvider` and pass the dynamically generated theme object.

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { generateThemeColors, RootElement, Button } from 'my-material-theme-ui-components';

function App() {
  // Generate the full theme palette object from one color
  const theme = generateThemeColors('#0F9D58');

  return (
    <ThemeProvider theme={theme}>
      <RootElement $padding="24px">
        <Button>Theme Adaptive Button</Button>
      </RootElement>
    </ThemeProvider>
  );
}
```

---

## Color Tokens

The generated theme contains the following design tokens:

| Token Name | Description |
| :--- | :--- |
| `primary` | The base brand color (e.g. `#1A73E8`). |
| `primaryHigh` | A slightly modified primary color for hover/focus states. |
| `primaryText` | A highly readable, dark tint of the primary color for body/heading copy. |
| `primaryContrastText` | High-contrast text designed to render on top of the primary color background (`#ffffff` for dark themes, dark text for light themes). |
| `secondaryTextHigh` | Medium-contrast descriptive text (e.g. captions and subheadings). |
| `surfaceDefault` | Desaturated, light background surface color. |
| `surfaceHigh` | Slightly lighter elevation surface color (e.g. for cards and nav bars). |
| `success` / `warning` / `danger` / `info` | Standardized status colors. |

---

## Component Usage Examples

### Primary Button and Badge
```tsx
import { Button, Badge } from 'my-material-theme-ui-components';

function Example() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button onClick={() => alert('Clicked!')}>Filled Button</Button>
      <Badge variant="filled" colorType="primary">Primary Tag</Badge>
      <Badge variant="filled" colorType="success">Completed</Badge>
    </div>
  );
}
```

### Form Input and Error Validation
```tsx
import { Input, TextArea } from 'my-material-theme-ui-components';

function FormExample() {
  return (
    <form>
      <Input label="Username" placeholder="Enter username" />
      <Input label="Email Address" placeholder="user@domain.com" error="Invalid email address" />
      <TextArea label="Comments" placeholder="Type here..." />
    </form>
  );
}
```

### Aspect-Ratio Hover Zoom Card
```tsx
import { ImageCard } from 'my-material-theme-ui-components';

function CardExample() {
  return (
    <ImageCard
      title="Dynamic Showcase"
      subtitle="React Component Library"
      description="Interactive aspect-ratio hover magnification card."
      imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600"
    />
  );
}
```

---

## License

MIT
