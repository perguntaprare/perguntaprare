// Rê, the original character (direction C from the design canvas): soft,
// rounded proportions, teal-and-cream outfit, reading glasses pushed up,
// holding a review card, with an "IA" badge. Purely stylised on purpose.
export function ReCharacter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      role="img"
      aria-label="Ilustração da Rê: personagem arredondada de cabelo cacheado, óculos de leitura no alto da cabeça, roupa teal e creme, segurando um cartão de avaliação, com um selo IA"
      className={className}
    >
      <ellipse cx="120" cy="272" rx="70" ry="8" fill="#0B3E42" opacity="0.35" />
      <path
        d="M66 276 C66 230 90 212 120 212 C150 212 174 230 174 276 Z"
        fill="#FFF8EE"
      />
      <path
        d="M66 276 C66 246 74 228 88 220 L96 276 Z M174 276 C174 246 166 228 152 220 L144 276 Z"
        fill="#0F5257"
      />
      <path
        d="M40 132 C40 70 80 44 120 44 C160 44 200 70 200 132 C200 168 190 196 176 206 L64 206 C50 196 40 168 40 132 Z"
        fill="#33231E"
      />
      <ellipse cx="120" cy="142" rx="64" ry="62" fill="#A86E4C" />
      <path
        d="M58 122 C66 84 96 70 124 72 C152 74 176 88 184 122 C164 106 150 100 136 100 C126 108 104 112 84 108 C74 112 64 116 58 122 Z"
        fill="#33231E"
      />
      <circle cx="62" cy="96" r="14" fill="#33231E" />
      <circle cx="178" cy="96" r="14" fill="#33231E" />
      <rect
        x="84"
        y="62"
        width="30"
        height="20"
        rx="9"
        fill="#FFF8EE"
        fillOpacity="0.18"
        stroke="#4FA8A6"
        strokeWidth="4"
      />
      <rect
        x="126"
        y="62"
        width="30"
        height="20"
        rx="9"
        fill="#FFF8EE"
        fillOpacity="0.18"
        stroke="#4FA8A6"
        strokeWidth="4"
      />
      <path d="M114 72 L126 72" stroke="#4FA8A6" strokeWidth="4" />
      <ellipse cx="96" cy="146" rx="7" ry="9" fill="#1B1F23" />
      <ellipse cx="144" cy="146" rx="7" ry="9" fill="#1B1F23" />
      <circle cx="98" cy="143" r="2.5" fill="#FFF8EE" />
      <circle cx="146" cy="143" r="2.5" fill="#FFF8EE" />
      <path
        d="M86 128 Q95 124 104 127 M136 124 Q145 118 154 123"
        fill="none"
        stroke="#33231E"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="82" cy="166" rx="9" ry="6" fill="#C2805E" />
      <ellipse cx="158" cy="166" rx="9" ry="6" fill="#C2805E" />
      <path
        d="M110 170 Q121 178 133 168"
        fill="none"
        stroke="#1B1F23"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="88"
        y="214"
        width="64"
        height="44"
        rx="8"
        fill="#FFF8EE"
        stroke="#1B1F23"
        strokeWidth="2.5"
      />
      <path
        d="M98 228 L122 228 M98 238 L140 238 M98 248 L132 248"
        stroke="#0F5257"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="86" cy="244" r="10" fill="#A86E4C" />
      <circle cx="154" cy="244" r="10" fill="#A86E4C" />
      <rect x="164" y="222" width="22" height="14" rx="7" fill="#0F5257" />
      <text
        x="175"
        y="232.5"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#FFF8EE"
      >
        IA
      </text>
    </svg>
  );
}
