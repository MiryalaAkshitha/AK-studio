import { useRef, useState } from 'react';
import { hero } from '../content';
import { Heart, Sparkle, Squiggle } from './Icons';

const SPARK_COLORS = ['#ff9000', '#F0DFC0', '#bb9457'];
const STAT_TILTS = ['-3deg', '2deg', '-1.5deg'];

// Little four-point stars in the brand colours that trail the cursor.
function useSparks() {
  const [sparks, setSparks] = useState([]);
  const lastAt = useRef(0);
  const nextId = useRef(0);

  const onMouseMove = (e) => {
    const now = performance.now();
    if (now - lastAt.current < 45) return;
    lastAt.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const id = ++nextId.current;
    const size = 8 + Math.random() * 8;
    const spark = {
      id,
      style: {
        left: e.clientX - rect.left + Math.random() * 16 - 8,
        top: e.clientY - rect.top + Math.random() * 16 - 8,
        width: size,
        height: size,
        background: SPARK_COLORS[id % SPARK_COLORS.length],
        '--sx': `${Math.round(Math.random() * 50 - 25)}px`,
      },
    };
    setSparks((s) => [...s, spark].slice(-30));
    setTimeout(() => setSparks((s) => s.filter((sp) => sp.id !== id)), 950);
  };

  return { sparks, onMouseMove };
}

export default function Hero() {
  const { sparks, onMouseMove } = useSparks();

  return (
    <section className="hero" onMouseMove={onMouseMove}>
      <div className="sparks">
        {sparks.map((s) => <span key={s.id} className="spark" style={s.style} />)}
      </div>

      <div className="hero-copy">
        <div className="pill-badge"><span className="dot" />{hero.badge}</div>
        <h1 className="hero-h1">
          {hero.titleStart}
          <span className="hl">
            {hero.titleHighlight}
            <svg className="underline" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4 14 C 60 2, 120 20, 180 8 S 270 6, 296 12" stroke="#ff9000" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="hero-p">{hero.text}</p>
        <div className="hero-btns">
          <a href="#work" className="btn">See our work →</a>
          <a href="#contact" className="btn btn-ghost">Talk to the studio</a>
        </div>
        <div className="stats">
          {hero.stats.map((s, i) => (
            <div key={s.big} className="stat" style={{ '--r': STAT_TILTS[i % STAT_TILTS.length] }}>
              <b>{s.big}</b><span>{s.small}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-art">
        <div className="blob" />
        <div className="bubble">{hero.bubble}<span className="hand-wave">👋</span></div>
        <img src="/assets/akshita-hero.png" alt="Studio team member waving hello" className="hero-img" />
        <Sparkle size={46} className="stk stk-a" />
        <Heart className="stk stk-b" />
        <Sparkle size={34} color="#bb9457" className="stk stk-c" />
        <Squiggle className="stk stk-d" />
      </div>
    </section>
  );
}
