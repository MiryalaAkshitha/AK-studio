// Every icon and sticker on the site, referenced by name from content.js.

const INK = '#2B1608';
const SPARKLE = 'M12 1.5C13 8 16 11 22.5 12 16 13 13 16 12 22.5 11 16 8 13 1.5 12 8 11 11 8 12 1.5Z';
const HEART = 'M12 21s-7.5-4.6-9.6-9.2A5.2 5.2 0 0 1 12 6.3a5.2 5.2 0 0 1 9.6 5.5C19.5 16.4 12 21 12 21z';

const stroke = { stroke: INK, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };

const icons = {
  calculator: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="3" {...stroke} />
      <rect x="8" y="5.5" width="8" height="4" rx="1" fill={INK} />
      {[9, 12, 15].map((cx) => [13, 17].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.1" fill={INK} />))}
    </>
  ),
  megaphone: (
    <>
      <path d="M3 10v4a1 1 0 0 0 1 1h3l7 4.5V4.5L7 9H4a1 1 0 0 0-1 1z" {...stroke} />
      <path d="M17.5 8.5a5 5 0 0 1 0 7M20 6a8.5 8.5 0 0 1 0 12" {...stroke} />
    </>
  ),
  bricks: (
    <>
      <rect x="2.5" y="14" width="9" height="6" rx="1.2" {...stroke} />
      <rect x="12.5" y="14" width="9" height="6" rx="1.2" {...stroke} />
      <rect x="7.5" y="7" width="9" height="6" rx="1.2" {...stroke} />
      <path d="M12 2.5v2.5" {...stroke} />
    </>
  ),
  people: (
    <>
      <circle cx="8.5" cy="8" r="3" {...stroke} />
      <circle cx="16" cy="9" r="2.5" {...stroke} />
      <path d="M3 19.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5M14 14.6c.6-.3 1.3-.4 2-.4 2.8 0 5 2.2 5 5" {...stroke} />
    </>
  ),
  paw: (
    <g fill={INK}>
      <ellipse cx="12" cy="16" rx="4.6" ry="3.8" />
      <ellipse cx="5.5" cy="10.5" rx="2" ry="2.5" />
      <ellipse cx="18.5" cy="10.5" rx="2" ry="2.5" />
      <ellipse cx="9" cy="6" rx="2" ry="2.6" />
      <ellipse cx="15" cy="6" rx="2" ry="2.6" />
    </g>
  ),
  speaker: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="3" {...stroke} />
      <circle cx="12" cy="7" r="1.6" fill={INK} />
      <circle cx="12" cy="15" r="3.8" {...stroke} />
      <circle cx="12" cy="15" r="1.2" fill={INK} />
    </>
  ),
  star: <path d={SPARKLE} fill={INK} />,
  heart: <path d={HEART} fill={INK} />,
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill={INK} />,
  sprout: <path d="M12 21V11M12 11c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5zM12 14c0-3-2.4-5-5.5-5 0 3 2.4 5 5.5 5z" {...stroke} strokeWidth="2.2" fill={INK} />,
  chat: <path d="M4 5h16v11H9l-5 4V5z" {...stroke} strokeWidth="2.2" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" {...stroke} strokeWidth="2.2" />
      <path d="M12 7.5V12l3 2" {...stroke} strokeWidth="2.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none" />
      <path d="M3.5 7.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  check: <path d="M5 13l4 4L19 7" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  loop: <path d="M17 2l4 4-4 4M7 22l-4-4 4-4M21 6H8a5 5 0 0 0-5 5M3 18h13a5 5 0 0 0 5-5" stroke="#ff9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
};

export function Icon({ name, size = 24, className, style }) {
  if (name === 'rupee') return <span className={className} style={style}>₹</span>;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export function Sparkle({ size = 40, color = '#ff9000', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={SPARKLE} fill={color} />
    </svg>
  );
}

export function Heart({ size = 30, color = '#F0DFC0', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={HEART} fill={color} />
    </svg>
  );
}

export function Squiggle({ className }) {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" className={className} aria-hidden="true">
      <path d="M3 12 q8 -14 16 0 t16 0 t16 0 t16 0" stroke="#ff9000" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PriceTag({ className }) {
  return (
    <svg width="86" height="86" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 12.6V4.5A1.5 1.5 0 0 1 4.5 3h8.1a1.5 1.5 0 0 1 1.06.44l7 7a1.5 1.5 0 0 1 0 2.12l-8.1 8.1a1.5 1.5 0 0 1-2.12 0l-7-7A1.5 1.5 0 0 1 3 12.6z" fill="#ff9000" stroke={INK} strokeWidth="1.4" />
      <circle cx="8" cy="8" r="1.7" fill="#F0DFC0" stroke={INK} strokeWidth="1.2" />
    </svg>
  );
}

export function Burst({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path d="M100 4l13 20 22-10 4 24 24-2-5 24 22 9-14 20 17 17-21 12 8 23-24 3-1 24-23-7-11 22-18-16-18 16-11-22-23 7-1-24-24-3 8-23-21-12 17-17-14-20 22-9-5-24 24 2 4-24 22 10z" fill="#ff9000" />
    </svg>
  );
}
