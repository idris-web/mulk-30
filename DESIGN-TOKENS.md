# 🎨 Mulk-30 Design Tokens

**Version:** 1.0.0  
**Aktualisiert:** 6. Februar 2026

---

## Farben

### Primary (Teal)
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-primary` | `#088395` | `#0A9DAD` | CTAs, Links, Aktive States |
| `--color-primary-light` | `#0A9DAD` | `#3DBDCD` | Hover States |
| `--color-primary-dark` | `#09637E` | `#088395` | Active/Pressed States |
| `--color-accent` | `#7AB2B2` | `#7AB2B2` | Sekundäre Akzente |

### Step-Farben (Lernphasen)
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-step-listen` | `#10B981` | `#34D399` | Dëgjo (Hören) |
| `--color-step-read` | `#0EA5E9` | `#38BDF8` | Lexo (Lesen) |
| `--color-step-recite` | `#8B5CF6` | `#A78BFA` | Recito (Rezitieren) |

### Backgrounds
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-background` | `#EBF4F6` | `#051E26` | Page Background |
| `--color-surface` | `#FFFFFF` | `#0A323D` | Cards, Modals |
| `--color-header` | `#09637E` | `#051E26` | Header Background |

### Text
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-text` | `#1A3C40` | `#EBF4F6` | Primary Text |
| `--color-text-secondary` | `#3D6A70` | `#A0D0D0` | Secondary Text, Labels |

### Borders
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-border` | `#B8D4D8` | `#1A5A6A` | Card Borders, Dividers |

### Semantic
| Token | Light | Dark | Verwendung |
|-------|-------|------|------------|
| `--color-success` | `#10B981` | `#34D399` | Erfolg, Completed |
| `--color-error` | `#EF4444` | `#F87171` | Fehler, Destructive |

---

## Border Radius

| Token | Wert | Verwendung |
|-------|------|------------|
| `--radius-sm` | `0.5rem` (8px) | Kleine Elemente, Tags |
| `--radius-md` | `0.75rem` (12px) | Inputs, kleine Buttons |
| `--radius-lg` | `1rem` (16px) | Buttons |
| `--radius-xl` | `1.5rem` (24px) | Cards |
| `--radius-full` | `9999px` | Pills, Avatare, Icon-Buttons |

---

## Typography

### Headings
| Klasse | Size | Weight | Verwendung |
|--------|------|--------|------------|
| `.heading-page` | 24px | 700 | Page Titles |
| `.heading-section` | 18px | 600 | Section Titles |
| `.heading-card` | 16px | 600 | Card Titles |

### Body Text
| Klasse | Size | Verwendung |
|--------|------|------------|
| `.text-body` | 16px | Normal Body Text |
| `.text-body-sm` | 14px | Secondary Body Text |

### Labels
| Klasse | Size | Verwendung |
|--------|------|------------|
| `.text-label` | 14px | Form Labels, wichtige Labels |
| `.text-label-sm` | 12px | Badges, Captions, Timestamps |

### Arabic Text
| Klasse | Eigenschaften |
|--------|---------------|
| `.arabic` | UthmanicHafs Font, RTL, line-height 2.2 |
| `.arabic-large` | 32px, line-height 2.5 |
| `.arabic-xl` | 40px, line-height 2.8 |

---

## Spacing

Basiert auf 4px Grid (Tailwind `--spacing: 0.25rem`):

| Tailwind | Wert | Verwendung |
|----------|------|------------|
| `p-1` | 4px | Minimal |
| `p-2` | 8px | Tight |
| `p-3` | 12px | Compact |
| `p-4` | 16px | Default |
| `p-5` | 20px | Comfortable |
| `p-6` | 24px | Cards innen |
| `p-8` | 32px | Hero Sections |

---

## Shadows

**Design-Entscheidung: TRUE FLAT**

Keine Shadows auf:
- Buttons
- Cards
- Interactive Elements

Einzige Ausnahme:
| Element | Shadow |
|---------|--------|
| Modal | `0 4px 16px rgba(0,0,0,0.1)` |

---

## Transitions

| Typ | Duration | Easing | Verwendung |
|-----|----------|--------|------------|
| Fast | 150ms | ease-out | Hover, Focus |
| Normal | 200ms | ease-out | State Changes |
| Slow | 300ms | ease-out | Modal Open/Close |

### Erlaubte Properties
```css
transition: background-color, border-color, color, transform, opacity;
```

**NIEMALS:** `transition: all` (Performance-Problem)

---

## Touch Targets

| Element | Minimum Size |
|---------|--------------|
| Buttons | 44px height |
| Icon Buttons | 44x44px |
| Nav Items | 44px height |
| Form Inputs | 44px height |

---

## Components

### Buttons
| Klasse | Verwendung |
|--------|------------|
| `.btn` | Base Button |
| `.btn-primary` | Primary CTA |
| `.btn-secondary` | Secondary Action |
| `.btn-icon` | Icon-only (Pill) |
| `.btn-listen` | Step 1 Action |
| `.btn-read` | Step 2 Action |
| `.btn-recite` | Step 3 Action |

### Cards
| Klasse | Verwendung |
|--------|------------|
| `.card` | Standard Card |
| `.card-interactive` | Clickable Card |
| `.card-hero` | Prominent Card (Arabic Text) |

### Navigation
| Klasse | Verwendung |
|--------|------------|
| `.nav-item` | Bottom Nav Item |
| `.nav-item.active` | Active State |

---

## Z-Index Scale

| Wert | Verwendung |
|------|------------|
| `z-10` | Sticky Headers |
| `z-20` | Floating CTAs |
| `z-40` | Fixed Action Bar |
| `z-50` | Modals, Overlays |

---

## Breakpoints

| Name | Width | Verwendung |
|------|-------|------------|
| Default | < 640px | Mobile (Primary) |
| `sm:` | ≥ 640px | Small Tablets |
| `md:` | ≥ 768px | Tablets |
| `lg:` | ≥ 1024px | Desktop |

**Note:** App ist Mobile-First. `max-w-lg` (512px) für Content Container.

---

## Safe Areas (iOS PWA)

```css
.safe-top {
  padding-top: max(0.75rem, env(safe-area-inset-top));
}

.safe-bottom {
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
}
```

---

## CSS Variables (Copy-Paste)

```css
:root {
  /* Primary */
  --color-primary: #088395;
  --color-primary-light: #0A9DAD;
  --color-primary-dark: #09637E;
  --color-accent: #7AB2B2;
  
  /* Steps */
  --color-step-listen: #10B981;
  --color-step-read: #0EA5E9;
  --color-step-recite: #8B5CF6;
  
  /* Backgrounds */
  --color-background: #EBF4F6;
  --color-surface: #FFFFFF;
  --color-header: #09637E;
  
  /* Text */
  --color-text: #1A3C40;
  --color-text-secondary: #3D6A70;
  
  /* Border */
  --color-border: #B8D4D8;
  
  /* Semantic */
  --color-success: #10B981;
  --color-error: #EF4444;
  
  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
}
```

---

## Dark Mode Variables

```css
.dark {
  --color-primary: #0A9DAD;
  --color-primary-light: #3DBDCD;
  --color-primary-dark: #088395;
  --color-step-listen: #34D399;
  --color-step-read: #38BDF8;
  --color-step-recite: #A78BFA;
  --color-background: #051E26;
  --color-surface: #0A323D;
  --color-header: #051E26;
  --color-text: #EBF4F6;
  --color-text-secondary: #A0D0D0;
  --color-border: #1A5A6A;
  --color-success: #34D399;
  --color-error: #F87171;
}
```

---

*Design Tokens dokumentiert von Idreasy — 6. Februar 2026*
