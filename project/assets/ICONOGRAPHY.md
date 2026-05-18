# Iconography · SiyAI

SiyAI uses **Lucide** as its icon set. Loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="sparkles"></i>
<script>lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });</script>
```

## Rules

- **Stroke weight:** 1.5px. Always. Never 1, never 2.
- **Style:** stroke-based, rounded caps & joins. **No** filled glyphs.
- **Color:** inherits text color (`currentColor`). Icons sit next to type, in the type color.
- **Size:** 14px in body runs, 18–20px in nav, 24px standalone. Never larger than the headline next to them.
- **No emoji.** Anywhere.
- **Halo / glow:** never on icons. Glow belongs to the orb and product imagery.

## Preferred glyphs

| Concept | Lucide name |
|---|---|
| AI / magic | `sparkles` |
| Film / video | `film` |
| Song / music | `music` |
| Letter | `feather` |
| Listening | `mic` |
| Play | `play` |
| Pause | `pause` |
| Save | `bookmark` |
| Image upload | `image` |
| Library | `library` |
| Dreams | `moon-star` |
| Settings | `settings` |
| Search | `search` |
| Add | `plus` |
| Forward | `arrow-right` |

## Substitution note

Lucide is a CDN substitute chosen as the closest aesthetic match to the brand voice (calm, drawn lines, generous corners). If a licensed icon family is preferred, swap the `<i data-lucide>` lines with that system. Keep stroke weight at 1.5px.
