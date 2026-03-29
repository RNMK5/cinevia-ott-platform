import { Bell, Play, Search } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { GhostButton, PrimaryButton } from '../components/Buttons';
import MovieCard from '../components/MovieCard';
import SectionTitle from '../components/SectionTitle';
import { heroMovie, originals, searchGrid, trendingNow } from '../data/content';

const continueWatching = searchGrid.slice(0, 3);

export default function HomeDesktopPage() {
  return (
    <main className="desktop-page">
      <aside className="desktop-sidebar">
        <BrandLogo />
        <nav className="desktop-menu">
          <button className="desktop-menu__item is-active">Home</button>
          <button className="desktop-menu__item">Movies</button>
          <button className="desktop-menu__item">Series</button>
          <button className="desktop-menu__item">My List</button>
          <button className="desktop-menu__item">Settings</button>
        </nav>
      </aside>

      <section className="desktop-main">
        <header className="desktop-header">
          <label className="desktop-search glass-panel">
            <Search size={18} />
            <input placeholder="Search cinematic experiences" />
          </label>
          <button className="icon-button glass-panel">
            <Bell size={18} />
          </button>
        </header>

        <section className="hero hero--desktop" style={{ backgroundImage: `url(${heroMovie.background})` }}>
          <div className="hero__shade" />
          <div className="hero__content">
            <span className="eyebrow">Featured Tonight</span>
            <h1>{heroMovie.title}</h1>
            <p>{heroMovie.description}</p>
            <div className="button-row">
              <PrimaryButton icon={<Play size={16} fill="currentColor" />}>Play</PrimaryButton>
              <GhostButton>More Info</GhostButton>
            </div>
          </div>
        </section>

        <section className="desktop-grid-blocks">
          <div>
            <SectionTitle title="Continue Watching" />
            <div className="desktop-card-grid desktop-card-grid--three">
              {continueWatching.map((item) => (
                <MovieCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle title="Trending Now" />
            <div className="desktop-card-grid">
              {[...trendingNow, ...originals].map((item, index) => (
                <MovieCard key={`${item.title}-${index}`} item={item} wide={false} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
