import { Download, Play, Plus, Star } from 'lucide-react';
import { GhostButton, PrimaryButton } from '../components/Buttons';
import CastCard from '../components/CastCard';
import DesktopFrame from '../components/DesktopFrame';
import MovieCard from '../components/MovieCard';
import { castCrew, detailsMovie, similarTitles } from '../data/content';

export default function DetailsPage() {
  return (
    <DesktopFrame
      title="Content Details"
      subtitle="Large-screen details view with hero media, metadata, cast, and recommendations."
      searchPlaceholder="Search similar titles..."
    >
      <section
        className="hero hero--details-desktop"
        style={{ backgroundImage: `url(${detailsMovie.background})` }}
      >
        <div className="hero__shade hero__shade--details" />
        <div className="hero__content">
          <span className="eyebrow">{detailsMovie.genre}</span>

          <div className="rating-chip">
            <Star size={16} fill="currentColor" />
            <span>{detailsMovie.rating} Viewer Rating</span>
          </div>

          <h1 className="multiline-title">
            {detailsMovie.title.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <div className="meta-row">
            <span>{detailsMovie.year}</span>
            <span>{detailsMovie.runtime}</span>
            <span>{detailsMovie.quality}</span>
          </div>

          <p>{detailsMovie.synopsis}</p>

          <div className="button-row button-row--wrap">
            <PrimaryButton icon={<Play size={16} fill="currentColor" />}>Play Now</PrimaryButton>
            <GhostButton icon={<Plus size={16} />}>Add to List</GhostButton>
            <GhostButton icon={<Download size={16} />}>Download</GhostButton>
          </div>
        </div>
      </section>

      <section className="desktop-section-stack">
        <div>
          <div className="section-title section-title--single">
            <h2>Cast & Crew</h2>
          </div>
          <div className="cast-grid">
            {castCrew.map((person) => (
              <CastCard key={person.name} person={person} />
            ))}
          </div>
        </div>

        <div>
          <div className="section-title section-title--single">
            <h2>More Like This</h2>
          </div>
          <div className="desktop-card-grid desktop-card-grid--four">
            {similarTitles.map((item) => (
              <MovieCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </DesktopFrame>
  );
}