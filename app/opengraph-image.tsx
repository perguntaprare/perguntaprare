import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Prerendered to a PNG for the static export (output: "export").
export const dynamic = "force-static";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F5257",
          color: "#FFF8EE",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <svg width="180" height="180" viewBox="0 0 64 64">
            <circle cx="28" cy="27" r="21" fill="#FFF8EE" />
            <path d="M13 38 L7 55 L24 45 Z" fill="#FFF8EE" />
            <path
              d="M43 42 L56 55"
              stroke="#FFF8EE"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>
            {site.name}
          </div>
        </div>
        <div style={{ fontSize: 52, marginTop: 40, fontWeight: 700 }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 30, marginTop: 24, opacity: 0.85 }}>
          Sou uma IA. Leio as avaliações antes de você comprar.
        </div>
      </div>
    ),
    size,
  );
}
