---
name: siyai-design
description: Use this skill to generate well-branded interfaces and assets for SiyAI, an AI-powered emotional storytelling platform that turns memories into personalised films, songs, and cinematic experiences. The visual language is Apple × A24 × emotional AI. Cinematic, calm, warm, never corporate.
user-invocable: true
---

# SiyAI Design Skill

Read `README.md` for the full brand brief, content voice, visual foundations, motion rules, and iconography. Then explore:

- `colors_and_type.css`. All design tokens (colors, type, spacing, radii, shadows, motion, glass)
- `preview/`. Spec cards for every part of the system
- `ui_kits/app/`. Flagship app interface (studio + library)
- `ui_kits/marketing/`. Cinematic marketing landing
- `ui_kits/mobile/`. Mobile home + now-playing
- `assets/ICONOGRAPHY.md`. Icon system (Lucide, 1.5px stroke, no emoji)

## When invoked without guidance

Ask the user what they want to build. Probable surfaces: app screen, marketing section, deck, social card, email. Then act as an expert SiyAI designer.

## Non-negotiables

- **Voice is human, gentle, never technical.** Replace *"AI", "prompt", "generate", "process"* with *"made for you", "tell us", "bring to life", "weave"*.
- **70–80% ivory canvas.** Color enters as light, not paint.
- **Italic serif (Fraunces)** is the emotional voice. Use generously in display + pull quotes.
- **Mint is the primary action color.** Gold is *magic only* (story completion moments).
- **No emoji. No em dashes (`—`) anywhere.** Use periods, commas, or colons. No drop-shadows for weight. Shadows are glow halos.
- **The breathing orb** is the brand's signature artwork for AI moments.

If building production code, copy the CSS tokens directly. If building a static HTML artifact for the user, link `colors_and_type.css` and follow the component patterns from the UI kits.
