# Viettel Landing Page Generation Instructions

You are an AI agent tasked with creating landing pages for Viettel campaigns. This project uses a strictly component-based architecture with Next.js (App Router), TypeScript, and Tailwind CSS.

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
  - **Sharp Edges Only**: The global CSS enforces `border-radius: 0 !important;`. Do NOT attempt to add rounded corners (`rounded-md`, `rounded-full`, etc.) unless specifically overriding for a specific component design requirement already present in the UI library.

## 2. Component Reference

**Use pre-built components. Do not invent new UI patterns.**
Read the component files to understand their props interfaces.

### A. Layout Wrappers

| Component   | Reference File               | Key Notes                                      |
| :---------- | :--------------------------- | :--------------------------------------------- | -------- |
| **Header**  | `src/components/Header.tsx`  | Include at top of `main`.                      |
| **Footer**  | `src/components/Footer.tsx`  | Include at bottom of `main`.                   |
| **Section** | `src/components/Section.tsx` | Use for all content blocks. Props: `bg="white" | "gray"`. |

### B. Hero Section

| Component           | Reference File                       | Key Notes                                                                           |
| :------------------ | :----------------------------------- | :---------------------------------------------------------------------------------- |
| **HeroSectionGrid** | `src/components/HeroSectionGrid.tsx` | **Mandatory** for page headers. **ALWAYS** use `fullHeight` prop for the main hero. |

### C. Content Components

| Component         | Reference File                     | Key Notes                                           |
| :---------------- | :--------------------------------- | :-------------------------------------------------- |
| **Card**          | `src/components/Card.tsx`          | Supports `icon` (SVG) and `image`. Use inside Grid. |
| **NewsCard**      | `src/components/NewsCard.tsx`      | For news/blog/updates.                              |
| **TabNavigation** | `src/components/TabNavigation.tsx` | For pricing or history content.                     |
| **ContactForm**   | `src/components/ContactForm.tsx`   | Standard lead capture form.                         |

## 3. Workflow

**Refrence Implementation:** `src/app/5g-genz/page.tsx`
(Read this file before generating any code. It is the Golden Standard.)

### Phase 1: Setup

1.  Create `page.tsx` in a new subdirectory under `src/app/`.

### Phase 2: Metadata (Crucial for Page Titles)

**ALWAYS** export a `metadata` object to set the browser tab title and SEO description.
This allows easy title updates without digging into HTML.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tên Chiến Dịch | Viettel Telecom", // Update this easeily
  description: "Mô tả ngắn gọn về chiến dịch...",
};
```

### Phase 3: Scaffold

1.  Import components from `@/components/...`.
2.  Structure the page using the `Section` component.
    - **Refrence**: `src/components/Section.tsx` regarding `bg` props (white/gray alternation).

### Phase 4: Content POPULATION

1.  **Icons**: Use inline SVGs.
    - _Style Ref_: Look at `src/app/page.tsx` to see how SVGs are sized/styled inside Cards.
2.  **Images**:
    - Use assets from `public/` if available.
    - If missing, use placeholders but keep valid paths (e.g. string paths).

## 4. Key References (READ THESE)

- **Global Variables**: `src/app/globals.css` (Colors, Global Reset).
- **Layout Context**: `src/app/layout.tsx` (Fonts, Metadata).
- **Hero Definition**: `src/components/HeroSectionGrid.tsx` (Understand `fullHeight` logic).
- **Primary Example**: `src/app/5g-genz/page.tsx` (Copy this structure).

## 5. Anti-Patterns (DO NOT DO)

- **Never** hardcode `#ee0033`. Use `viettel-red`.
- **Never** use `rounded` classes.
- **Never** create a new Header/Footer component; use the global ones.
