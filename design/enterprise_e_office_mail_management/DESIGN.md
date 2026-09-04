---
name: Enterprise E-Office & Mail Management
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e1'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3fa'
  surface-container: '#eeedf4'
  surface-container-high: '#e9e7ef'
  surface-container-highest: '#e3e1e9'
  on-surface: '#1a1b21'
  on-surface-variant: '#444651'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f1f0f7'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#3e2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#5c3800'
  on-tertiary-container: '#ef9900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#1a1b21'
  surface-variant: '#e3e1e9'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  code:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-columns: '12'
  margin-desktop: 2rem
  margin-mobile: 1rem
  gutter: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system establishes a clean, authoritative, and modern corporate aesthetic tailored for enterprise e-office and mail management environments. It is engineered to evoke absolute reliability, operational clarity, and high-performance focus.

### Brand Personality & Audience
- **Target Audience:** Enterprise professionals, administrative officers, executives, and compliance personnel who require uncompromised efficiency and precision.
- **Emotional Response:** Trust, calm control, systematic organization, and heightened focus. The UI minimizes cognitive load through rigorous information hierarchy and dependable visual cues.

### Design Style
The system adopts a refined **Corporate / Modern** style, combining systematic grid layouts with high-utility components, subtle ambient shadows, and purposeful color accents to guide complex bureaucratic workflows.

## Colors

The color palette is built for professional authority and effortless scannability in high-density data environments. 

- **Primary (Deep Navy `#1E3A8A`):** Commands structural stability, used for primary navigation, headers, and core brand touchpoints.
- **Secondary (Vibrant Teal `#0D9488`):** Provides high-contrast interactive feedback, active states, and key call-to-action elements.
- **Accent (Amber `#F59E0B`):** Reserved strictly for status badges, pending workflows, and urgent indicators.
- **Neutrals:** Built on a slate scale, utilizing `#0F172A` for high-legibility text and `#F8FAFC` for clean, expansive canvas backgrounds.

## Typography

Typography is systematic and utilitarian, prioritizing scanning speed and legibility across dense mail logs, document archives, and metadata tables.

### Hierarchy & Scaling
- Headings maintain tight tracking (`-0.02em` to `-0.01em`) for an authoritative, compact footprint.
- Body sizes are calibrated around 14px (`body-md`) as the standard enterprise operational baseline, ensuring maximum data density without inducing visual fatigue.
- Font weights are restricted to regular (`400`), medium (`500`), and semi-bold (`600`) to maintain a disciplined typographic voice.

## Layout & Spacing

The layout model employs a disciplined **12-column fixed grid** with fluid scaling behaviors to support multi-pane mail management layouts (e.g., folder tree, message list, and reading pane).

### Spacing Rhythm
Built on an 8px base grid, spacing tokens scale predictably to separate form controls, table rows, and structural panels. Margins adapt dynamically from mobile (16px) to desktop (32px), ensuring ample breathing room around complex administrative toolbars.

## Elevation & Depth

Visual hierarchy relies on a combination of **tonal layers** and **subtle ambient shadows** to establish clear containment between mail trays, toolbars, and modal dialogs.

- **Base Surfaces:** Canvas areas sit at the lowest elevation (`slate-50`).
- **Containers & Cards:** Elevated via clean 1px borders (`slate-200`) paired with whisper-light shadows (`0 1px 2px 0 rgba(15, 23, 42, 0.05)`) to denote interactable document records.
- **Overlays & Modals:** Utilize higher diffusion shadows (`0 10px 15px -3px rgba(15, 23, 42, 0.1)`) to command absolute focus above the workspace.

## Shapes

The shape language is strictly **Soft** (roundedness level `1`), featuring clean 0.25rem corner radii for standard inputs and buttons, scaling up to 0.5rem (`rounded-lg`) for major container cards and modals. This restrained curvature projects polished professionalism without appearing casual or overly playful.

## Components

All components are engineered for maximum operational efficiency, high-density data handling, and rapid scanning.

### Buttons
- **Primary:** Deep navy background (`#1E3A8A`) with white label text, 0.25rem border-radius, and crisp hover/focus state transitions using secondary teal accents where appropriate.
- **Secondary / Ghost:** Transparent backgrounds with slate border outlines for tertiary actions, minimizing visual clutter in toolbar rows.

### Input Fields
- High-contrast border (`slate-300`), 14px body text, and clear focus rings in vibrant teal (`#0D9488`). Integrated error and success validation icons inline.

### Cards & Mail Containers
- Crisp card containers featuring a 1px solid neutral border, subtle drop shadow, and generous internal padding (16px–24px). Designed to house structured metadata like dispatch dates, tracking numbers, and sender designations.

### Status Badges
- Pill-shaped or soft-rounded indicators utilizing the amber accent (`#F59E0B`) for pending/in-review items, paired with semantic greens for approved items and slate for archived logs.

### Lists & Tables
- High-density data tables featuring alternating row treatments or clean divider lines, fixed table headers, and truncated cell content with tooltip expansions for secure mail metadata.