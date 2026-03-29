import { Play, Plus } from 'lucide-react';
import { GhostButton, PrimaryButton } from '../components/Buttons';
import DesktopFrame from '../components/DesktopFrame';
import MovieCard from '../components/MovieCard';
import SectionTitle from '../components/SectionTitle';
import { heroMovie, originals, topTen, trendingNow } from '../data/content';

export default function HomePage() {
  return (
    <DesktopFrame
      title="Home"
      subtitle="A cinematic dashboard crafted for desktop resolution."
      searchPlaceholder="Search cinematic experiences..."
    >
      <section className="hero hero--desktop-wide" style={{ backgroundImage: `url(${heroMovie.background})` }}>
        <div className="hero__shade" />
        <div className="hero__content">
          <span className="eyebrow">{heroMovie.badge}</span>
          <h1>{heroMovie.title}</h1>
          <p>{heroMovie.description}</p>

          <div className="button-row">
            <PrimaryButton icon={<Play size={16} fill="currentColor" />}>Watch Now</PrimaryButton>
            <GhostButton icon={<Plus size={16} />}>My List</GhostButton>
          </div>
        </div>
      </section>

      <section className="desktop-section-stack">
        <div>
          <SectionTitle title="Trending Now" />
          <div className="desktop-card-grid desktop-card-grid--four">
            {trendingNow.map((item) => (
              <MovieCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title=" CINEMA Originals" />
          <div className="desktop-card-grid desktop-card-grid--three">
            {originals.map((item) => (
              <MovieCard key={item.title} item={item} wide={item.wide} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="Top 10 in Your Country" action="Refresh" />
          <div className="desktop-card-grid desktop-card-grid--five ranked-grid">
            {topTen.map((item, index) => (
              <MovieCard key={`${item.title}-${index}`} item={item} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </DesktopFrame>
  );
}