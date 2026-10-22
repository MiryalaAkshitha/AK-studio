import { footer } from '../content';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-in">
        <span>{footer.site}</span>
        <span className="ftr-links">
          {footer.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </span>
        <span>{footer.location}</span>
      </div>
    </footer>
  );
}
