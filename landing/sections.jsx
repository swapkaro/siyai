/* sections.jsx — the ten sections of the synthesis, in order. */

const HERO_VARIANTS = {
  stories:    { a: 'A place where',     b: 'stories live.' },
  memory:     { a: 'A place where',     b: 'memory lives.'  },
  comeAlive:  { a: 'Where stories',     b: 'come alive.'    },
};

function Hero({ variant = 'stories' }) {
  const v = HERO_VARIANTS[variant] || HERO_VARIANTS.stories;
  return (
    <Stop
      id="hero"
      height="100vh"
      bars={true}
      footMeta="A place"
      accent={
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(40% 55% at 50% 52%, var(--tk-light-h1), transparent 70%)',
        }} />
      }
    >
      <div className="hero-stage">
        <Reveal className="eyebrow hero-eyebrow" d={1}>A letter from SiyAI &middot; Spring 2026</Reveal>
        <Reveal className="hero-orb-wrap" d={2}><Orb size="big" /></Reveal>
        <Reveal className="hero-line ser" d={3}>
          {v.a}<br />
          <span className="em">{v.b}</span>
        </Reveal>
        <Reveal className="hero-cue" d={5}>Scroll, when you are ready.</Reveal>
      </div>
    </Stop>
  );
}

function HeldBreathStop({ holdDuration = 9 }) {
  // The 'held' duration is communicated, not enforced (we never block scroll).
  // It is what the orb's pulse counts to, and what the meta says.
  const meta = `Held for 00:${String(holdDuration).padStart(2, '0')}`;
  return (
    <Stop
      id="remembered"
      height="68vh"
      bars={true}
      footMeta={meta}
      accent={
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(35% 55% at 50% 55%, var(--tk-light-h1), transparent 70%)',
        }} />
      }
    >
      <div style={{ textAlign: 'center' }}>
        <Reveal d={1} style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <Orb size="small" />
        </Reveal>
        <Reveal d={3} className="remembered-word ser">remembered.</Reveal>
      </div>
    </Stop>
  );
}

function WaitingRoom() {
  // Six waiting frames — metadata only. The story so far.
  const frames = [
    { kind: 'Voice',  m1: 'Nani',     m2: '00:24',  it: 'a laugh,',         itEm: 'kept by accident.' },
    { kind: 'Film',   m1: 'For Maa',  m2: '01:42',  it: 'seventy years,',   itEm: 'in ninety seconds.' },
    { kind: 'Letter', m1: 'Unread',   m2: '1998',   it: "in Papa's hand,",  itEm: 'still folded.' },
    { kind: 'Photo',  m1: 'Delhi',    m2: '1971',   it: 'a doorway,',       itEm: 'before us.' },
    { kind: 'Song',   m1: 'Bhai',     m2: '03:12',  it: 'the song that',    itEm: 'got us married.' },
    { kind: 'Film',   m1: 'Diwali',   m2: '02:08',  it: 'the last Diwali',  itEm: 'we were all home.' },
  ];

  return (
    <section id="waiting" className="stop" style={{ minHeight: '100vh', paddingBottom: 64 }}>
      <div className="pad waiting-head">
        <Reveal as="h2" className="ser" d={1}>
          <span className="eyebrow">The room</span>
          What is waiting to be<br/><span className="em">remembered.</span>
        </Reveal>
        <Reveal className="meta-note" d={2}>
          These frames hold nothing yet.<br/>
          The metadata is the story so far.
        </Reveal>
      </div>

      <div className="pad">
        <div className="waiting-grid">
          {frames.map((f, i) => {
            // Layout: rows of 12 cols, asymmetric col-spans
            const spans = [
              { col: '1 / span 4', row: '1', minH: 200 },
              { col: '5 / span 5', row: '1 / span 2', minH: 280 },
              { col: '10 / span 3', row: '1', minH: 200 },
              { col: '1 / span 4', row: '2', minH: 240 },
              { col: '10 / span 3', row: '2', minH: 240 },
              { col: '1 / span 4', row: '3', minH: 220, hideMd: true },
            ][i];
            return (
              <Reveal
                key={i}
                d={Math.min(6, i + 1)}
                style={{
                  gridColumn: spans.col,
                  gridRow: spans.row,
                  minHeight: spans.minH,
                }}
              >
                <Placeholder
                  kind={f.kind}
                  meta1={f.m1}
                  meta2={f.m2}
                  italic={f.it}
                  italicEm={f.itEm}
                  w="100%"
                  h="100%"
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Interlude({ height = '44vh' }) {
  return (
    <Stop
      id="interlude"
      height={height}
      bars={true}
      footMeta="Interlude"
    >
      <div className="pad" style={{ width: '100%' }}>
        <Reveal as="p" className="ser interlude-line" d={1} style={{ margin: 0 }}>
          Some voices we keep <span className="em">on purpose.</span><br/>
          Others, we did not know to keep.
        </Reveal>
      </div>
    </Stop>
  );
}

/* ── Three stops ───────────────────────────────────────────────────── */

function StopVoice() {
  return (
    <Stop id="stop-voice" height="78vh" bars={true} footMeta="Stop i &middot; Voice">
      <div className="stop-layout">
        <Reveal d={1} className="stop-frame">
          <Placeholder
            kind="Voice &middot; Nani &middot; 00:24"
            meta1="1998 &middot; Lucknow"
            meta2="Cassette"
            w="100%"
            h={280}
          >
            <div style={{ position: 'absolute', inset: 28, top: 56 }}>
              <Waveform width={440} height={220} bars={64} />
            </div>
          </Placeholder>
        </Reveal>
        <Reveal d={3} className="stop-text">
          <div className="eyebrow stop-eyebrow">Stop i</div>
          <h2 className="ser stop-title">A voice<br/><span className="em">from before.</span></h2>
        </Reveal>
      </div>
    </Stop>
  );
}

function StopFilm() {
  return (
    <Stop id="stop-film" height="78vh" bars={true} footMeta="Stop ii &middot; Film">
      <div className="stop-layout reverse">
        <Reveal d={3} className="stop-text">
          <div className="eyebrow stop-eyebrow">Stop ii</div>
          <h2 className="ser stop-title">For the people<br/><span className="em">who could not be there.</span></h2>
        </Reveal>
        <Reveal d={1} className="stop-frame">
          <Placeholder
            kind="Film &middot; 01:42"
            meta1="Mumbai &middot; April 2025"
            meta2="Take 01"
            w="100%"
            h={300}
          >
            <FilmStill italic={<>for Maa, on seventy.</>} />
          </Placeholder>
        </Reveal>
      </div>
    </Stop>
  );
}

function StopLetter() {
  return (
    <Stop id="stop-letter" height="78vh" bars={true} footMeta="Stop iii &middot; Letter">
      <div className="stop-layout">
        <Reveal d={1} className="stop-frame">
          <Placeholder
            kind="Letter &middot; Unread"
            meta1="In Papa's hand"
            meta2="Date unknown"
            w="100%"
            h={320}
          >
            <LetterPlaceholder />
          </Placeholder>
        </Reveal>
        <Reveal d={3} className="stop-text">
          <div className="eyebrow stop-eyebrow">Stop iii</div>
          <h2 className="ser stop-title">Kept the way<br/><span className="em">you keep a letter.</span></h2>
        </Reveal>
      </div>
    </Stop>
  );
}

/* ── Prose movements ──────────────────────────────────────────────── */

function WhatWeHold() {
  return (
    <section id="what-we-hold" className="prose-stop">
      <div className="light" style={{
        background: 'radial-gradient(28% 50% at 92% 50%, var(--tk-light-h2), transparent 65%), radial-gradient(80% 40% at 50% 0%, var(--ivory), transparent 70%)',
      }} />
      <div className="grid">
        <div className="left">
          <Reveal className="eyebrow" d={1}>On what we hold</Reveal>
          <Reveal as="h2" className="ser" d={2}>
            Joy. The <span className="em">heavier</span> days.<br/>
            And, mostly, <span className="em">later.</span>
          </Reveal>
        </div>
        <div>
          <Reveal as="p" d={2}>
            Some of what we hold is <span className="em">for joy.</span> A song that got two people married.
            A birthday voice from across an ocean. A film of a child's first words, in two languages.
          </Reveal>
          <Reveal as="p" d={3}>
            Some of it is for the days that are <span className="em">heavier.</span> The grandfather who passed
            in the monsoon. The voice on the answering machine the family could not bring themselves to erase.
          </Reveal>
          <Reveal as="p" d={4}>
            Most of it, in the end, is <span className="em">for later.</span> For the granddaughter who has not
            been born yet, but who one day will want to know what we sounded like.
          </Reveal>
        </div>
      </div>
      <div className="foot-meta dark" style={{ right: 56 }}>On what we hold</div>
    </section>
  );
}

function Safekeeping() {
  return (
    <section id="safekeeping" className="prose-stop">
      <div className="light" style={{
        background: 'radial-gradient(26% 50% at 92% 78%, var(--tk-light-mid), transparent 65%), radial-gradient(80% 40% at 50% 0%, var(--ivory), transparent 70%)',
      }} />
      <div className="grid">
        <div className="left">
          <Reveal className="eyebrow" d={1}>On safekeeping</Reveal>
          <Reveal as="h2" className="ser" d={2}>
            Held the way<br/>
            <span className="em">a house holds a letter.</span>
          </Reveal>
        </div>
        <div>
          <Reveal as="p" d={2}>
            When you give us your father's voice, you are not handing it to a company. You are handing it to a
            <span className="em"> family locker,</span> the kind with a key only your house has.
          </Reveal>
          <Reveal as="p" d={3}>
            We treat it the way you keep a letter, <span className="em">not the way you keep a password.</span>
          </Reveal>
          <Reveal d={4} className="pills">
            <span className="pill">Private by default</span>
            <span className="pill">Yours to delete</span>
            <span className="pill">Voice &amp; likeness consent</span>
          </Reveal>
        </div>
      </div>
      <div className="foot-meta dark" style={{ right: 56 }}>On safekeeping</div>
    </section>
  );
}

function SignOff({ ctaCopy = 'Begin a film', cueCopy = 'One minute · from a thirty-second voice' }) {
  return (
    <Stop
      id="signoff"
      height="80vh"
      bars={true}
      footMeta="Yours,"
      accent={
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(60% 80% at 50% 100%, var(--tk-light-end), transparent 75%)',
        }} />
      }
    >
      <div className="signoff-stage">
        <Reveal className="ser lead" d={1}>
          When you are ready,<br/>
          <span className="em">begin one.</span>
        </Reveal>
        <Reveal d={3}>
          <button className="cta">
            <span className="orb-in-cta" />
            <span>{ctaCopy}</span>
            <span className="arr" />
          </button>
        </Reveal>
        <Reveal className="signoff-cue" d={4}>{cueCopy}</Reveal>
      </div>
    </Stop>
  );
}

function Colophon() {
  return (
    <footer className="colophon">
      <div>SiyAI &middot; Spring 2026</div>
      <div style={{ display: 'flex', gap: 32 }}>
        <a href="#hero">Top</a>
        <a href="#stop-voice">Films</a>
        <a href="#safekeeping">Keep</a>
        <a href="#signoff">Begin</a>
      </div>
      <div>Made in India, for everyone you love.</div>
    </footer>
  );
}

Object.assign(window, {
  Hero, HeldBreathStop, WaitingRoom, Interlude,
  StopVoice, StopFilm, StopLetter,
  WhatWeHold, Safekeeping, SignOff, Colophon,
});
