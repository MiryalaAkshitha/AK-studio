import { value } from '../content';
import { Icon } from './Icons';
import SectionHead from './SectionHead';

export default function Value() {
  return (
    <section id="value" className="sec sec-dark">
      <div className="wrap">
        <div className="panel panel-deep reveal">
          <SectionHead eyebrow={value.eyebrow} title={value.title} text={value.text} className="flush" />
          <div className="points">
            {value.points.map((p) => (
              <div key={p.title} className="point">
                <div className="point-h">
                  <span className="tick"><Icon name="check" size={14} /></span>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
