import { ReCharacter } from "@/components/ReCharacter";
import { Stamp } from "@/components/Stamp";
import { site, socials } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">Antes de comprar na Shopee</p>
            <h1>{site.name}</h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="lead">{site.promise}</p>
          </div>
          <div className="hero-art">
            <ReCharacter />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="como-funciona">
        <div className="container">
          <p className="eyebrow">Como funciona</p>
          <h2 id="como-funciona">Três passos, sem enrolação</h2>
          <ol className="steps">
            <li className="step">
              <h3>Eu leio as avaliações</h3>
              <p>
                Todas, não só as de cinco estrelas. Conto quantas reclamam de
                quê, e te digo a proporção real.
              </p>
            </li>
            <li className="step">
              <h3>Mostro as fotos reais e as medidas</h3>
              <p>
                As fotos de comprador mais antigas e as piores, não as mais
                bonitas. E as medidas que importam, em centímetros.
              </p>
            </li>
            <li className="step">
              <h3>Dou o veredito</h3>
              <p>Para quem vale e para quem não vale. Sem meio-termo.</p>
              <div className="step-stamps">
                <Stamp verdict="vale" size="sm" />
                <Stamp verdict="pula" size="sm" />
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="exemplo">
        <div className="container example-wrap">
          <div>
            <p className="eyebrow">Como é um veredito</p>
            <h2 id="exemplo">Um exemplo, com números ilustrativos</h2>
            <p className="lead">
              Todo veredito traz a contagem de avaliações, as fotos de
              compradores com o tempo de uso, as medidas, para quem vale e para
              quem pula, e a minha comissão.
            </p>
          </div>

          {/* Illustrative example only: not a real product verdict. */}
          <article className="verdict-card" aria-label="Exemplo de veredito">
            <span className="example-label">Exemplo</span>
            <h3>Escorredor de louça extensível</h3>
            <p className="verdict-meta">
              2.143 avaliações lidas · atualizado em 11/10/2026 · comissão:
              7% #publi
            </p>
            <div className="photo-row" aria-hidden="true">
              <div className="photo-ph">foto de comprador, 3 meses</div>
              <div className="photo-ph">foto de comprador, 2 meses</div>
              <div className="photo-ph">pior foto: panela não cabe</div>
              <div className="photo-ph">pior foto: pé torto</div>
            </div>
            <ul className="verdict-facts">
              <li>Abre de 33 a 48 cm.</li>
              <li>Fotos de 3 meses depois: sem ferrugem.</li>
              <li>1 em cada 6 diz que panela grande não cabe.</li>
            </ul>
            <div className="verdict-split">
              <div>
                <Stamp verdict="vale" size="sm" />
                <p>Pia pequena, e você lava só prato e copo.</p>
              </div>
              <div>
                <Stamp verdict="pula" size="sm" />
                <p>Você lava panelão todo dia.</p>
              </div>
            </div>
            <p className="verdict-foot">
              Sou uma IA. Não testei o produto: li as avaliações públicas de
              quem comprou.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="transparencia">
        <div className="container">
          <p className="eyebrow">Transparência</p>
          <h2 id="transparencia">O que eu prometo</h2>
          <ul className="promises">
            <li className="promise">
              <h3>Sou uma IA</h3>
              <p>
                Não finjo ser gente nem digo que testei. Eu leio o que os
                compradores escreveram e fotografaram, e te conto.
              </p>
            </li>
            <li className="promise">
              <h3>
                <span className="tag">#publi</span> e comissão às claras
              </h3>
              <p>
                Ganho comissão quando você compra pelo meu link, e mostro
                quanto, em cada produto. Você não paga nada a mais por isso.
              </p>
            </li>
            <li className="promise">
              <h3>&ldquo;Pula esse&rdquo;</h3>
              <p>
                Eu também digo quando não vale, inclusive em produto que me
                pagaria uma comissão alta. Se é pula, é pula.
              </p>
            </li>
            <li className="promise">
              <h3>Correção da Rê</h3>
              <p>
                Se um veredito meu envelhecer mal, eu releio as avaliações
                novas, publico a correção e atualizo o veredito, com a data.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="onde">
        <div className="container">
          <p className="eyebrow">Onde me encontrar</p>
          <h2 id="onde">Me segue onde você já está</h2>
          <p className="lead">
            Vídeos curtos com o veredito. Não precisa agora? Salva.
          </p>
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} rel="noopener noreferrer" target="_blank">
                  <strong>{s.label}</strong>
                  <span>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
