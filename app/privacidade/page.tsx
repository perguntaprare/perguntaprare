/*
 * TEMPLATE NOTICE: this privacy policy is a plain-language template written
 * for the current state of the project (static public site, no visitor
 * accounts, no forms, no tracking cookies, developer apps that only publish to
 * our own social accounts) and for the operators' internal tool (the
 * "publisher" at app.perguntaprare.com.br, decided 2026-10-15 in D20: sign-in
 * for the project's operators only, no public sign-up; this site has no
 * sign-in at all). It is written to cover the YouTube API Services
 * Developer Policies (section III.A) and the Meta, Pinterest and TikTok
 * developer reviews.
 * It must be reviewed by a qualified professional (lawyer / LGPD specialist)
 * before being relied on, and updated whenever the site or the apps change.
 * Placeholder to confirm: contact email
 * (see content/site.ts).
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como o ${site.name} trata dados pessoais, em linguagem simples e de acordo com a LGPD.`,
  alternates: { canonical: "/privacidade" },
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}

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

      <h2>2. O que este site coleta de quem visita</h2>
      <p>
        Nada que você digite. Visitantes nunca precisam (nem são convidados a)
        criar conta ou fazer login. O site não tem cadastro aberto, formulário,
        comentários nem newsletter, não exibe anúncios, não deixa terceiros
        exibirem conteúdo ou publicidade nele e não usa cookies de publicidade
        ou de análise.
      </p>
      <p>
        O site é hospedado pela Vercel. Como qualquer servidor, a hospedagem
        pode registrar dados técnicos de acesso, como endereço IP, data e hora,
        página acessada, navegador e sistema. Esses registros servem para
        manter o site funcionando e seguro e são tratados pela Vercel conforme
        a{" "}
        <ExternalLink href="https://vercel.com/legal/privacy-policy">
          política de privacidade dela
        </ExternalLink>
        . Nós não usamos esses registros para identificar você.
      </p>

      <h2>3. Ferramenta interna dos operadores</h2>
      <p>
        Este site não tem login. As pessoas que operam o projeto usam uma
        ferramenta interna (o &ldquo;publicador&rdquo;), em{" "}
        <ExternalLink href="https://app.perguntaprare.com.br">
          app.perguntaprare.com.br
        </ExternalLink>
        , para conectar as contas da marca nas redes sociais e publicar os
        nossos próprios vídeos. Só os operadores entram lá: não existe
        cadastro público, e nenhum visitante é convidado a entrar.
      </p>
      <p>A ferramenta interna guarda apenas:</p>
      <ul>
        <li>
          a identidade de login do operador (nome, e-mail e identificador da
          conta usada para entrar, por exemplo a conta Google), para verificar
          que só operadores autorizados acessam;
        </li>
        <li>
          um cookie de sessão estritamente necessário, colocado só no
          navegador de quem entra na ferramenta interna, para manter o login.
          Ele não é usado para publicidade nem para acompanhar a navegação, e
          visitantes deste site não recebem esse cookie;
        </li>
        <li>
          as credenciais de acesso (tokens) das contas da própria marca nas
          redes sociais, descritas na seção 4.
        </li>
      </ul>

      <h2>4. Nossos aplicativos nas redes sociais</h2>
      <p>
        Mantemos aplicativos de desenvolvedor no Instagram (Meta), Pinterest,
        YouTube (Google) e TikTok. Eles servem para uma coisa só: publicar o
        nosso próprio conteúdo nas nossas próprias contas (@perguntaprare).
      </p>
      <ul>
        <li>
          Os aplicativos se conectam apenas às contas da marca, com
          autorização dada pelos próprios operadores.
        </li>
        <li>
          Eles não acessam, coletam, armazenam nem compartilham dados de
          outros usuários dessas plataformas.
        </li>
        <li>
          O que acessamos é o mínimo para publicar: o identificador e o nome
          da nossa conta, o envio dos nossos vídeos, imagens, títulos e
          legendas, e o status das nossas publicações.
        </li>
        <li>
          As credenciais de acesso (tokens) ficam guardadas de forma privada e
          protegida, são usadas só para publicar e não são vendidas nem
          compartilhadas com ninguém. Elas são apagadas quando o acesso é
          revogado ou quando deixam de ser necessárias.
        </li>
      </ul>
      <p>
        O acesso de qualquer aplicativo pode ser revogado a qualquer momento
        nas configurações de cada plataforma:
      </p>
      <ul>
        <li>
          <strong>YouTube (Google):</strong> página de{" "}
          <ExternalLink href="https://security.google.com/settings/security/permissions">
            permissões de segurança do Google
          </ExternalLink>{" "}
          (também em{" "}
          <ExternalLink href="https://myaccount.google.com/permissions">
            myaccount.google.com/permissions
          </ExternalLink>
          ). Política de privacidade:{" "}
          <ExternalLink href="http://www.google.com/policies/privacy">
            Google
          </ExternalLink>
          .
        </li>
        <li>
          <strong>Instagram e Facebook (Meta):</strong> no Instagram, em{" "}
          <ExternalLink href="https://www.instagram.com/accounts/manage_access/">
            Apps e sites
          </ExternalLink>
          ; no Facebook, em{" "}
          <ExternalLink href="https://www.facebook.com/settings?tab=business_tools">
            Integrações comerciais
          </ExternalLink>
          . Políticas de privacidade:{" "}
          <ExternalLink href="https://privacycenter.instagram.com/policy">
            Instagram
          </ExternalLink>{" "}
          e{" "}
          <ExternalLink href="https://www.facebook.com/privacy/policy/">
            Meta
          </ExternalLink>
          .
        </li>
        <li>
          <strong>Pinterest:</strong> em{" "}
          <ExternalLink href="https://www.pinterest.com/settings/security">
            Configurações &gt; Segurança e logins
          </ExternalLink>
          , na parte de apps conectados. Política de privacidade:{" "}
          <ExternalLink href="https://policy.pinterest.com/pt-br/privacy-policy">
            Pinterest
          </ExternalLink>
          .
        </li>
        <li>
          <strong>TikTok:</strong> no app, em Perfil &gt; Configurações e
          privacidade &gt; Segurança &gt; Gerenciar permissões de apps (
          <ExternalLink href="https://support.tiktok.com/pt_BR/account-and-privacy/account-privacy-settings/third-party-apps">
            veja a ajuda do TikTok
          </ExternalLink>
          ). Política de privacidade:{" "}
          <ExternalLink href="https://www.tiktok.com/legal/page/row/privacy-policy/pt-BR">
            TikTok
          </ExternalLink>
          .
        </li>
      </ul>
      <p>
        Se você interage com os nossos perfis (curtir, comentar, seguir), isso
        acontece dentro de cada rede social e segue a política de privacidade
        dela.
      </p>

      <h2>5. Uso dos Serviços de API do YouTube</h2>
      <p>
        O {site.name} usa os Serviços de API do YouTube (YouTube API
        Services) para publicar e gerenciar os vídeos do nosso próprio canal.
        Quem usa esse recurso concorda com os{" "}
        <ExternalLink href="https://www.youtube.com/t/terms">
          Termos de Serviço do YouTube
        </ExternalLink>
        . O tratamento de dados pelo Google segue a{" "}
        <ExternalLink href="http://www.google.com/policies/privacy">
          Política de Privacidade do Google
        </ExternalLink>
        .
      </p>
      <ul>
        <li>
          <strong>O que acessamos:</strong> somente dados do nosso próprio
          canal, autorizados por um operador: o identificador e o nome do
          canal, o envio dos nossos vídeos (com título, descrição, miniatura e
          configurações de privacidade) e o status de processamento e
          publicação desses vídeos. Não acessamos dados de outros usuários do
          YouTube.
        </li>
        <li>
          <strong>Como usamos:</strong> apenas para publicar e gerenciar os
          nossos vídeos. Não usamos esses dados para publicidade, para criar
          perfis nem para gerar métricas derivadas.
        </li>
        <li>
          <strong>O que guardamos e por quanto tempo:</strong> os tokens de
          autorização ficam guardados de forma protegida até que o acesso seja
          revogado ou deixe de ser necessário. Outros dados da API (como o
          nome do canal e o status dos vídeos) são atualizados ou apagados em
          até 30 dias.
        </li>
        <li>
          <strong>Com quem compartilhamos:</strong> com ninguém. Os dados não
          são vendidos nem cedidos; ficam apenas na infraestrutura de
          hospedagem da ferramenta interna.
        </li>
        <li>
          <strong>Dispositivos e cookies:</strong> o uso da API não coloca
          cookies no navegador de visitantes. O único cookie é o de sessão da
          ferramenta interna, descrito na seção 3.
        </li>
        <li>
          <strong>Como revogar:</strong> o acesso pode ser removido a qualquer
          momento na página de{" "}
          <ExternalLink href="https://security.google.com/settings/security/permissions">
            permissões de segurança do Google
          </ExternalLink>
          . Depois da revogação, apagamos os dados da API guardados em até 30
          dias.
        </li>
        <li>
          <strong>Pedido de exclusão:</strong> para pedir que apaguemos dados
          guardados, escreva para <a href={`mailto:${email}`}>{email}</a>.
          Apagamos o quanto antes, em até 7 dias.
        </li>
      </ul>

      <h2>6. Links de afiliado e sites de terceiros</h2>
      <p>
        Alguns links levam à Shopee ou a outros sites por meio de programas de
        afiliados (#publi). Quando você clica, sai do {site.name}: a loja pode
        usar cookies e coletar dados para registrar a compra e a comissão,
        conforme a política de privacidade dela. Nós não recebemos seus dados
        pessoais nem os detalhes da sua compra, só relatórios agregados de
        comissão.
      </p>

      <h2>7. Seus direitos pela LGPD</h2>
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
        <a href={`mailto:${email}`}>{email}</a>. Respondemos em até 15 dias
        (pedidos de exclusão de dados obtidos pela API do YouTube são
        atendidos em até 7 dias). Se não ficar satisfeito, você também pode
        procurar a Autoridade Nacional de Proteção de Dados (ANPD), em{" "}
        <ExternalLink href="https://www.gov.br/anpd">gov.br/anpd</ExternalLink>
        .
      </p>

      <h2>8. Crianças</h2>
      <p>
        O conteúdo é voltado a adultos que fazem compras online. Não coletamos
        dados de crianças ou adolescentes.
      </p>

      <h2>9. Mudanças nesta política</h2>
      <p>
        Se o site passar a coletar algum dado de visitantes (por exemplo, um
        formulário ou uma busca), ou se a ferramenta interna passar a guardar
        algo além do descrito aqui, atualizamos esta página antes, com a nova
        data de vigência.
      </p>

      <h2>10. Contato</h2>
      <p>
        {/* TODO: confirm the contact mailbox exists (content/site.ts). */}
        Dúvidas ou reclamações sobre privacidade:{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <p className="legal-meta">
        Veja também os <Link href="/termos">termos de uso</Link>.
      </p>
    </article>
  );
}
