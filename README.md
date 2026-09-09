# Ember Pizza

A mobile-first pizza ordering experience built with React, Vite, Tailwind CSS, Framer Motion, and React Icons. Ember Pizza uses a warm late-night pizzeria visual system with deep espresso surfaces, tomato red CTAs, basil accents, and creamy cards.

## Included flow

- Animated splash screen and branded loading state
- Mobile header with delivery location and animated cart badge
- Promotional hero banner with floating ingredient motion
- Scrollable category filters
- Animated pizza menu cards with ratings, dietary indicators, and add-to-cart actions
- Product customization sheet with size, crust, toppings, quantity, and live pricing
- Deals and offers section
- Interactive cart with quantity controls, removal, coupon application, delivery fee, discount, and total calculation
- Frontend-only checkout with address, contact, delivery notes, and payment method UI
- Animated order-success confirmation state
- Responsive layouts tuned for 320px–430px mobile widths and larger screens

## Local setup

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Quality checks

```bash
npm run lint
```

The application is frontend-only. Checkout and payment controls are intentionally UI demonstrations and do not submit real payments.

## Deployment

The app is Vite-compatible and can be deployed to Vercel or Netlify with the following settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
