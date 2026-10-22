import { process } from '../content';
import { Icon } from './Icons';
import SectionHead from './SectionHead';

const TILTS = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg'];

export default function Process() {
  const last = process.steps.length - 1;
  return (
    <section id="process" className="sec sec-dark">
      <div className="wrap">
        <SectionHead eyebrow={process.eyebrow} title={process.title} text={process.text} className="reveal" />
        <div className="steps">
          {process.steps.map((step, i) => (
            <div key={step.title} className={`step reveal ${i === last ? 'step-hot' : ''}`} style={{ '--r': TILTS[i % TILTS.length] }}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="loop-note">
          <Icon name="loop" size={22} className="loop-ic" />
          <span>{process.loopNote}</span>
        </div>
      </div>
    </section>
  );
}
