import ProductItem from "@/components/ui/ProductItem";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsProducts = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="container flex flex-col gap-8 pt-4">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <PercentIcon size={16} /> Ofertas
      </Badge>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 ">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsProducts;
