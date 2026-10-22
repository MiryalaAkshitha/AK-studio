import { contact, contactSection } from '../content';
import { Icon, Sparkle } from './Icons';

export default function Contact() {
  const links = [
    { icon: 'instagram', label: 'INSTAGRAM', text: contact.instagramLabel, href: contact.instagramUrl, external: true },
    { icon: 'mail', label: 'EMAIL', text: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section id="contact" className="sec sec-light contact-sec">
      <div className="wrap">
        <div className="panel panel-dark contact reveal">
          <Sparkle className="stk stk-e" />
          <div>
            <span className="eyebrow">{contactSection.eyebrow}</span>
            <h2>{contactSection.title}</h2>
            <p className="panel-p">{contact.location}</p>
          </div>
          <div className="rows">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="row row-link"
                {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                <span className="row-ic"><Icon name={l.icon} size={18} /></span>
                <span><small>{l.label}</small><b>{l.text}</b></span>
                <em>↗</em>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
