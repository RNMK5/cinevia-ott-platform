export default function CategoryPill({ children, active = false }) {
  return <button className={`pill ${active ? 'pill--highlight' : ''}`}>{children}</button>;
}
