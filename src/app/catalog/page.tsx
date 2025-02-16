import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";
import { prismaClient } from "@/lib/prisma";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({
    orderBy: { name: "asc" },
  });
  return (
    <div className="container flex flex-col gap-2 p-4">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShapesIcon size={16} /> Catálogo
      </Badge>
      <div className="m-auto grid w-full  grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
