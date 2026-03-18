# Mac Hadis Changes Report

This document details all changes made to the **Mac Hadis** Next.js project, organized by category based on the commit messages.

---

## Table of Contents

1. [Blog Design](#1-blog-design)
2. [SEO & Structured Data](#2-seo--structured-data)
3. [Security & HTTP Headers](#3-security--http-headers)
4. [Performance Optimizations](#4-performance-optimizations)
5. [Image Optimization](#5-image-optimization)
6. [Font Loading](#6-font-loading)
7. [Google Tag Manager](#7-google-tag-manager)
8. [CSS Handling](#8-css-handling)
9. [Configuration & Refactoring](#9-configuration--refactoring)
10. [Metadata & Canonical URLs](#10-metadata--canonical-urls)
11. [Middleware & URL Handling](#11-middleware--url-handling)

---

## 1. Blog Design

### Change blog design

Updated the blog section layout and visual design to improve readability and user experience.

**Files affected:**
- `src/components/pages/blogs/`
- `src/app/blogs/`

---

## 2. SEO & Structured Data

### Structured Data For Hadis

Added JSON-LD structured data schemas to improve search engine understanding of the site content and enable rich results in Google Search.

**Schemas added:**
- `OrganizationSchema` – Describes the business entity (機械工具買取ハディズ)
- `WebsiteSchema` – Describes the website and enables sitelinks search box
- `ArticleSchema` – For blog/article pages
- `BreadcrumbSchema` – For breadcrumb navigation in search results
- `LocalBusinessSchema` – For local SEO visibility
- `ProductSchema` – For product listing pages
- `ServiceSchema` – For service pages

**Files affected:**
- `src/components/seo/schemas/ArticleSchema.tsx` *(new)*
- `src/components/seo/schemas/BreadcrumbSchema.tsx` *(new)*
- `src/components/seo/schemas/LocalBusinessSchema.tsx` *(new)*
- `src/components/seo/schemas/OrganizationSchema.tsx` *(new)*
- `src/components/seo/schemas/ProductSchema.tsx` *(new)*
- `src/components/seo/schemas/ServiceSchema.tsx` *(new)*
- `src/components/seo/schemas/WebsiteSchema.tsx` *(new)*
- `src/components/seo/schemas/index.ts` *(new)*
- `src/components/seo/index.ts`
- `src/app/layout.tsx` – Injects `<OrganizationSchema />` and `<WebsiteSchema />` in `<head>`

### add Structured Data For Hadis (JSON-LD)

Each schema component renders a `<script type="application/ld+json">` tag that is injected server-side into the page `<head>`. This ensures structured data is available to crawlers without any JavaScript execution requirements.

### Fix URL Canonicalization

Added canonical URL tags to every page to prevent duplicate content penalties.

**Changes:**
- `alternates.canonical` set in page metadata using the `baseUrl` utility
- `metadataBase` configured with the production URL (`https://mac-hadis.com`)

**Files affected:**
- `src/app/layout.tsx`
- `src/utils/baseUrl.ts`

---

## 3. Security & HTTP Headers

### fix Unsafe Cross-Origin Links Test

Added `rel="noopener noreferrer"` to all external links that use `target="_blank"` to prevent reverse tabnapping attacks and information leakage.

**Why:** Without this attribute, opened pages can access the `window.opener` object and potentially redirect the parent page.

### HSTS Test

Implemented **HTTP Strict Transport Security (HSTS)** headers to enforce HTTPS connections and protect against protocol-downgrade attacks and cookie hijacking.

**Header added to all routes (`/:path*`):**
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

**Additional security headers added:**
| Header | Value | Purpose |
|--------|-------|---------|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer information |

**Files affected:**
- `next.config.ts` – `async headers()` section

---

## 4. Performance Optimizations

### fix render blocking

Eliminated render-blocking resources to improve First Contentful Paint (FCP) and Largest Contentful Paint (LCP) scores.

**Changes:**
- CSS stylesheets deferred using the `media="print"` trick via a MutationObserver script injected at the top of `<head>`
- The observer intercepts any `<link rel="stylesheet">` added by Next.js and converts it to non-blocking
- After load, `media` is reset to `all` so styles apply normally

### active optimize css

Enabled Next.js experimental CSS optimization feature:

```ts
// next.config.ts
experimental: {
  optimizeCss: true,
}
```

This enables `critters` (critical CSS inlining) to inline above-the-fold CSS and defer non-critical styles automatically.

### remove scroll restoration and apply auto smooth scrolling

- Removed `scrollRestoration: true` from `next.config.ts` experimental options to avoid interference with browser native behavior
- Applied CSS-level smooth scrolling for a seamless user experience:

```css
html {
  scroll-behavior: smooth;
}
```

### apply fetch priority

Applied `fetchpriority="high"` to Largest Contentful Paint (LCP) images to instruct the browser to load them before lower-priority resources:

```tsx
<Image
  priority
  fetchPriority="high"
  ...
/>
```

### Optimize Hero background with art-directed images

Implemented art-directed responsive images for the Hero section background using `<picture>` with `<source media="...">` elements:

- **Mobile:** Smaller, cropped image optimized for narrow viewports
- **Tablet:** Medium resolution variant
- **Desktop:** Full-resolution image

This reduces unnecessary data transfer on mobile devices and improves LCP.

### refactor: optimize Next.js configuration, enhance font loading strategy, and improve header performance with memoization

- Reorganized `next.config.ts` for readability
- Wrapped `Header` component with `React.memo()` to prevent unnecessary re-renders on route changes
- Added `compress: true` for Brotli/gzip compression
- Set `poweredByHeader: false` to remove the `X-Powered-By: Next.js` response header
- Set `productionBrowserSourceMaps: false` to reduce bundle size in production

---

## 5. Image Optimization

### remove preload image

Removed `<link rel="preload">` tags for images that were not part of the critical rendering path. Unnecessary preloads waste bandwidth and can actually hurt performance by competing with truly critical resources.

### Remove eager image loading and optimize image settings

- Changed non-critical images from `loading="eager"` to `loading="lazy"` (default)
- Only images above the fold (LCP candidates) use `priority` prop
- Configured `next/image` with `unoptimized: true` to avoid Vercel image optimizer charges while keeping format hints

**`next.config.ts` image configuration:**
```ts
images: {
  unoptimized: true,
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: true,
}
```

**Cache headers for static assets:**
```
/_next/image(.*): Cache-Control: public, max-age=60, s-maxage=31536000
/:all*(svg|jpg|png|webp|avif): Cache-Control: public, max-age=31536000, immutable
/_next/static/:path*: Cache-Control: public, max-age=31536000, immutable
```

### Optimize image usage and update configs for performance

- Removed `contentDispositionType: "attachment"` and `contentSecurityPolicy` from image config (these caused download behavior instead of inline display)
- Added `remotePatterns` whitelist:
  - `mac-hadis.s3.ap-northeast-1.amazonaws.com`
  - `mac-hadis.com`

---

## 6. Font Loading

### Optimize image handling and font loading for performance

Implemented a two-phase font loading strategy to eliminate render-blocking Google Fonts requests:

**Phase 1 – Inline critical @font-face rules:**
- Critical Latin subset `@font-face` declarations are inlined directly in `<style>` in `<head>`
- This eliminates the render-blocking `https://fonts.googleapis.com/css2?...` request
- `font-display: swap` ensures text is visible immediately using system fallback fonts

**Phase 2 – Async full font load:**
- Full Japanese (Noto Sans JP) and extended Open Sans subsets are loaded asynchronously via a JavaScript snippet that creates a `<link>` with `media="print"` and switches to `media="all"` on load
- Next.js `Open_Sans` font with `preload: false` handles the remaining subsets progressively

**Font stack used:**
- **Primary:** `'Open Sans'` (Latin, weights 300–800)
- **Japanese:** `'Noto Sans JP'` (weights 100–900)
- **CSS variable:** `--font-noto-sans-jp` for Tailwind `font-noto` utility class

**Files affected:**
- `src/app/layout.tsx` – `criticalFontCSS` constant and font loading scripts
- `src/app/fonts/` – Font configuration
- `tailwind.config.ts` – `fontFamily` extension

---

## 7. Google Tag Manager

### move google tag manager to inside body

Moved the `<GoogleTagManager>` component from `<head>` to inside `<body>` to prevent it from blocking HTML parsing.

### move gtm to end of body

Further optimized by moving the GTM script to the **end of `<body>`** so all critical content renders before analytics scripts execute.

**Why this matters:** GTM can trigger many third-party scripts. Placing it at the end ensures it does not compete for network bandwidth or CPU time during the critical rendering path.

**Files affected:**
- `src/app/layout.tsx`

---

## 8. CSS Handling

### prevent import css

Stopped using `@import` rules in CSS files, as CSS `@import` is render-blocking and sequential (each import waits for the previous to load). Replaced with direct `<link>` tags or inline styles where appropriate.

### refactor: enhance performance and organization by optimizing CSS handling, adding critical styles, and implementing mobile-first Tailwind config

- Reorganized Tailwind CSS configuration to follow **mobile-first** principles
- Added critical above-the-fold styles directly in the component or as inlined `<style>` tags
- Ensured all non-critical CSS is deferred

**`tailwind.config.ts` key changes:**
```ts
theme: {
  extend: {
    fontFamily: {
      noto: ['var(--font-noto-sans-jp)', 'sans-serif'],
      sans: ['var(--font-open-sans)', 'sans-serif'],
    }
  }
}
```

### refactor: inline styles in Loading component to eliminate render-blocking CSS and optimize performance

The `Loading` component (`src/app/loading.tsx`) previously imported an external CSS module which caused a render-blocking request. The styles were inlined as `style` props directly on the JSX elements to eliminate this dependency.

**Files affected:**
- `src/components/common/components/Loading.tsx` – Styles converted from CSS module to inline styles
- `src/app/loading.tsx`

---

## 9. Configuration & Refactoring

### refactor: reorganize next.config.mjs for clarity and remove custom webpack config

- Rewrote `next.config.ts` for better readability with logical sections
- Removed the custom `webpack` configuration block (chunk splitting, module concatenation) to reduce complexity and rely on Next.js built-in optimizations
- All settings organized into clearly labeled sections: images, headers, experimental, security

**Before (complex webpack config):**
```ts
webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    config.optimization.concatenateModules = true;
    config.optimization.splitChunks = { /* complex config */ };
  }
  return config;
},
```

**After:** Removed in favor of Next.js defaults.

---

## 10. Metadata & Canonical URLs

### change metadata

Updated site metadata for improved SEO and social sharing:

| Property | Value |
|----------|-------|
| `metadataBase` | `https://mac-hadis.com` |
| `alternates.canonical` | `"./"` (page-relative) |
| `openGraph.url` | `baseUrl` |
| `generator` | `"Next.js"` |
| `referrer` | `"origin"` |

### fix: update base URL to remove 'www' prefix

Updated the `baseUrl` utility to use `https://mac-hadis.com` (without `www`) as the canonical domain.

**Why:** Prevents duplicate content issues where both `www.mac-hadis.com` and `mac-hadis.com` serve the same content. The non-www version is treated as canonical.

**Files affected:**
- `src/utils/baseUrl.ts`

---

## 11. Middleware & URL Handling

### refactor: improve hostname handling in middleware for better URL redirection

Improved the Next.js middleware (`src/middleware.ts`) to correctly handle hostname-based URL redirection logic:

- Better detection and normalization of incoming hostnames
- Ensures all `www.mac-hadis.com` requests are redirected to `mac-hadis.com` with a `301 Permanent Redirect`
- Preserves the original path and query string during redirect

**Files affected:**
- `src/middleware.ts`

---

## Summary of All Changes

| Category | Changes |
|----------|---------|
| **Blog** | Redesigned blog section layout |
| **SEO** | Added JSON-LD structured data (7 schema types), canonical URLs |
| **Security** | HSTS headers, cross-origin link fix, X-Frame-Options, X-Content-Type-Options |
| **Performance** | CSS deferral, optimizeCss, smooth scrolling, fetch priority, memoized Header |
| **Images** | Removed eager loading, art-directed Hero images, optimized next/image config |
| **Fonts** | Inlined critical @font-face, async full font loading, eliminated render-blocking |
| **GTM** | Moved to end of body to unblock critical rendering path |
| **CSS** | Removed @import, mobile-first Tailwind, inlined Loading component styles |
| **Config** | Reorganized next.config.ts, removed custom webpack, added security headers |
| **Metadata** | Updated metadataBase, canonical URLs, removed www prefix |
| **Middleware** | Improved hostname handling and URL redirection |

---

*Document generated: 2026-03-18*  
*Project: Mac Hadis (mac-hadis.com) — 機械工具買取ハディズ*
