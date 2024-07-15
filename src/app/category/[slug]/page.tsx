import ProductItem from "@/components/ui/ProductItem";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

interface CategoryProductsProps {
  params: {
    slug: string;
  };
}
const CategoryProducts = async ({
  params: { slug },
}: CategoryProductsProps) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }
  return (
    <div className="container flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]} {category.name}
      </Badge>
      <div className="grid grid-cols-2 justify-center gap-8 md:grid-cols-3  ">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
