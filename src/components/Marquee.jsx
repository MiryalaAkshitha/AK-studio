import { marquee } from '../content';

export default function Marquee() {
  // The list is rendered twice so the scroll loops seamlessly.
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="marquee-item">
            <span>{text}</span><i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
