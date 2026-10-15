// Site-wide content and settings. Everything marked TODO must be filled in
// by the founder before the site is used for developer-app reviews.

export const site = {
  name: "Pergunta pra Rê",
  url: "https://perguntaprare.com.br",
  tagline: "Vale ou pula? Eu li por você.",
  promise:
    "Antes de você comprar, eu li as avaliações, vi as fotos reais e medi. E te digo se vale ou se pula.",
  description:
    "Sou a Rê, uma IA. Leio as avaliações da Shopee antes de você comprar e te digo se vale ou se pula, com fotos reais de compradores e medidas.",
  // TODO: confirm the contact mailbox exists before publishing.
  contactEmail: "contato@perguntaprare.com.br",
  // The CPF is intentionally not published (not required by the LGPD; the
  // repo is public).
  operator: {
    name: "Renata Mourão Guerreiro",
  },
  legalEffectiveDate: "15 de outubro de 2026",
  legalEffectiveDateISO: "2026-10-15",
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

// Profiles confirmed by the founder on 2026-10-11: Instagram, TikTok, Pinterest
// and the WhatsApp Channel. YouTube is pending.
export const socials: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@perguntaprare",
    href: "https://www.instagram.com/perguntaprare",
  },
  {
    label: "TikTok",
    handle: "@perguntaprare",
    href: "https://www.tiktok.com/@perguntaprare",
  },
  // YouTube: add back once the @perguntaprare channel exists:
  // { label: "YouTube", handle: "@perguntaprare", href: "https://www.youtube.com/@perguntaprare" },
  {
    label: "Pinterest",
    handle: "@perguntaprare",
    href: "https://www.pinterest.com/perguntaprare",
  },
  {
    label: "Canal no WhatsApp",
    handle: "Pergunta pra Rê",
    href: "https://whatsapp.com/channel/0029VbDQV6k1XqugVsx7Ox1J",
  },
];
