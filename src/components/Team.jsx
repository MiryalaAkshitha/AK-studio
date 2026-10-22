import { team } from '../content';
import { Burst } from './Icons';

export default function Team() {
  return (
    <section className="sec sec-light">
      <div className="wrap">
        <div className="panel panel-dark trust reveal">
          <div className="trust-copy">
            <span className="eyebrow">{team.eyebrow}</span>
            <h2>{team.title}</h2>
            <p className="panel-p">{team.text}</p>
          </div>
          <div className="badge">
            <Burst className="badge-burst" />
            <div className="badge-txt"><b>{team.badgeBig}</b><span>{team.badgeSmall}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
