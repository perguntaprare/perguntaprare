type Verdict = "vale" | "pula";

// The VALE / PULA stamp. Always carries the word and an icon; colour only
// reinforces it (never the only signal).
export function Stamp({
  verdict,
  size = "md",
}: {
  verdict: Verdict;
  size?: "sm" | "md";
}) {
  const isVale = verdict === "vale";
  return (
    <span className={`stamp stamp-${verdict} stamp-${size}`}>
      <span className="stamp-inner">
        <svg viewBox="0 0 54 54" aria-hidden="true" className="stamp-icon">
          <circle cx="27" cy="27" r="25" fill="currentColor" />
          {isVale ? (
            <path
              d="M15 28 L24 37 L40 18"
              fill="none"
              stroke="#FFF8EE"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M18 18 L36 36 M36 18 L18 36"
              fill="none"
              stroke="#FFF8EE"
              strokeWidth="6"
              strokeLinecap="round"
            />
          )}
        </svg>
        <span className="stamp-word">{isVale ? "VALE" : "PULA"}</span>
      </span>
    </span>
  );
}
