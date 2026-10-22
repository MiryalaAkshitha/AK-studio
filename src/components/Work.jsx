import { clients, work } from '../content';
import { Icon, Sparkle } from './Icons';
import SectionHead from './SectionHead';

const ICON_TILTS = ['-6deg', '5deg', '-4deg', '6deg', '-5deg'];

function CaseCard({ client, index }) {
  const flipped = index % 2 === 1;
  return (
    <article className={`case reveal ${flipped ? 'case-flip' : ''}`}>
      <div className="mock">
        <div className="mock-bar"><i /><i /><i /><span>{client.domain}</span></div>
        <div className="mock-body">
          <div className="mock-lines"><b /><s /><s className="short" /></div>
          <div className="mock-icon" style={{ '--r': ICON_TILTS[index % ICON_TILTS.length] }}>
            <Icon name={client.icon} size={44} />
          </div>
        </div>
        <div className="mock-tiles"><u /><u /><u /><u /></div>
      </div>
      <div className="case-info">
        <div className="case-top">
          <span className="case-num">Client {index + 1}</span>
          {client.inProgress && <span className="wip">In progress</span>}
        </div>
        <h3>{client.name}</h3>
        <p>{client.description}</p>
        <div className="tags">
          {client.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <a href={client.url} target="_blank" rel="noopener" className="visit">
          Visit {client.domain} <b>→</b>
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="sec sec-light">
      <div className="wrap">
        <SectionHead {...work} className="reveal">
          <Sparkle size={54} className="head-doodle" />
        </SectionHead>
        <div className="cases">
          {clients.map((c, i) => <CaseCard key={c.url} client={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
