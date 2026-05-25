# ttwire — Verified Coupon Marketplace

> The smartest coupon platform for trading tools, software, and travel. Verified codes, real discounts, zero fluff.

---

## Overview

ttwire is a full-stack coupon marketplace built with Next.js 16 and Strapi CMS. It aggregates verified discount codes and deals across 300+ stores in three major categories — Trading, Software, and Travel — and serves them through a fast, SEO-optimized storefront with real-time search, filtering, and pagination.

---

## Features

- 🔍 **Instant search** with autocomplete dropdown across all stores
- 🏷️ **Coupon reveal system** — codes hidden by default, revealed on click
- 📋 **One-click copy** with toast notification
- 🗂️ **Category & subcategory filtering** — Trading, Software, Travel + 14 subcategories
- ⭐ **Rating filter** — filter stores by minimum rating
- 📊 **Sort options** — Most Popular, Top Rated, Most Reviewed, Most Coupons
- 📄 **Smart pagination** — client-side with dots for large page counts
- 🔒 **SEO ready** — meta tags, Open Graph, Twitter Cards, JSON-LD schema per store
- ⚡ **Cached API calls** — `revalidate: 3600` to minimize Strapi Cloud usage
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🌙 **Dark theme** — custom design system with CSS variables

---

## Tech Stack

| Technology      | Purpose                         |
| --------------- | ------------------------------- |
| Next.js 16      | Frontend framework (App Router) |
| TypeScript      | Type safety                     |
| Tailwind CSS v4 | Styling                         |
| Framer Motion   | Animations                      |
| Zustand         | Global state management         |
| Strapi Cloud    | Headless CMS & REST API         |
| React Icons     | Icon library                    |
| Vercel          | Deployment                      |

---

## Project Structure

```
ttwire/
├── app/
│   ├── page.tsx              # Landing page
│   ├── stores/
│   │   ├── page.tsx          # All stores listing
│   │   └── [id]/
│   │       └── page.tsx      # Single store page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & CSS variables
│
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── heroSection.tsx
│   ├── categories.tsx
│   ├── benefitsSection.tsx
│   ├── ctaComponent.tsx
│   ├── allStoresCard.tsx
│   ├── filtersUi.tsx
│   ├── storesHeader.tsx
│   ├── Pagination.tsx
│   ├── SearchAutocomplete.tsx
│   ├── coupons.tsx
│   ├── faqCard.tsx
│   ├── bannerSection.tsx
│   └── initializeres/
│       ├── storeInitializer.tsx
│       ├── allstoreInitializer.tsx
│       └── SimilarInitializer.tsx
│
├── store/
│   ├── useStore.ts           # Single store page state
│   └── useStoresStore.ts     # All stores + filter state
│
├── hooks/
│   └── useFilteredStores.ts  # Filter + sort + pagination logic
│
├── lib/
│   ├── strapi.ts             # All API fetch functions
│   └── types/
│       └── storeTypes.ts     # All TypeScript interfaces
│
└── public/
```

---

## Architecture

```
Strapi Cloud (CMS)
      │
      │ REST API (cached revalidate: 3600)
      ▼
Next.js Server Components
      │
      │ props
      ▼
Initializer Components (client)
      │
      │ setStore / setAllStores
      ▼
Zustand Global Store
      │
      ├── useStore          → single store page data
      └── useStoresStore    → all stores + filters + pagination
                │
                ▼
          useFilteredStores (hook)
          filters + sorts + paginates in memory
                │
                ▼
          UI Components render results
```

---

## Data Model

Each store contains:

- **Banner Section** — logo, name, rating, social links, CEO, location, founded
- **About Card** — store description
- **SEO Fields** — meta title, description, OG, Twitter Card, schema markup
- **Pros & Cons** — two separate lists
- **FAQ Card** — accordion questions and answers
- **Coupons** — code/deal type, discount amount, expiry, verified status, success rate
- **Similar Stores** — auto-fetched by subcategory

---

## Store Categories

```
Trading
├── Crypto
├── Broker / Forex
└── Firms & Platforms

Software
├── AI
├── Tools
├── Education
├── Marketing
├── Design
├── VPN & Security
├── Productivity
└── Hosting & Domains

Travel
├── Booking
├── Hotels
└── Adventure
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Amiid5/ttwire-coupons
cd ttwire-coupons
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

No `.env` file required — the Strapi Cloud URL is public read-only.

---

## API Functions

| Function                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- |
| `getAllStores()`                             | Fetches all stores (lightweight fields only) |
| `getStoreBySlug(slug)`                       | Fetches single store with all components     |
| `getSimilarStores(subcategory, excludeSlug)` | Fetches similar stores by subcategory        |

---

## Filter Logic

All filtering happens client-side on the cached `allStores` array — zero extra API calls after initial load.

| Filter      | Zustand setter          |
| ----------- | ----------------------- |
| Search      | `setSearch(value)`      |
| Category    | `setCategory(value)`    |
| Subcategory | `setSubcategory(value)` |
| Rating      | `setRating(value)`      |
| Sort        | `setSortBy(value)`      |
| Page        | `setPage(value)`        |
| Reset all   | `resetFilters()`        |

---

## SEO

Every store page includes:

- Dynamic `meta_title` and `meta_description`
- Open Graph tags for Facebook and LinkedIn sharing
- Twitter Card tags for X sharing
- JSON-LD `Store` schema with `aggregateRating`
- Canonical URL
- `robots: index, follow`

---

## Deployment

| Service      | Purpose                                                     |
| ------------ | ----------------------------------------------------------- |
| Vercel       | Next.js hosting (automatic deploys from GitHub)             |
| Strapi Cloud | CMS hosting — add stores from dashboard, live within 1 hour |

---

## Author

**Amiid5**
GitHub: [@Amiid5](https://github.com/Amiid5)

---

## License

MIT — free to use and modify.
