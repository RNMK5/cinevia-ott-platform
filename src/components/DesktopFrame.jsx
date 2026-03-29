import { Bell, Compass, Film, House, PlaySquare, Search, UserRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const menuItems = [
  { to: '/', label: 'Home', icon: House },
  { to: '/details', label: 'Details', icon: Film },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/profile', label: 'Profile', icon: UserRound },
];

export default function DesktopFrame({
  children,
  title = 'Discover',
  subtitle = 'Stream the latest cinematic experiences.',
  searchPlaceholder = 'Search movies, shows, genres...',
}) {
  const location = useLocation();

  return (
    <main className="desktop-layout">
      <aside className="desktop-sidebar glass-panel">
        <div className="desktop-sidebar__top">
          <BrandLogo />
          <nav className="desktop-menu">
            {menuItems.map(({ to, label, icon: Icon }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`desktop-menu__item ${isActive ? 'is-active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="desktop-sidebar__bottom glass-panel">
          <div className="desktop-mini-card">
            <div className="desktop-mini-card__icon">
              <PlaySquare size={18} />
            </div>
            <div>
              <h4>Watchlist Sync</h4>
              <p>Your library is ready across all devices.</p>
            </div>
          </div>

          <div className="desktop-mini-card">
            <div className="desktop-mini-card__icon">
              <Compass size={18} />
            </div>
            <div>
              <h4>Explore Picks</h4>
              <p>Hand-picked trending titles for tonight.</p>
            </div>
          </div>
        </div>
      </aside>

      <section className="desktop-content">
        <header className="desktop-topbar">
          <div>
            <span className="desktop-topbar__eyebrow">OTT PLATFORM</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          <div className="desktop-topbar__actions">
            <label className="desktop-search glass-panel">
              <Search size={18} />
              <input type="text" placeholder={searchPlaceholder} />
            </label>

            <button className="icon-button glass-panel">
              <Bell size={18} />
            </button>

            <Link to="/profile" className="desktop-avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGjnWaAmoel4XC5xDTwkF1uDKPYEB5MwfK3LDKrKlALgRou7J8h1x84UPlCmL1PGxQf7WmJj8VO104M4TOandxqna_e5FnAvm3wrWfhpk81TmvJgYXhvAjUc6LBgK-dnxlOO-_ctXuBvg6xixzw-lUqlMzW3JB1EjBmSR3tvOJaKHKB-1dJ-tkBotDZPuXzjYk6QFxN1MDbQz7Qdc_PRL1JWz48qabsEqqxFQ1XS8O6F-1xyaOzf2jNa2G5YTQ9fbCfmLriNRUaTlT"
                alt="Profile"
              />
            </Link>
          </div>
        </header>

        <div className="desktop-page-body">{children}</div>
      </section>
    </main>
  );
}