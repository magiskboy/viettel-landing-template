# Viettel Landing Page Generation Instructions

You are an AI agent tasked with creating landing pages for Viettel campaigns. This project uses a strictly component-based architecture with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion for premium animations.

**Primary Directive:** maximizing reusability and consistency by referencing existing code/files rather than hardcoding values.

## 1. Design & Brand Guidelines

**Strictly adhere to the design system defined in the codebase.**

- **Colors:**
  - **DO NOT** use hex codes (e.g., `#EE0033`).
  - **ALWAYS** use the Tailwind utilities mapped to CSS variables defined in `src/app/globals.css`.
  - _Reference File_: `src/app/globals.css`
  - _Key Utilities_:
    - `bg-viettel-red`, `text-viettel-red` (Primary)
    - `bg-viettel-bg` (Light gray background)
    - `text-gray-900` or `text-[var(--viettel-text)]` (Headings)
- **Typography:**
  - Font is globally set to `Sarabun` via `layout.tsx` and `globals.css`. Use standard Tailwind `font-sans`.
  - Headings should typically be `uppercase` and `font-bold` or `font-extrabold`.
- **Shape:**
  - **Sharp Edges Only**: The global CSS enforces `border-radius: 0 !important;`. However, for interactive "Client Components" (like Magnetic Buttons), subtle overrides may be used to enhance UX while maintaining the "Sharp" brand vibe.
- **Motion (Premium Experience):**
  - **Persistent Motion**: Use ambient backgrounds or infinite loops for key visual elements to keep the page feeling "alive".
  - **Reveal on Scroll**: All major sections should use viewport reveal animations.
  - **Micro-interactions**: Use magnetic effects or scale transforms for buttons.

## 2. Component Reference

**Use pre-built components. Do not invent new UI patterns.**

### A. Layout & Global

| Component       | Reference File                   | Key Notes                                        |
| :-------------- | :------------------------------- | :----------------------------------------------- | -------- |
| **Header**      | `src/components/Header.tsx`      | Include at top of `main`.                        |
| **Footer**      | `src/components/Footer.tsx`      | Include at bottom of `main`.                     |
| **AmbientGlow** | `src/components/AmbientGlow.tsx` | **Mandatory** at the root of the page for depth. |
| **Section**     | `src/components/Section.tsx`     | Use for all content blocks. Props: `bg="white"   | "gray"`. |

### B. Interactive Atoms (Animations)

| Component              | Reference File                          | Key Notes                                       |
| :--------------------- | :-------------------------------------- | :---------------------------------------------- |
| **AnimatedRevealText** | `src/components/AnimatedRevealText.tsx` | Staggered text entrance. Good for Hero titles.  |
| **ViewportReveal**     | `src/components/ViewportReveal.tsx`     | Wrapper for scroll-in animations.               |
| **MagneticButton**     | `src/components/MagneticButton.tsx`     | High-intent CTA button with hover/glow effects. |
| **BrandMarquee**       | `src/components/BrandMarquee.tsx`       | Persistent text scroll for brand slogans.       |

### C. Hero Section

| Component           | Reference File                       | Key Notes                                                                     |
| :------------------ | :----------------------------------- | :---------------------------------------------------------------------------- |
| **HeroSectionGrid** | `src/components/HeroSectionGrid.tsx` | **Mandatory** for page headers. Now includes persistent geometric animations. |

### D. Content Components

| Component         | Reference File                     | Key Notes                                           |
| :---------------- | :--------------------------------- | :-------------------------------------------------- |
| **Card**          | `src/components/Card.tsx`          | Supports `icon` (SVG) and `image`. Use inside Grid. |
| **NewsCard**      | `src/components/NewsCard.tsx`      | For news/blog/updates.                              |
| **TabNavigation** | `src/components/TabNavigation.tsx` | For pricing or history content.                     |
| **ContactForm**   | `src/components/ContactForm.tsx`   | Standard lead capture form.                         |

## 3. Workflow

**Reference Implementation:** `src/app/LandingContent.tsx` (Client) + `src/app/page.tsx` (Server)

### Phase 1: Split Architecture

Next.js App Router requires splitting Server components (for Metadata) and Client components (for Motion).

1. Create `src/app/[slug]/LandingContent.tsx` (Use `"use client"`).
2. Create `src/app/[slug]/page.tsx` (Server component for Metadata).

### Phase 2: Metadata

```tsx
export const metadata: Metadata = {
  title: "Creative Campaign | Viettel Telecom",
  description: "Innovation at your fingertips.",
};
```

### Phase 3: Infinite Lifecycle

1. Place `<AmbientGlow />` at the very top of your `main` container.
2. Use `<HeroSectionGrid />` to set the mood.
3. Use `<BrandMarquee />` as a divider to keep the scroll rhythm.
4. Wrap Every `<Section>` or nested `<Card>` in `<ViewportReveal>`.

## 4. Key Rules (DO NOT VIOLATE)

- **Metadata**: Never move Metadata to a file with `"use client"`.
- **Hardcoding**: Never hardcode `#ee0033`. Use `viettel-red` or `var(--viettel-red)`.
- **Button Props**: Do not pass functions as props from a Server Page to a Client Component. Put the functions inside the Client Component itself.
- **Images**: Prefer Unsplash tech-vibe images for placeholders: `grayscale` until hovered.

## 5. Anti-Patterns

- Static, dead backgrounds (Use AmbientGlow).
- Abrupt text appearance (Use AnimatedRevealText).
- Generic buttons (Use MagneticButton for primary CTAs).
