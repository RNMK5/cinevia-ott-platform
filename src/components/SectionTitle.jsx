export default function SectionTitle({ title, action = 'See all' }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <button>{action}</button>
    </div>
  );
}
