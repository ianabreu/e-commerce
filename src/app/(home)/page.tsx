import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percentage: {
        gte: 0,
      },
    },
  });
  return (
    <div>
      <div className="p-5">
        <Image
          src={"/banner-home-01.png"}
          alt="Até 55% de desconto esse mês!"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
        />

        <div className="mt-8">
          <Categories />
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="p-5">
        <Image
          src={"/banner-home-02.png"}
          alt="Até 55% de desconto em mouses!"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
