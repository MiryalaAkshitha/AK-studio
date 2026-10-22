import { pricing } from '../content';
import { Icon, PriceTag } from './Icons';

export default function Pricing() {
  return (
    <section className="sec sec-dark">
      <div className="wrap">
        <div className="panel panel-cream reveal">
          <PriceTag className="tag-sticker" />
          <div>
            <span className="eyebrow eyebrow-rust">{pricing.eyebrow}</span>
            <h2>{pricing.title}</h2>
            <p className="panel-p">{pricing.text}</p>
          </div>
          <div className="rows">
            {pricing.rows.map((row) => (
              <div key={row.label} className="row">
                <span className="row-ic"><Icon name={row.icon} size={18} /></span>
                <span><small>{row.label}</small><b>{row.text}</b></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
