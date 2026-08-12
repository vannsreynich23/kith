# Kith — Soft & Sweet

A Next.js (App Router) storefront matching the provided mockups.

## Structure

```
src/
  app/
    layout.js         Root layout (wraps everything in CartProvider, Header, Footer)
    page.js            Home page (hero, filters, promo, featured picks, trust strip)
    globals.css        Design system: colors, type, all component styles
    products/page.js   All Products grid w/ category filter + sort
    product/[id]/page.js  Single product detail page
    account/page.js    Sign in / Sign up
    cart/page.js        Cart with quantity controls + order summary
    checkout/page.js    Delivery form + payment method (ABA / Wing / COD)
  components/
    header.js
    footer.js
    productcard.js
  context/
    CartContext.js     Cart state, persisted to localStorage
  data/
    products.js         Product catalog — edit this to add your real products/photos
```

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Notes / next steps

- Swap the Unsplash placeholder images in `src/data/products.js` for your own product photography.
- The account page and checkout "Buy Now" button currently just show an alert — wire them to your real auth and payment/order APIs (e.g. an ABA PayWay integration for the QR code).
- Cart state persists in the browser via `localStorage`, so it survives refreshes but is per-device (not per-account) until you add real auth.
- Colors, fonts, and spacing all live in `src/app/globals.css` as CSS variables — change the `:root` block to retheme the whole site.
