import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container max-w-sm text-center">
      <h2 className="text-lg font-bold">Oops! Página não encontrada</h2>
      <p className="text-sm">Parece que esse link não existe mais.</p>
      <p className="text-sm">
        Que tal voltar à{" "}
        <Link href="/" className="text-blue-400">
          Página inicial
        </Link>{" "}
        ou dar uma olhada em nossos{" "}
        <Link href={"/deals"} className="text-blue-400">
          produtos em ofertas!
        </Link>
      </p>
    </div>
  );
}
