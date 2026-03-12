# Design Guideline — Wendy Liang Portfolio

Design principle: **Comfortable and easy to read** (舒服、易读)

---

## Colors

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#F5F3EE` | Page background |
| `primary` | `#F2FCE2` | Button highlight (light green) |
| `accent-teal` | `#5B9B8E` | CTA buttons, section labels, accent text |

### Text Colors (Gray Scale)
| Class | Usage |
|-------|-------|
| `text-gray-900` | Headings, strong emphasis, author names |
| `text-gray-800` | Blockquote text |
| `text-gray-700` | Body text (paragraphs, descriptions) |
| `text-gray-600` | Secondary text (meta info, captions, roles) |
| `text-gray-500` | Tertiary text (labels, afterCards italic) |
| `text-gray-400` | Decorative (arrows, subtle metadata) |

### Semantic Colors (Case Study Blocks)
| Type | Background | Border | Text |
|------|-----------|--------|------|
| Challenge | `bg-red-50` | `border-red-500` | `text-red-700` |
| Insight | `bg-blue-50` | `border-blue-500` | `text-blue-700` |
| Solution | `bg-green-50` | `border-green-500` | `text-green-700` |

---

## Typography

### Font
Lato (Google Fonts), with `sans-serif` fallback.

### Heading Scale
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | `text-5xl md:text-6xl` | `font-bold` | Project title (detail page) |
| H2 | `text-3xl md:text-4xl` | `font-bold` | Section headings (Impact, What I Learned) |
| H2 (in card) | `text-xl md:text-2xl` | `font-bold` | Decision block titles |
| Section Label | `text-xs uppercase tracking-[0.15em]` | `font-bold` | Teal label above section (THE PROBLEM, IMPACT) |

### Body Text
| Type | Size | Color | Line Height |
|------|------|-------|-------------|
| Overview / main prose | `text-lg` | `text-gray-700` | `leading-[1.8]` |
| Card content | `text-[0.95rem]` | `text-gray-600` | `leading-[1.6]` |
| Takeaway paragraphs | `text-[1.05rem]` | `text-gray-600` | `leading-[1.7]` |
| Blockquote (testimonial) | `text-lg italic` | `text-gray-800` | `leading-[1.8]` |
| Meta labels | `text-sm uppercase tracking-wide` | `text-gray-500` | default |

---

## Spacing

### Section Spacing (Vertical Rhythm)
| Tier | Tailwind | px | Usage |
|------|----------|-----|-------|
| **Page sections** | `space-y-16` | 64 | Between major sections (Impact → Quotes → Takeaways) |
| **Related items** | `space-y-6` | 24 | Between cards in a group (quote cards, takeaway items) |
| **Inner elements** | `mt-4` | 16 | Between elements inside a section (text → cards → flow) |
| **Tight** | `gap-2` / `mt-2` | 8 | Icon+label, small gaps |

### Page Padding
| Area | Tailwind | Notes |
|------|----------|-------|
| Page horizontal | `px-6` | All pages |
| Page top | `pt-32` | Clears fixed nav |
| Page bottom | `pb-20` | Comfortable footer space |
| Home horizontal | `px-8 md:px-16 lg:px-24` | Wider on larger screens |

### Card Padding
| Card Type | Padding | Radius | Usage |
|-----------|---------|--------|-------|
| **Large card** | `p-8 md:p-10` | `rounded-2xl` | Testimonial, stakeholder feedback, decision blocks |
| **Medium card** | `p-6` | `rounded-xl` | Impact cards, section cards (root causes, etc.) |
| **Small element** | `px-5 py-2.5` | `rounded-lg` | Flow step badges |

### Grid Gaps
| Context | Gap | Usage |
|---------|-----|-------|
| Impact cards grid | `gap-6` | 3-column card grid |
| Section cards grid | `gap-4` | Cards within a section |
| Image grid | `gap-6` | Multiple images side by side |

---

## Component Patterns

### White Card
```
bg-white [padding] [radius]
```
Always on `bg-cream` background for contrast.

### Colored Block (Challenge/Insight/Solution)
```
bg-[color]-50 border-l-[3px] border-[color]-500 px-5 py-4 rounded-r-lg
```

### Quote Card
```
bg-white p-8 md:p-10 rounded-2xl
  └─ blockquote: text-lg italic text-gray-800 leading-[1.8] mb-4
  └─ author: font-bold text-gray-900 + role: text-gray-600
```

### Section Label
```
text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3
```

---

## Container Widths
| Class | Usage |
|-------|-------|
| `max-w-5xl` | Project detail content |
| `max-w-7xl` | Home page sections |
| `max-w-prose` | Long-form text readability |
