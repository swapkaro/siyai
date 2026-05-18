# SiyAI Design System

> *"This feels like the future of human storytelling."*

SiyAI is a **personalised storytelling platform** for the AI era. People share a memory, a feeling, a thought. And SiyAI turns it into a **cinematic film, a song, or an immersive storytelling experience** made just for them.

> *"Like having an army of filmmakers, musicians, writers and storytellers working personally for you."*

Users don't prompt. They don't edit. They don't direct. They just *share*. And SiyAI understands the emotional context underneath and crafts a story around it.

The design system is the visual language that makes that transformation feel *human, magical, and cinematic*. Not technical.

**The vibe:** Apple × A24 × futuristic emotional AI.

---

## WHAT STORIES ARE FOR

Stories made on SiyAI live a few different lives:

- **Kept**. Preserved privately, revisited forever
- **Shared**. Sent to the people in them, or about them
- **Gifted**. A piece made *for* someone, given as a moment
- **Hero**. The user is the protagonist; the story sees them clearly

The product must support all four. The UI for *making* is the same, but the after-moment (save / send / gift / keep private) is a distinct surface.

---

## CAPSULES, OCCASIONS, TIME

SiyAI is also a place to **send stories forward.** A capsule is a piece written today and sealed until a future moment. A birthday, an anniversary, a date in the years. This adds five lifecycle states beyond the original four:

| State | Visual | When |
|---|---|---|
| **Scheduled** | Mint dot · static | A future delivery you set |
| **Arriving soon** | Emerald dot · breathing | Within 48 hours |
| **Recurring** | Gold dot | Annual / seasonal |
| **Sealed** | Outlined ink dot | Locked until a long-future date |
| **Delivered** | Sky dot | Past. Already arrived |

**Time copy rules**. *italic Fraunces for moments*, mono for technical dates.

- ✓ *"Arrives on a Tuesday in June"*, *"in 27 days"*, *"sealed for 7 years"*
- ✗ "06/14/2026", "scheduled_delivery: 2026-06-14T09:00", "7y 14d 03h"

**Capsule visual signature**. The *seal*. A small pill in the top-right of the cover with a status dot. Sealed (locked) capsules dim their cover and float a quiet lock-mark in the middle. The signature gesture: *"For Mum · on her birthday"* in mono on top, *"A song from your **kitchen, summer**"* in italic display below.

---

## INDEX

| File | What's inside |
|---|---|
| `colors_and_type.css` | All design tokens. Colors, type ramps, spacing, radii, shadows, motion |
| `preview/` | Spec cards that populate the Design System tab |
| `ui_kits/app/` | SiyAI app. The story creator + library experience |
| `ui_kits/marketing/` | SiyAI marketing site. Cinematic landing |
| `assets/` | Logo, mark, ambient placeholders |
| `SKILL.md` | Agent-readable skill manifest |

---

## BRAND ESSENCE

| Is | Is not |
|---|---|
| Emotional futurism | Generic SaaS |
| Cinematic storytelling | Corporate AI |
| Calm premium technology | Productivity software |
| Human-first | Developer tools |
| Warm and magical | Cold/cyberpunk |
| Editorial and quiet | Loud and neon |

**One-line:** *A place where stories come alive beautifully.*

---

## CONTENT FUNDAMENTALS

**Voice. Emotionally intelligent, never clinical.**

- First person, gentle. We say *"your memory,"* *"a song from your evening,"* *"what do you want to feel?"*
- We never say *"AI-powered,"* *"prompt,"* *"generate,"* *"output,"* *"workflow,"* *"productivity."*
- We replace those with *"made for you,"* *"tell us about it,"* *"bring to life,"* *"a piece,"* *"a film,"* *"a story."*

**Casing**
- Sentence case for everything in product. Headings, buttons, menus.
- Title Case is reserved for proper nouns and the SiyAI mark.
- ALL CAPS only for section eyebrows, sparingly, with wide tracking (`+0.2em`).

**Emotional copy. Examples**

| Generic | SiyAI |
|---|---|
| Upload a photo | Show us the moment |
| Generate a song | Turn it into music |
| Processing… | Listening to your story… |
| AI is thinking | Finding the feeling |
| Create new project | Begin a new story |
| Error: Failed | Something's off. Let's try that again. |
| Welcome back | Welcome back. What are we making today? |

**Microcopy rules**
- One thought per sentence. Don't stack clauses.
- Use *italics in serif* for emotional emphasis, never bold.
- **No em dashes (`—`) anywhere.** Use periods, commas, or colons. Em dashes feel mannered and AI-generated; clean punctuation feels human.
- Ellipses are reserved for things in motion (*"Listening…"*, *"Weaving…"*).
- No emoji. We use light, type, and motion instead.

**Names for AI moments**. When the system is working, it has a verb. *Listening, weaving, finding, scoring, dreaming, gathering.* Never *"processing"* or *"loading."*

---

## VISUAL FOUNDATIONS

### Color philosophy
**70–80% of any screen is Ivory (#FFFDF7) or near-white.** This is the canvas. Color enters as *light*, not as paint. **Pure white (#FFFFFF) is never used as a page background**. Only inside elevated cards on ivory, to suggest a sheet of paper lifted from the desk.

- **Emerald (#40E0B0)** is the primary action color. The fill of the single primary CTA on a screen. *(Mint is too pastel to claim hierarchy on ivory; we don't use it as a CTA fill.)*
- **Mint (#9AE19D)** is the *halo* around the primary action. A soft glow shadow, never a surface.
- **Seafoam + Sky** are atmospheric. Used for ambient gradients, glow halos behind imagery, hero washes.
- **Warm Gold** is *magic dust*. Used only for the moment of AI transformation, completion states, and 1-pixel accent details. Never as a fill on UI.
- **Deep Ink (#0D0F17)** is for text and the very rare dark surface (a fullscreen film viewer, a modal at night). Used as a *CTA fill* on dark sections and over imagery.

Color is never harsh. Always softened by ivory, never placed on pure white.

### Gradients
SiyAI gradients are **ambient**, not decorative. Three patterns:

1. **Dawn wash**. Ivory → Seafoam (8%) → Sky (6%). Vertical, top-down. Used on heroes and empty states.
2. **Aurora halo**. Radial Mint→Seafoam→transparent at 30% opacity, behind a focal element. The element appears to *glow from within its environment.*
3. **Gold breath**. Radial Warm Gold→transparent at 18%, applied only during a story-completion moment.

Never use multi-stop saturated gradients. Never `linear-gradient(45deg, neon→neon)`.

### Typography
- **Display serif:** *Fraunces*. Warm, characterful, variable optical sizing. Large display sizes get soft expressive details; small UI text stays clean. Used for headlines, hero, emotional pull quotes. Italic is the emotional voice.
- **Body sans:** *Geist*. Quiet modern sans. Used for UI, body, captions.
- **Mono:** *Geist Mono*. Only for technical metadata (durations, file names, timestamps).

Type is generous. Line-height for display is tight (1.0–1.05). Line-height for body is open (1.55–1.7). Letter-spacing on display is negative (–0.02em); on body it's neutral; on eyebrows it's positive (+0.2em).

### Spacing
Base unit: **4px.** Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192.

Spacing is *cinematic*. Give things room to breathe. A hero section uses 128–192 of vertical padding. A card uses 24–32 of internal padding. Never less than 16 between thought-units.

### Corner radii
Soft, never sharp, never pill-by-default.
- `radius-sm` 8 · `radius-md` 16 · `radius-lg` 24 · `radius-xl` 32 · `radius-2xl` 44 · `radius-pill` 9999

Cards are 24. Cinematic cards are 32. Buttons are 9999 (pill) or 16 (rectangular, deliberate).

### Shadows. *light, not weight*
Shadows are atmospheric, not gravity. They suggest a halo of light, not a drop.

- `shadow-glow-soft`. 0 30px 80px –30px rgba(64, 224, 176, 0.18)
- `shadow-glow-mint`. 0 20px 60px –20px rgba(154, 225, 157, 0.32)
- `shadow-glow-sky`. 0 30px 90px –20px rgba(166, 227, 255, 0.30)
- `shadow-glow-gold`. 0 20px 80px –20px rgba(246, 213, 138, 0.45) *(magic moment only)*
- `shadow-card`. 0 1px 2px rgba(13,15,23,0.04), 0 20px 40px –24px rgba(13,15,23,0.08)

Never use `box-shadow: 0 4px 8px black`. We don't have weight; we have light.

### Borders
1px hairlines in `rgba(13,15,23, 0.06)` on ivory. 0.5px equivalent welcome on retina. Borders are quiet. They suggest planes, they don't divide.

### Glass
Used sparingly. Only on **floating panels, modals, and the play-bar over imagery.**
- `background: rgba(255, 253, 247, 0.65); backdrop-filter: blur(28px) saturate(140%);`
- Always carries a 1px ivory border on top to feel like a sheet of glass.

### Imagery
- All imagery is *warm-graded*, slightly desaturated, with a film-grain feel.
- Faces and hands feature heavily. Never stock photography.
- Aspect ratios trend cinematic: 21:9, 2:1, 4:5 portrait. Avoid square unless a song cover.
- Never AI-generated-looking. Never illustrations of robots, brains, networks, neurons.
- Placeholder treatment: warm ivory plane with a soft mint glow and *italic serif label*. "*moment of light*", "*hands at dusk*".

### Motion
- **Default ease:** `cubic-bezier(0.22, 0.61, 0.36, 1)`. Cinematic out-ease.
- **Slow:** 600ms. **Medium:** 360ms. **Quick:** 200ms. **Reveal:** 900ms.
- Floating elements drift on a 6–10s sine. Glow halos breathe on a 4s cycle.
- Hover states never scale up. They *brighten* (+4% lightness) or grow the glow halo.
- Press states drop 1% scale and dim glow.
- Page reveals are *fade + 16px rise*, never slide-in from sides.
- A "story being made" has a named motion: **the weave**. Particles drift, halo breathes, text glides.

### Iconography
Stroke-based, 1.5px, rounded caps, rounded joins. Generous corners. We use **Lucide** as our icon set via CDN (closest match to the brand voice. Calm, drawn lines). Documented in `assets/ICONOGRAPHY.md`. **No emoji.** No filled glyph icons. Icons are quiet companions to type, never the main element.

### Layout rules
- Single-column reading widths max **680px**.
- Cinematic content rows use 1280–1440 max width with 32–48px gutters.
- The product never feels cramped. If in doubt, double the padding.

---

## INTERACTION PHILOSOPHY

Every interaction is **gentle, inviting, non-intimidating.** The user is a storyteller, not an operator. We never expose technical machinery. We never show progress bars in percentages. We show *moments* ("listening…", "finding the feeling…", "scoring it…").

---

## CAVEATS. Please review

- This system was built from your brief alone (no codebase or Figma was attached). The logo is a typographic mark + a soft "ai-petal" graphic. Please share a real logo if one exists.
- Type pairing is *Fraunces* + *Geist* (Google Fonts). Both are free, web-safe, and aesthetically aligned. If you have a licensed display face (e.g. GT Sectra, Söhne), swap the variables at the top of `colors_and_type.css`.
- Imagery in the UI kits uses warm ivory placeholders with italic labels. These are intentionally not real photos. They are the right placeholder treatment per the visual foundations.
- No emoji used anywhere. If you want any, tell me where.

> **Sharing this with your org:** in the Share menu, set the project's File Type to **Design System** so collaborators see the spec cards instead of raw files.
