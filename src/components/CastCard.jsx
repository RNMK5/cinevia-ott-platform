export default function CastCard({ person }) {
  return (
    <article className="cast-card glass-panel">
      <img src={person.image} alt={person.name} className="cast-card__image" />
      <div>
        <h4>{person.name}</h4>
        <p>{person.role}</p>
      </div>
    </article>
  );
}
