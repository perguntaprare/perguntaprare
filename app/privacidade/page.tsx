/*
 * TEMPLATE NOTICE: this privacy policy is a plain-language template written
 * for the current state of the project (static site, no accounts, no forms,
 * no cookies, developer apps that only publish to our own social accounts).
 * It must be reviewed by a qualified professional (lawyer / LGPD specialist)
 * before being relied on, and updated whenever the site or the apps change.
 * Placeholder to confirm: contact email
 * (see content/site.ts).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como o ${site.name} trata dados pessoais, em linguagem simples e de acordo com a LGPD.`,
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  const email = site.contactEmail;
  return (
    <article className="container legal">
      <p className="eyebrow">Documento legal</p>
      <h1>Política de privacidade</h1>
      <p className="legal-meta">
        Vigente desde{" "}
        <time dateTime={site.legalEffectiveDateISO}>
          {site.legalEffectiveDate}
        </time>
        .
      </p>

      <p>
        Esta política explica, em linguagem simples, quais dados o {site.name}{" "}
        trata e por quê. Ela segue a Lei Geral de Proteção de Dados (Lei nº
        13.709/2018, a &ldquo;LGPD&rdquo;).
      </p>

      <h2>1. Quem somos</h2>
      <p>
        O {site.name} é um projeto de conteúdo em que uma inteligência
        artificial, a Rê, resume avaliações públicas de produtos. O responsável
        pelo projeto (o &ldquo;controlador&rdquo;, nos termos da LGPD) é{" "}
        {site.operator.name}. Contato:{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>2. O que este site coleta</h2>
      <p>
        Nada que você digite. Este site não tem cadastro, login, formulário,
        comentários, newsletter nem cookies de publicidade ou de análise.
      </p>
      <p>
        O site é hospedado pela Vercel. Como qualquer servidor, a hospedagem
        pode registrar dados técnicos de acesso, como endereço IP, data e hora,
        página acessada, navegador e sistema. Esses registros servem para
        manter o site funcionando e seguro e são tratados pela Vercel conforme
        a{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          rel="noopener noreferrer"
        >
          política de privacidade dela
        </a>
        . Nós não usamos esses registros para identificar você.
      </p>

      <h2>3. Nossos aplicativos nas redes sociais</h2>
      <p>
        Mantemos aplicativos de desenvolvedor no Instagram (Meta), Pinterest,
        YouTube (Google) e TikTok. Eles servem para uma coisa só: publicar o
        nosso próprio conteúdo nas nossas próprias contas (@perguntaprare).
      </p>
      <ul>
        <li>
          Os aplicativos se conectam apenas às contas da marca, com
          autorização dada por nós mesmos.
        </li>
        <li>
          Eles não acessam, coletam, armazenam nem compartilham dados de
          outros usuários dessas plataformas.
        </li>
        <li>
          As credenciais de acesso (tokens) ficam guardadas de forma privada,
          usadas só para publicar, e podem ser revogadas a qualquer momento nas
          configurações de cada plataforma.
        </li>
      </ul>
      <p>
        Se você interage com os nossos perfis (curtir, comentar, seguir), isso
        acontece dentro de cada rede social e segue a política de privacidade
        dela.
      </p>

      <h2>4. Links de afiliado e sites de terceiros</h2>
      <p>
        Alguns links levam à Shopee ou a outros sites por meio de programas de
        afiliados (#publi). Quando você clica, sai do {site.name}: a loja pode
        usar cookies e coletar dados para registrar a compra e a comissão,
        conforme a política de privacidade dela. Nós não recebemos seus dados
        pessoais nem os detalhes da sua compra, só relatórios agregados de
        comissão.
      </p>

      <h2>5. Seus direitos pela LGPD</h2>
      <p>Você pode, a qualquer momento, pedir para:</p>
      <ul>
        <li>confirmar se tratamos algum dado seu e acessá-lo;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimizar, bloquear ou eliminar dados desnecessários;</li>
        <li>saber com quem compartilhamos dados;</li>
        <li>revogar um consentimento que tenha dado;</li>
        <li>levar seus dados a outro fornecedor (portabilidade).</li>
      </ul>
      <p>
        Para exercer qualquer direito, escreva para{" "}
        <a href={`mailto:${email}`}>{email}</a>. Respondemos em até 15 dias. Se
        não ficar satisfeito, você também pode procurar a Autoridade Nacional
        de Proteção de Dados (ANPD), em{" "}
        <a href="https://www.gov.br/anpd" rel="noopener noreferrer">
          gov.br/anpd
        </a>
        .
      </p>

      <h2>6. Crianças</h2>
      <p>
        O conteúdo é voltado a adultos que fazem compras online. Não coletamos
        dados de crianças ou adolescentes.
      </p>

      <h2>7. Mudanças nesta política</h2>
      <p>
        Se o site passar a coletar algum dado (por exemplo, um formulário ou
        uma busca), atualizamos esta página antes, com a nova data de
        vigência.
      </p>

      <h2>8. Contato</h2>
      <p>
        {/* TODO: confirm the contact mailbox exists (content/site.ts). */}
        Dúvidas sobre privacidade: <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <p className="legal-meta">
        Veja também os <Link href="/termos">termos de uso</Link>.
      </p>
    </article>
  );
}
