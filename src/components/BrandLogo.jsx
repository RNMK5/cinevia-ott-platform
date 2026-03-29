export default function BrandLogo({ small = false }) {
  return (
    <div className={`brand-logo ${small ? 'brand-logo--small' : ''}`}>
      <span className="brand-logo__mark" />
      <span className="brand-logo__text">Cinevia</span>
    </div>
  );
}
