import { Download, MonitorPlay, Settings2, UserRound } from 'lucide-react';

const iconMap = {
  user: UserRound,
  download: Download,
  monitor: MonitorPlay,
  sliders: Settings2,
};

export default function ProfileMenuCard({ item }) {
  const Icon = iconMap[item.icon] || UserRound;

  return (
    <article className="profile-menu-card glass-panel">
      <div className="profile-menu-card__left">
        <span className="profile-menu-card__icon">
          <Icon size={18} />
        </span>
        <div>
          <h4>{item.title}</h4>
          <p>{item.subtitle}</p>
        </div>
      </div>
      {item.tag ? <span className="pill pill--active">{item.tag}</span> : null}
    </article>
  );
}
