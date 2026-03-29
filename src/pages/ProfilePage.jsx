import { CheckCircle2, Edit3 } from 'lucide-react';
import DesktopFrame from '../components/DesktopFrame';
import ProfileMenuCard from '../components/ProfileMenuCard';
import { profile, profileMenu } from '../data/content';

export default function ProfilePage() {
  return (
    <DesktopFrame
      title="User Profile"
      subtitle="Desktop profile screen with account summary, settings tiles, and active subscription."
      searchPlaceholder="Search account settings..."
    >
      <section className="profile-desktop-grid">
        <article className="profile-hero profile-hero--desktop glass-panel">
          <img src={profile.banner} alt="profile banner" className="profile-hero__banner" />
          <div className="profile-hero__overlay" />
          <div className="profile-hero__content">
            <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
            <span className="profile-badge">
              <CheckCircle2 size={14} /> Verified
            </span>
            <h1>{profile.name}</h1>
            <p>{profile.subtitle}</p>

            <button className="btn btn--ghost btn--small">
              <Edit3 size={14} />
              <span>Edit Profile</span>
            </button>
          </div>
        </article>

        <div className="profile-side-stack">
          <article className="subscription-banner subscription-banner--desktop">
            <span className="eyebrow">Current Plan</span>
            <h2>4K Ultra Streaming</h2>
            <p>Ad-free viewing across 4 devices, immersive HDR visuals, and Dolby Atmos audio.</p>
          </article>

          <article className="glass-panel profile-stats-card">
            <div>
              <h3>Watch Time</h3>
              <p>128 hrs this month</p>
            </div>
            <div>
              <h3>Downloads</h3>
              <p>24 offline titles</p>
            </div>
            <div>
              <h3>Profiles</h3>
              <p>4 active users</p>
            </div>
          </article>
        </div>
      </section>

      <section className="desktop-section-stack">
        <div className="section-title section-title--single">
          <h2>Account & Preferences</h2>
        </div>

        <div className="profile-menu-grid">
          {profileMenu.map((item) => (
            <ProfileMenuCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </DesktopFrame>
  );
}