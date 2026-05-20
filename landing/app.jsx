/* app.jsx — composes the landing page.
   Avoids React re-renders on every scroll by mutating DOM directly
   from a single rAF-throttled scroll handler. The tweaks panel is the
   only thing that triggers re-renders here. */

function TopNav() {
  return (
    <nav className="top-nav" id="top-nav">
      <a href="#hero" className="mark" style={{ textDecoration: 'none' }}>
        <span className="dot" />SiyAI
      </a>
      <div className="links">
        <a href="#stop-voice">Films</a>
        <a href="#stop-letter">Voices</a>
        <a href="#safekeeping">Keep</a>
        <a href="#signoff" className="primary">Begin</a>
      </div>
    </nav>
  );
}

/* The scroll-driven UI — progress hairline + companion orb + stop indicator —
   mounted once, mutates the DOM directly, never causes a re-render. */
function ScrollUI({ companionEnabled }) {
  const progRef = useRef(null);
  const compRef = useRef(null);
  const stopRef = useRef(null);

  useEffect(() => {
    const stops = [
      { id: 'hero',         label: 'i',    name: 'A place' },
      { id: 'remembered',   label: 'ii',   name: 'remembered.' },
      { id: 'waiting',      label: 'iii',  name: 'The room' },
      { id: 'interlude',    label: 'iv',   name: 'Interlude' },
      { id: 'stop-voice',   label: 'v',    name: 'A voice' },
      { id: 'stop-film',    label: 'vi',   name: 'A film' },
      { id: 'stop-letter',  label: 'vii',  name: 'A letter' },
      { id: 'what-we-hold', label: 'viii', name: 'What we hold' },
      { id: 'safekeeping',  label: 'ix',   name: 'Safekeeping' },
      { id: 'signoff',      label: 'x',    name: 'Yours,' },
    ];

    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const y = window.scrollY || 0;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));

      // progress hairline
      if (progRef.current) {
        progRef.current.style.transform = `scaleX(${p})`;
      }

      // companion orb appears past first viewport
      if (compRef.current) {
        const target = (companionEnabled !== false) && y > window.innerHeight * 0.85;
        compRef.current.style.opacity = target ? '0.9' : '0';
      }

      // find current stop
      const mid = window.innerHeight * 0.35;
      let current = stops[0];
      for (const s of stops) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) current = s;
      }
      if (stopRef.current) {
        const labelEl = stopRef.current.querySelector('.idx');
        const nameEl  = stopRef.current.querySelector('.name');
        if (labelEl && labelEl.textContent !== current.label) labelEl.textContent = current.label;
        if (nameEl  && nameEl.textContent  !== current.name)  nameEl.textContent  = current.name;
      }

      // top-nav darkness: nav is "on dark" when over any element with .stop class
      // that has letterbox bars visible (i.e. when --tk-bar > 0). With bar:0 nav
      // is always on the ivory page → never on-dark.
      const nav = document.getElementById('top-nav');
      if (nav) {
        const cs = getComputedStyle(document.documentElement);
        const bar = parseFloat(cs.getPropertyValue('--tk-bar')) || 0;
        // when bar is present, sections under nav are dark in the top region
        const overTopBar = bar > 0 && (() => {
          // find topmost .stop with bars at scroll position
          const sections = document.querySelectorAll('section.stop');
          for (const s of sections) {
            const r = s.getBoundingClientRect();
            if (r.top <= 0 && r.bottom > bar) return true;
          }
          return false;
        })();
        nav.classList.toggle('on-dark', overTopBar);

        // hide on scroll-down past the first viewport, reveal on scroll-up
        const lastY = nav._lastY || 0;
        const dy = y - lastY;
        if (y > window.innerHeight * 0.4 && dy > 4) {
          nav.classList.add('is-hidden');
        } else if (dy < -4 || y < window.innerHeight * 0.4) {
          nav.classList.remove('is-hidden');
        }
        nav._lastY = y;
      }
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // initial render
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [companionEnabled]);

  return (
    <>
      <div className="scroll-progress"><div ref={progRef} className="scroll-progress-bar" /></div>
      <div ref={compRef} className="companion" style={{ opacity: 0 }}>
        <Orb size="small" />
      </div>
      <div ref={stopRef} className="stop-indicator" aria-hidden="true">
        <span className="idx">i</span>
        <span className="name">A place</span>
      </div>
    </>
  );
}

/* Tweaks — small, restrained set. The brand stays the brand. */
function LandingTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero">
        <TweakRadio
          label="Hero line"
          value={t.hero}
          options={[
            { label: 'stories live',   value: 'stories' },
            { label: 'memory lives',   value: 'memory' },
            { label: 'come alive',     value: 'comeAlive' },
          ]}
          onChange={(v) => setTweak('hero', v)}
        />
      </TweakSection>

      <TweakSection label="Cinema">
        <TweakSelect
          label="Letterbox"
          value={t.bar}
          options={[
            { label: 'Hidden',   value: 0 },
            { label: 'Light',    value: 32 },
            { label: 'Standard', value: 64 },
            { label: 'Strict',   value: 96 },
          ]}
          onChange={(v) => setTweak('bar', Number(v))}
        />
        <TweakSlider
          label="Held"
          value={t.hold}
          min={3} max={15} step={1} unit="s"
          onChange={(v) => setTweak('hold', v)}
        />
      </TweakSection>

      <TweakSection label="Presence">
        <TweakSelect
          label="Orb"
          value={t.orb}
          options={[
            { label: 'Subtle',   value: 0.7 },
            { label: 'Standard', value: 1.0 },
            { label: 'Present',  value: 1.3 },
          ]}
          onChange={(v) => setTweak('orb', Number(v))}
        />
        <TweakToggle
          label="Companion orb"
          value={t.companion}
          onChange={(v) => setTweak('companion', v)}
        />
        <TweakToggle
          label="Stop indicator"
          value={t.indicator !== false}
          onChange={(v) => setTweak('indicator', v)}
        />
      </TweakSection>

      <TweakSection label="Light">
        <TweakColor
          label="Hero light"
          value={t.light}
          options={[
            ['#2E9F7E', '#C9E7C2'],   // mint
            ['#D7B96A', '#F2E2A8'],   // gold dawn
            ['#BFD6E6', '#E0EAF1'],   // sky dusk
          ]}
          onChange={(v) => setTweak('light', v)}
        />
      </TweakSection>

      <TweakSection label="Copy">
        <TweakText
          label="CTA"
          value={t.cta}
          onChange={(v) => setTweak('cta', v)}
        />
        <TweakText
          label="CTA cue"
          value={t.cue}
          onChange={(v) => setTweak('cue', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

/* helpers */
function makeLight(swatches, alpha, idx = 0) {
  const hex = Array.isArray(swatches) ? swatches[idx] || swatches[0] : swatches;
  if (!hex || typeof hex !== 'string') return `rgba(46, 159, 126, ${alpha})`;
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return `rgba(46, 159, 126, ${alpha})`;
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  const heroVariant = t.hero || 'stories';

  const rootStyle = {
    '--tk-bar': `${t.bar ?? 64}px`,
    '--tk-orb': t.orb ?? 1.0,
    '--tk-light-h1': makeLight(t.light, 0.22, 0),
    '--tk-light-h2': makeLight(t.light, 0.36, 1),
    '--tk-light-mid': 'rgba(183, 227, 203, 0.34)',
    '--tk-light-end': makeLight(t.light, 0.30, 0),
  };

  // hide stop indicator if tweak off
  const stopIndicatorClass = t.indicator === false ? 'hide-indicator' : '';

  return (
    <div className={'grain ' + stopIndicatorClass} style={rootStyle}>
      <TopNav />
      <ScrollUI companionEnabled={t.companion !== false} />

      <main>
        <Hero variant={heroVariant} />
        <HeldBreathStop holdDuration={t.hold ?? 9} />
        <WaitingRoom />
        <Interlude />
        <StopVoice />
        <StopFilm />
        <StopLetter />
        <WhatWeHold />
        <Safekeeping />
        <SignOff
          ctaCopy={t.cta || 'Begin a film'}
          cueCopy={t.cue || 'One minute · from a thirty-second voice'}
        />
      </main>

      <Colophon />

      <LandingTweaks t={t} setTweak={setTweak} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
