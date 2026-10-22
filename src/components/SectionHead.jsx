export default function SectionHead({ eyebrow, title, text, children, className = '' }) {
  return (
    <div className={`sec-head ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
