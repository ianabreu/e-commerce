import { prismaClient } from "@/lib/prisma";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}
const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });
  if (!product) {
    return null;
  }
  return <p>{product.name}</p>;
};

export default ProductDetailsPage;
