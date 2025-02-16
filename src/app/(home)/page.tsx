import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import Slider from "./components/slider";
const slides = [
  {
    source: "/banner-home-01.png",
    title: "Até 55% de desconto esse mês!",
  },
  {
    source: "/banner-home-02.png",
    title: "Até 55% de desconto em mouses!",
  },
  {
    source: "/banner-home-03.png",
    title: "Até 20% de desconto em fones!",
  },
];

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
  });
  const smartphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "smartphones",
      },
    },
  });
  const televisores = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "televisores",
      },
    },
  });

  return (
    <div className="container flex flex-col gap-8 px-0">
      <div className="flex">
        <Slider slides={slides} />
      </div>
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div>
        <SectionTitle>Smartphones</SectionTitle>
        <ProductList products={smartphones} />
      </div>
      <div>
        <SectionTitle>Televisores</SectionTitle>
        <ProductList products={televisores} />
      </div>
    </div>
  );
}
