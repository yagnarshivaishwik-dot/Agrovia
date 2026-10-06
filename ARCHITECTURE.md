# AGROVIA CONSULTING — DIGITAL EXPERIENCE ARCHITECTURE & SYSTEM BLUEPRINT

> **"Your crop comes first."**  
> Independent agronomy & agricultural research servicing growers across North Queensland (Bowen & Burdekin).  
> **Brand Position:** Agriculture × Science × Field Intelligence × Research × Technology × Trust.  
> **Target Tier:** $5,000–$10,000 AUD Bespoke Agency Grade.

---

## 1. Visual & Sensory Identity

### 1.1 Brand Palette & Tonal System
Avoid saturated lime/electric greens. Instead, ground the interface in deep Australian agricultural earth, deep botanical canopies, warm red-loam/sand tones, and muted scientific tones.

| Token | Name | Hex / HSL | Usage |
| :--- | :--- | :--- | :--- |
| `color-base-dark` | Deep Botanical Charcoal | `#0D140E` / `hsl(130, 20%, 6%)` | Dominant dark backgrounds, footer, cinematic blocks |
| `color-base-light` | Warm Loam Off-White | `#F8F7F3` / `hsl(45, 18%, 97%)` | Editorial light canvas, cards, reading sections |
| `color-forest` | Queensland Canopy Green | `#182C20` / `hsl(140, 29%, 13%)` | Brand anchor, split-screen hero cards, headers |
| `color-sage-subtle`| Muted Burdekin Sage | `#8E9E8C` / `hsl(114, 10%, 58%)` | Fine borders, technical metadata, pill badges |
| `color-soil-sand` | Bowen Silt / Red Loam Accent | `#C5A880` / `hsl(35, 38%, 64%)` | Subtle warm accents, coordinate markers, trial tags |
| `color-gold-accent`| Sun-Ripened Amber | `#E2A84B` / `hsl(37, 74%, 59%)` | High-value focal points, active states, key micro-highlights |
| `color-border-subtle`| Architectural Hairline | `rgba(255, 255, 255, 0.08)` / `rgba(13, 20, 14, 0.08)` | Dividers, grid crosshairs, table lines |

### 1.2 Typography Hierarchy & Editorial Scale
A contemporary blend of an authoritative high-fashion architectural grotesque (`Plus Jakarta Sans` / `Syne` / `Cabinet Grotesk` feel) paired with a precision sans-serif for deep scientific legibility (`Inter` / `Geist`).

- **Display Headline 1 (Cinematic Hero):** `clamp(3.5rem, 8vw, 7.5rem)` | `font-light` / `tracking-tight` / uppercase | line-height: `0.92`
- **Display Headline 2 (Section Anchor):** `clamp(2.5rem, 5vw, 4.5rem)` | `font-normal` / `tracking-tight` | line-height: `1.05`
- **Editorial Subtitle / Standfirst:** `clamp(1.25rem, 2vw, 1.75rem)` | `font-light` / line-height: `1.4`
- **Technical Metadata / Monospace Microcopy:** `0.75rem` - `0.8125rem` | `font-mono` / `tracking-widest` / uppercase (Coordinates, Trial IDs, Dates, Field Codes)
- **Body Longform:** `1.0625rem` (`17px`) - `1.125rem` (`18px`) | `font-normal` / line-height: `1.65` / `text-stone-300` on dark, `text-stone-700` on light

---

## 2. Animation & Interaction Architecture

### 2.1 Motion Principles
- **Weight & Gravity:** Natural organic movement reminiscent of cane and canopy swayed by wind; never snap or flash.
- **Micro-Parallax & Depth:** Dual-layer z-index parallax (background aerials vs. foreground plant/sensor nodes).
- **Curated Timing & Easing Curves:**
  - Standard ease: `cubic-bezier(0.22, 1, 0.36, 1)` (Quint out - elegant deceleration)
  - Fluid ease: `cubic-bezier(0.16, 1, 0.3, 1)`
  - Duration standard: `600ms - 900ms`
- **Hardware Acceleration:** Only animate `transform`, `opacity`, and GPU-composited `clip-path`.
- **Accessibility:** Strict adherence to `prefers-reduced-motion: reduce`.

### 2.2 Core Motion Layers
1. **Smooth Scroll Engine:** Lenis smooth scrolling orchestrating desktop inertia.
2. **Custom Contextual Cursor:**
   - Default: `6px` precision dot with a magnetic dampening follower.
   - Over Imagery: Expands into subtle `[ EXPLORE TRIAL + ]` or `[ VIEW CROP ]` badge.
   - Over Buttons: Magnetic pull with subtle radius deformation.
3. **Scroll-Driven Storytelling (Framer Motion & CSS Transitions):**
   - Split-screen pinning for Agronomy Consulting vs. Research Trials.
   - Horizontal timeline for Research lifecycle (01 Establishment → 06 Insights).
   - Horizontal scrub for Crop Gallery (12 key North Queensland crops).
4. **Cinematic Hero Entry:**
   - Soft curtain unmasking (`clip-path: inset(0 0 100% 0) -> inset(0 0 0% 0)`).
   - Split-line typography stagger.
   - Ambient drone/canopy motion with mouse-tilt micro-parallax.

---

## 3. Page Hierarchy & Narrative Journey

- **01. Cinematic Hero Experience:** Full-viewport canopy/field visual, minimal typography ("YOUR CROP COMES FIRST"), calm entry, primary CTA: "Talk to an Agronomist", secondary: "Explore Research & Trials".
- **02. Editorial Statement & Value Pillars:** "FIELD EXPERIENCE. SCIENTIFIC THINKING. BETTER CROP DECISIONS." with dual split-screen interaction (Agronomy Consulting vs. Research & Field Trials).
- **03. Interactive Agronomy Explorer:** 11 capabilities presented as technical case-study dossiers with dynamic image switching and agronomic metadata.
- **04. Research & Field Trials Pipeline:** 6-stage scientific protocol (01 Trial Establishment to 06 Results & Insights) with AgriQuest partnership representation.
- **05. North Queensland Crop Ecosystem:** 12 commercial crops (Tomatoes, Sweetcorn, Popcorn, Cotton, Mung beans, Soybeans, Green beans, Hemp, Cowpea, Capsicum, Chilli, Eggplant) in an interactive gallery.
- **06. Regional Coverage Map:** Custom North Queensland interactive map highlighting Bowen and Burdekin hubs with soil/climate indicators.
- **07. Authentic Field Experience:** Editorial photography showing genuine crop scouting, leaf tissue testing, and field walking.
- **08. Credibility & Factual Stats:** Non-gimmicky capability statements anchoring independent grower-first advice.
- **09. Editorial About / Independence:** Story of Agrovia, field philosophy, human touch, and why growers trust an independent partner.
- **10. Premium Contact Experience:** Clean enquiry interface with direct dispatch to `dev.p@agrovia.au`.
- **11. Modular Invoicing & Admin System:** Standalone secure portal for quote creation, conversion to tax invoices, GST calculations, and Agrovia-branded PDF generation.

---

## 4. Component Architecture & File Tree

```
agrovia/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Metadata, Fonts, Lenis Smooth Scroll Provider, Custom Cursor
│   │   ├── page.tsx                  # Master Cinematic Homepage Flow
│   │   ├── about/page.tsx            # Deep Story, Philosophy, Field Leadership
│   │   ├── agronomy/page.tsx         # Detailed Agronomy Services & Methodology
│   │   ├── research/page.tsx         # Research Trials, AgriQuest Protocol & Data
│   │   ├── crops/page.tsx            # Full Crop Ecosystem
│   │   ├── regions/page.tsx          # Bowen & Burdekin Regional Focus
│   │   ├── contact/page.tsx          # Dedicated In-Depth Enquiry Dispatch
│   │   ├── admin/                    # Secure Admin Environment
│   │   │   ├── page.tsx              # Invoicing & Quotes Dashboard
│   │   │   ├── quotes/               # Quote Creation & Conversion
│   │   │   └── invoices/             # PDF Generation, Status Management
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Contact Enquiry Dispatch (dev.p@agrovia.au)
│   │   │   └── invoices/route.ts     # Invoicing Engine / Quote API
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx      # Multi-state magnetic fluid cursor
│   │   │   ├── Navigation.tsx        # Floating glass-morphism header
│   │   │   ├── Footer.tsx            # Architectural brand footer
│   │   │   ├── SmoothScroll.tsx      # Lenis wrapper with frame sync
│   │   │   └── PageTransition.tsx    # Cinematic route transitions
│   │   ├── hero/
│   │   │   └── HeroSection.tsx       # Cinematic video/image reveal with mouse tilt
│   │   ├── intro/
│   │   │   └── EditorialPillars.tsx  # Pinned split-screen Agronomy vs. Research
│   │   ├── agronomy/
│   │   │   └── ServiceExplorer.tsx   # Interactive 11-service technical explorer
│   │   ├── research/
│   │   │   ├── ResearchTimeline.tsx  # 6-step animated field-trial sequence
│   │   │   └── AgriQuestBadge.tsx    # Accurate, elegant partnership showcase
│   │   ├── crops/
│   │   │   └── CropGallery.tsx       # Horizontal crop ecosystem with drawer
│   │   ├── regions/
│   │   │   └── QueenslandMap.tsx     # Custom SVG interactive Bowen/Burdekin map
│   │   ├── field/
│   │   │   └── FieldPhotoEssay.tsx   # Real field-work editorial photo grid
│   │   ├── trust/
│   │   │   └── CapabilityStats.tsx   # Verified regional & field capability badges
│   │   ├── contact/
│   │   │   └── ContactForm.tsx       # Precision inquiry form with dev.p@agrovia.au
│   │   └── admin/
│   │   │   └── InvoiceBuilder.tsx    # Professional Agrovia-branded invoicing & PDF
│   ├── content/                      # Editable CMS JSON stores (Services, Crops, Trials)
│   ├── lib/
│   │   ├── utils.ts                  # Tailwind clsx/cn helpers
│   │   └── seo.ts                    # Structured data, JSON-LD schemas
│   └── styles/
│       └── globals.css               # Typography variables, custom scrollbars, noise
```
