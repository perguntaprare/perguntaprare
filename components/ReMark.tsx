type Props = {
  size?: number;
  title?: string;
};

// The "Rê" magnifier-bubble mark: a speech bubble that is also a magnifying
// glass, with the name inside the lens.
export function ReMark({ size = 40, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className="re-mark"
    >
      <circle cx="28" cy="27" r="21" fill="var(--mark-fill)" />
      <path d="M13 38 L7 55 L24 45 Z" fill="var(--mark-fill)" />
      <path
        d="M43 42 L56 55"
        stroke="var(--mark-fill)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <text
        x="28"
        y="35"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="var(--mark-text)"
      >
        Rê
      </text>
    </svg>
  );
}
