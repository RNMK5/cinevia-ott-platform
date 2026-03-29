export function PrimaryButton({ children, icon }) {
  return (
    <button className="btn btn--primary">
      {icon}
      <span>{children}</span>
    </button>
  );
}

export function GhostButton({ children, icon }) {
  return (
    <button className="btn btn--ghost">
      {icon}
      <span>{children}</span>
    </button>
  );
}
