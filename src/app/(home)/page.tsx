import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="px-5">
        <PromoBanner
          src={"/banner-home-01.png"}
          alt={"Até 55% de desconto esse mês!"}
        />
      </div>
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="px-5">
        <PromoBanner
          src={"/banner-home-02.png"}
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div className="px-5">
        <PromoBanner
          src={"/banner-home-03.png"}
          alt="Até 20% de desconto em fones!"
        />
      </div>
      <div>
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={headphones} />
      </div>
    </div>
  );
}
