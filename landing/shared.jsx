/* shared.jsx — Orb, hooks, helpers used by every section */

const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ──────────────────────────────────────────────────────────────────────
   Reveal — now a thin pass-through. With reveal animations removed
   (brand prefers breath, not animation) this exists only so existing
   markup keeps working without rewriting every section.
─────────────────────────────────────────────────────────────────────── */
function Reveal({ as = 'div', d = 0, className = '', children, ...rest }) {
  const Tag = as;
  const cls = ['reveal', d ? `d-${d}` : '', 'in', className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}

/* useInView kept as a noop in case anything outside Reveal still calls it. */
function useInView() {
  const ref = useRef(null);
  return [ref, true];
}

/* ──────────────────────────────────────────────────────────────────────
   useScrollY — tracks document scroll position, throttled to rAF.
   Used by the top nav (to switch its color when over dark sections)
   and by the companion orb (which migrates position with depth).
─────────────────────────────────────────────────────────────────────── */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => { setY(window.scrollY || 0); raf = 0; };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return y;
}

/* ──────────────────────────────────────────────────────────────────────
   Orb — the mint+emerald presence. Optional `flavor`.
─────────────────────────────────────────────────────────────────────── */
function Orb({ size = 'normal', flavor = 'mint', className = '', style }) {
  const cls = ['orb', size === 'small' ? 'small' : size === 'big' ? 'big' : '', flavor === 'gold' ? 'gold' : '', className].filter(Boolean).join(' ');
  return <div className={cls} style={style} />;
}

/* ──────────────────────────────────────────────────────────────────────
   Letterbox — the dark cinematic bars. Their height comes from
   --tk-bar (set on root). Tweaks panel adjusts that var.
─────────────────────────────────────────────────────────────────────── */
function Letterbox() {
  return (
    <>
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   Stop — one cinematic section. Pass height or let it size to content.
   `bars` = false skips the letterbox bars.
─────────────────────────────────────────────────────────────────────── */
function Stop({ id, height, bars = true, accent, light, footMeta, footMetaDark, children }) {
  const styleProps = {};
  if (height) styleProps.height = height;
  else styleProps.minHeight = '100vh';
  return (
    <section id={id} className={'stop' + (bars ? '' : ' no-bars')} style={styleProps}>
      {light ? <div style={{ position:'absolute', inset:0, background: light, pointerEvents:'none', zIndex: 1 }} /> : null}
      {accent}
      {bars ? <Letterbox /> : null}
      <div className="stage" style={{ zIndex: 2 }}>{children}</div>
      {footMeta ? (
        <div className={'foot-meta' + (footMetaDark ? ' dark' : '')}>{footMeta}</div>
      ) : null}
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   Placeholder — a single artefact frame, captioned with metadata.
   We have no real artefacts yet; the metadata is the story so far.
─────────────────────────────────────────────────────────────────────── */
function Placeholder({ kind, meta1, meta2, italic, italicEm, w, h, style, children, className = '' }) {
  return (
    <div className={'placeholder ' + className} style={{ width: w, height: h, ...style }}>
      <div className="meta-tl">{kind}</div>
      {children ? children : (italic || italicEm) ? (
        <div className="center-it">
          <div className="it">
            {italic}{italic && italicEm ? <br/> : null}
            {italicEm ? <span style={{ color: 'var(--emerald)' }}>{italicEm}</span> : null}
          </div>
        </div>
      ) : null}
      {meta1 ? <div className="meta-bl">{meta1}</div> : null}
      {meta2 ? <div className="meta-br">{meta2}</div> : null}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   Waveform — SVG stand-in for a real voice clip.
─────────────────────────────────────────────────────────────────────── */
function Waveform({ width = 380, height = 220, bars = 60 }) {
  const lines = [];
  const step = (width - 56) / bars;
  for (let i = 0; i < bars; i++) {
    const x = 28 + i * step;
    const h = 32 + Math.abs(Math.sin(i * 0.55) + Math.cos(i * 0.31)) * 32;
    lines.push(<line key={i} x1={x} y1={height/2 - h/2} x2={x} y2={height/2 + h/2} />);
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <g stroke="#2A2F30" strokeWidth="1.1" fill="none" opacity="0.55">{lines}</g>
      <line x1="28" y1={height - 32} x2="58" y2={height - 32} stroke="#2E9F7E" strokeWidth="1.5" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   FilmStill — a stand-in for a future memory film frame.
─────────────────────────────────────────────────────────────────────── */
function FilmStill({ italic }) {
  return (
    <>
      <div style={{ position:'absolute', inset: 32, border: '1px solid rgba(20,24,26,0.10)' }} />
      <div style={{
        position:'absolute', left: 32, right: 32, top: 32, height: 28,
        background: 'rgba(20,24,26,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 12px',
      }}>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', color: 'var(--ink-quiet)' }}>SCENE 03</div>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', color: 'var(--ink-quiet)' }}>FROM ONE VOICE NOTE</div>
      </div>
      <div className="center-it">
        <div className="it">{italic}</div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   LetterPlaceholder — ink-line stand-in for a handwritten letter.
─────────────────────────────────────────────────────────────────────── */
function LetterPlaceholder() {
  const widths = [300, 260, 280, 240, 290, 200, 270];
  return (
    <div style={{
      position: 'absolute',
      left: 40, right: 80, top: 70,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      {widths.map((w, i) => (
        <div key={i} style={{ height: 2, width: w, background: 'rgba(20,24,26,0.20)' }} />
      ))}
    </div>
  );
}

/* expose on window for the other Babel scripts */
Object.assign(window, {
  useInView, useScrollY, Reveal, Orb, Letterbox, Stop,
  Placeholder, Waveform, FilmStill, LetterPlaceholder,
});
