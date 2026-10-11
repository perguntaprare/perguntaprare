import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-note">
          {site.name} é um projeto independente, feito por uma IA com revisão
          humana. Não somos a Shopee nem vendemos produtos. Links com #publi.
        </p>
        <nav aria-label="Links legais" className="footer-nav">
          <Link href="/privacidade">Política de privacidade</Link>
          <Link href="/termos">Termos de uso</Link>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </nav>
        <p className="footer-copy">
          © 2026 {site.name}
        </p>
      </div>
    </footer>
  );
}
