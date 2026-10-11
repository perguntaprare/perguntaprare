/*
 * TEMPLATE NOTICE: these terms of use are a plain-language template written
 * for the current state of the project. They must be reviewed by a qualified
 * professional (lawyer) before being relied on, and updated whenever the site
 * or the business changes. Placeholders to fill in: operator name and
 * CPF/CNPJ, contact email (see content/site.ts).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: `As regras de uso do ${site.name}, em linguagem simples.`,
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  const email = site.contactEmail;
  return (
    <article className="container legal">
      <p className="eyebrow">Documento legal</p>
      <h1>Termos de uso</h1>
      <p className="legal-meta">
        Vigentes desde{" "}
        <time dateTime={site.legalEffectiveDateISO}>
          {site.legalEffectiveDate}
        </time>
        .
      </p>

      <p>
        Ao usar este site e acompanhar o {site.name} nas redes sociais, você
        concorda com estes termos. O projeto é mantido por{" "}
        {/* TODO: operator name and CPF/CNPJ (content/site.ts). */}
        <span className="placeholder">{site.operator.name}</span> (
        <span className="placeholder">{site.operator.id}</span>).
      </p>

      <h2>1. O que é o {site.name}</h2>
      <p>
        É conteúdo informativo. A Rê é uma inteligência artificial que lê
        avaliações públicas de compradores e gera resumos: proporções de
        reclamações, fotos de compradores, medidas e um veredito (VALE ou
        PULA). Os resumos passam por revisão humana, mas são gerados por IA e
        podem conter erros.
      </p>
      <p>
        Não testamos os produtos. O veredito é uma opinião baseada no que
        outros compradores publicaram, na data indicada, e não uma
        recomendação profissional.
      </p>

      <h2>2. Não somos vendedores</h2>
      <p>
        Não vendemos, fabricamos, estocamos nem entregamos nenhum produto, e
        não garantimos a qualidade, a disponibilidade, o preço ou a entrega de
        nada do que aparece no nosso conteúdo.
      </p>

      <h2>3. Compras, trocas e devoluções</h2>
      <p>
        As compras acontecem na Shopee (ou em outra loja indicada), direto com
        o vendedor. Pagamento, entrega, trocas, devoluções e reembolsos seguem
        as regras dessa loja e do Código de Defesa do Consumidor. Em caso de
        problema com um pedido, fale com o vendedor ou com o suporte da loja.
      </p>
      <p>
        Se um produto que recomendamos veio diferente do esperado, conte pra
        gente em <a href={`mailto:${email}`}>{email}</a>: relemos as
        avaliações e, se for o caso, publicamos uma Correção da Rê.
      </p>

      <h2>4. Links de afiliado (#publi)</h2>
      <p>
        Muitos links são de afiliado. Quando você compra por eles, recebemos
        uma comissão da loja, sem custo extra para você. Marcamos esse
        conteúdo com #publi e mostramos a taxa de comissão de cada produto. A
        comissão não decide o veredito: também dizemos &ldquo;pula&rdquo; para
        produtos que pagariam bem.
      </p>

      <h2>5. Sem garantias</h2>
      <p>
        O conteúdo é oferecido &ldquo;como está&rdquo;. Avaliações, preços e
        produtos mudam com o tempo, e um veredito pode ficar desatualizado. Na
        medida permitida pela lei, não nos responsabilizamos por decisões de
        compra tomadas com base no conteúdo, nem por produtos, serviços ou
        sites de terceiros.
      </p>

      <h2>6. Uso do conteúdo</h2>
      <p>
        Você pode compartilhar nossos links e vídeos à vontade. Não copie o
        conteúdo, a marca ou a personagem Rê para fins comerciais sem
        autorização. As fotos de compradores pertencem a quem as publicou e
        aparecem apenas como referência.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        Como tratamos dados está na{" "}
        <Link href="/privacidade">política de privacidade</Link>.
      </p>

      <h2>8. Mudanças</h2>
      <p>
        Podemos atualizar estes termos. A versão vigente fica sempre nesta
        página, com a data no topo.
      </p>

      <h2>9. Lei aplicável</h2>
      <p>
        Estes termos seguem as leis da República Federativa do Brasil. Fica
        eleito o foro do domicílio do consumidor, conforme o Código de Defesa
        do Consumidor.
      </p>

      <h2>10. Contato</h2>
      <p>
        {/* TODO: confirm the contact mailbox exists (content/site.ts). */}
        Fale com a gente em <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  );
}
