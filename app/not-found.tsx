import type { Metadata } from "next";
import Link from "next/link";
import { ReMark } from "@/components/ReMark";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container notfound">
      <ReMark size={96} />
      <p className="eyebrow">Erro 404</p>
      <h1>Essa página eu não achei.</h1>
      <p className="lead">
        Li tudo por aqui e ela não existe. Talvez o link tenha mudado.
      </p>
      <Link href="/" className="button">
        Voltar para o início
      </Link>
    </section>
  );
}
