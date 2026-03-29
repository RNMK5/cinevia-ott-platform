export default function MovieCard({ item, rank, wide = false }) {
  return (
    <article className={`movie-card ${wide || item.wide ? 'movie-card--wide' : ''}`}>
      <img src={item.image} alt={item.title} className="movie-card__image" />
      <div className="movie-card__overlay" />
      {rank ? <span className="movie-card__rank">{rank}</span> : null}
      {item.label ? <span className="movie-card__label">{item.label}</span> : null}
      <div className="movie-card__content">
        <h3>{item.title}</h3>
        {item.meta ? <p>{item.meta}</p> : null}
      </div>
    </article>
  );
}
