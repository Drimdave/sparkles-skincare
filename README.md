# Sparkles Skincare

Sparkles Skincare: A premium, warm-toned skincare landing page built with Next.js 15 and Tailwind CSS 4. Featuring cinematic GSAP scroll animations, a custom design token system, responsive product carousels, and an editorial aesthetic crafted for the modern beauty ecosystem.

---

## Desktop Preview

> Screenshots will be added after deployment.

## Mobile Preview

> Screenshots will be added after deployment.

---

## Core Features

- **Cinematic Scroll Animations**: Full-page GSAP-powered scroll-triggered animations with staggered reveals, parallax scaling, and word-by-word text typing effects across every section.
- **Custom Design Token System**: A comprehensive theme architecture with 9 color palettes, 12 typography scales, 8 spacing tokens, and 7 shadow layers -- all managed through CSS custom properties.
- **Horizontal Product Carousel**: Snap-scrolling product carousel with manual directional controls, hover zoom transitions, and an integrated hero card with gradient overlays.
- **Interactive Testimonial Carousel**: Multi-card carousel with offset stacking, directional clip-path geometry on flanking cards, and smooth crossfade transitions between active testimonials.
- **Glassmorphism Benefits Section**: Frosted-glass stat cards with backdrop blur, animated SVG connector lines, and a full-bleed background with layered gradient overlays.
- **Quality Trust Grid**: Dynamic three-row, three-column layout with connected SVG line decorations, circular product imagery, and coordinated scale and fade-in animations.
- **Responsive Navigation**: Desktop split-navigation with centered brand logo, mobile hamburger drawer with full-screen overlay, and pill-shaped login CTA.
- **Performance Optimized**: Static-site generation via Next.js App Router, optimized remote images through next/image, and self-hosted Google Fonts via next/font for zero layout shift.

---

## Sections Overview

| Section | Description |
|---|---|
| **Navbar** | Split navigation with centered "Sparkles" logo, pill-shaped login button, mobile hamburger menu, and shopping cart icon |
| **Hero** | Full-viewport background image, parallax scale animation, typographic brand watermark, and CTA with arrow indicator |
| **Our Story** | Word-by-word staggered typing animation, customer avatar row, testimonial excerpt, and section label with CTA button |
| **Products** | Horizontal snap-scroll carousel with hero card, product detail cards with stock badges, pricing info, and directional controls |
| **Routine** | Two-column layout with six routine step cards in a responsive grid, alternating dark and light card styles with check icons |
| **Benefits** | Full-bleed dark section with glassmorphism stat cards, animated vertical line, SVG connector paths, and background model imagery |
| **Quality** | Three-tier circular image layout with connected SVG lines, descriptive text blocks, and coordinated scroll-triggered animations |
| **Testimonials** | Interactive card carousel with offset stacking, clip-path geometry, image and quote split layout, and navigation controls |
| **Footer** | Five-column link grid, social media links, brand watermark, copyright bar, and warm brown background with overlay image |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | GSAP 3 with ScrollTrigger and useGSAP React hook |
| Motion | Motion (Framer Motion) |
| Language | TypeScript |
| Components | React 19 |
| Icons | Lucide React |
| Fonts | Montserrat, JetBrains Mono (self-hosted via next/font) |
| Utilities | clsx, tailwind-merge, class-variance-authority |

---

## Project Structure

```
sparkles-skincare/
  app/
    globals.css          # Design token system: colors, typography, spacing, shadows
    layout.tsx           # Root layout with SEO metadata, OpenGraph, and font loading
    page.tsx             # Page composition: assembles all section components
  components/
    Navbar.tsx           # Split navigation with mobile drawer
    Hero.tsx             # Full-viewport hero with GSAP entrance animations
    OurStory.tsx         # Word-by-word typing animation and avatar row
    Products.tsx         # Horizontal snap-scroll product carousel
    Routine.tsx          # Routine steps grid with alternating card styles
    Benefits.tsx         # Glassmorphism cards with SVG connector lines
    Quality.tsx          # Three-tier circular image layout with text blocks
    Testimonials.tsx     # Interactive offset-stacking testimonial carousel
    Footer.tsx           # Five-column footer with brand watermark
  hooks/
    use-mobile.ts        # Responsive breakpoint detection hook
  lib/
    utils.ts             # Utility functions (cn helper for class merging)
```

---

## Design System

The project uses a fully custom theme defined in `globals.css` with CSS custom properties:

**Color Palettes**: Primary (deep brown), Secondary (warm terra cotta), Tertiary (cream and gold), Accent (rich sienna), plus Gray, Success, Error, Warning, and Info scales -- each with 10 shades from 50 to 900.

**Typography Scale**: Display (21vw), H1 through H4, Body Large, Body, Body Small, Button, Caption, Label, and Code -- each with dedicated line-height, letter-spacing, and font-weight tokens. All scales include mobile-specific overrides.

**Spacing**: Tokens from 0.5 (0.125rem) to 32 (8rem) for consistent spatial rhythm.

**Shadows**: Seven levels from xs to 2xl plus an inner shadow, using layered box-shadow values.

**Border Radii**: Eight levels from none (0px) to full (9999px).

---

## Development Setup

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Drimdave/sparkles-skincare.git
cd sparkles-skincare
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is optimized for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments on every push to the main branch.

---

## GitHub Description

```
Sparkles Skincare: A premium, warm-toned skincare landing page built with Next.js 15 and Tailwind CSS 4. Featuring cinematic GSAP scroll animations, a custom design token system, responsive product carousels, and an editorial aesthetic crafted for the modern beauty ecosystem.
```

## GitHub Topics

```
landing-page, nextjs, tailwindcss, skincare, beauty, gsap, scroll-animations, react, typescript, vercel
```

---

## Credits

Built by David Oyelade (Drimdave).

---

## License

This project is open source and available under the [MIT License](LICENSE).
