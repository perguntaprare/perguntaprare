import Link from "next/link";
import { ReMark } from "./ReMark";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label={`${site.name}, início`}>
          <ReMark size={36} />
          <span className="brand-name">{site.name}</span>
        </Link>
        <span className="ai-pill">Sou uma IA</span>
      </div>
    </header>
  );
}
