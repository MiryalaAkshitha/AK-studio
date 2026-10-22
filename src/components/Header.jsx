import { contact } from '../content';
import { Icon } from './Icons';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Why us', href: '#value' },
];

export default function Header({ scrollPct }) {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a href="#top" className="logo">
          <img src="/assets/logo-4b.png" alt="AK Studio logo" />
        </a>
        <nav className="nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="hdr-cta">
          <a href={contact.instagramUrl} target="_blank" rel="noopener" aria-label="AK Studio on Instagram" className="ig">
            <Icon name="instagram" size={18} />
          </a>
          <a href="#contact" className="btn btn-sm">Start a project →</a>
        </div>
      </div>
      <div className="progress" style={{ width: `${scrollPct}%` }} />
    </header>
  );
}
