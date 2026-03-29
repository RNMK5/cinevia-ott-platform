import { Clapperboard, Compass, House, Search, UserRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', icon: House },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/details', label: 'Watch', icon: Clapperboard },
  { to: '/desktop', label: 'Browse', icon: Compass },
  { to: '/profile', label: 'Profile', icon: UserRound },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="mobile-nav glass-panel">
      {navItems.map(({ to, label, icon: Icon }) => {
        const active = location.pathname === to;
        return (
          <Link key={to} to={to} className={`mobile-nav__item ${active ? 'is-active' : ''}`}>
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
