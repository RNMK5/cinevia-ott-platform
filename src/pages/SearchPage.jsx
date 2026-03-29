import CategoryPill from '../components/CategoryPill';
import DesktopFrame from '../components/DesktopFrame';
import MovieCard from '../components/MovieCard';
import SearchInput from '../components/SearchInput';
import { exploreBlocks, searchGrid, searchTop } from '../data/content';

export default function SearchPage() {
  return (
    <DesktopFrame
      title="Search & Explore"
      subtitle="Optimized for desktop browsing with richer discoverability sections."
      searchPlaceholder="Search movies, shows, artists..."
    >
      <section className="search-desktop-top">
        <div className="search-toolbar">
          <SearchInput />
          <div className="pill-row pill-row--desktop">
            <CategoryPill active>All Results</CategoryPill>
            <CategoryPill>Movies</CategoryPill>
            <CategoryPill>Series</CategoryPill>
            <CategoryPill>Drama</CategoryPill>
            <CategoryPill>Sci-Fi</CategoryPill>
          </div>
        </div>

        <article className="feature-strip feature-strip--desktop glass-panel">
          <img src={searchTop.image} alt={searchTop.title} className="feature-strip__image" />
          <div className="feature-strip__content">
            <span className="eyebrow">Trending Search</span>
            <h1 className="multiline-title multiline-title--sm">
              {searchTop.title.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{searchTop.subtitle}</p>
          </div>
        </article>
      </section>

      <section className="desktop-section-stack">
        <div>
          <div className="section-title section-title--single">
            <h2>Explore Categories</h2>
          </div>
          <div className="explore-grid explore-grid--desktop">
            {exploreBlocks.map((item) => (
              <article key={item.title} className="explore-card glass-panel">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-title section-title--single">
            <h2>Results For You</h2>
          </div>
          <div className="desktop-card-grid desktop-card-grid--four">
            {searchGrid.map((item) => (
              <MovieCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </DesktopFrame>
  );
}