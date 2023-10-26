import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category: { name, slug } }: CategoryItemProps) => {
  return (
    <Badge
      variant={"outline"}
      className={"flex items-center justify-center gap-2 rounded-lg py-3"}
    >
      {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold ">{name}</span>
    </Badge>
  );
};

export default CategoryItem;
