/*
 * TikTok Login Kit (web) redirect URI:
 *   https://perguntaprare.com.br/api/oauth/tiktok/callback
 *
 * Placeholder until the private operator area (the "publisher") exists. It
 * only acknowledges the redirect. The authorization `code` is never shown,
 * logged or stored here, and `state` is not echoed back either.
 *
 * TODO(publisher): behind operator sign-in, verify `state` against the value
 * saved when the flow started, then exchange `code` for tokens at
 * https://open.tiktokapis.com/v2/oauth/token/ using PKCE (code_verifier) and
 * TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET from env, and store the tokens
 * server-side. Pinterest, YouTube and Instagram get sibling routes under
 * app/api/oauth/<provider>/callback.
 */
import { site } from "@/content/site";

const MAX_DESCRIPTION_LENGTH = 300;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function page(title: string, body: string, status: number): Response {
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="referrer" content="no-referrer">
<title>${escapeHtml(title)} · ${escapeHtml(site.name)}</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 48px 16px; background: #fffaf5; color: #2a2320; line-height: 1.5; }
  main { max-width: 32rem; margin: 0 auto; }
  h1 { font-size: 1.5rem; margin: 0 0 12px; }
  p { margin: 0 0 12px; }
  a { color: inherit; }
  @media (prefers-color-scheme: dark) { body { background: #1c1917; color: #f5efe9; } }
</style>
</head>
<body>
<main>
<h1>${escapeHtml(title)}</h1>
${body}
<p><a href="/">Voltar para o ${escapeHtml(site.name)}</a></p>
</main>
<script>history.replaceState(null, "", location.pathname);</script>
</body>
</html>`;

  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export async function GET(request: Request): Promise<Response> {
  const params = new URL(request.url).searchParams;
  const error = params.get("error");

  if (error) {
    const description = params.get("error_description");
    const details = description
      ? `<p>Detalhe enviado pelo TikTok: ${escapeHtml(
          description.slice(0, MAX_DESCRIPTION_LENGTH),
        )}</p>`
      : "";
    return page(
      "A conexão com o TikTok não foi concluída",
      `<p>O TikTok retornou um erro (<code>${escapeHtml(
        error.slice(0, 64),
      )}</code>).</p>${details}<p>Nada foi salvo. Você pode tentar de novo pela área do publicador quando ela estiver no ar.</p>`,
      400,
    );
  }

  if (params.has("code")) {
    return page(
      "Conexão com o TikTok recebida",
      "<p>Recebemos a autorização do TikTok. O publicador do Pergunta pra Rê vai concluir a conexão.</p><p>Por enquanto nada foi salvo; pode fechar esta página.</p>",
      200,
    );
  }

  return page(
    "Nada para conectar",
    "<p>Esta página recebe o retorno do login do TikTok e não deve ser aberta diretamente.</p>",
    400,
  );
}
