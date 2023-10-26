import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

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
  return (
    <div>
      <ProductImages imageURLs={product.image_urls} name={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
