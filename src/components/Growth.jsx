import { growth } from '../content';
import { Icon } from './Icons';
import SectionHead from './SectionHead';

const TILTS = ['-1.5deg', '1deg', '-1deg'];

export default function Growth() {
  return (
    <section className="sec sec-light">
      <div className="wrap">
        <SectionHead eyebrow={growth.eyebrow} title={growth.title} text={growth.text} className="reveal" />
        <div className="growth">
          {growth.cards.map((card, i) => (
            <div key={card.title} className="g-card reveal" style={{ '--r': TILTS[i % TILTS.length] }}>
              <div className="g-ic"><Icon name={card.icon} size={26} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
