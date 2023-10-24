import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category: { image_url, name } }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={image_url}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-3/4 max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="rounded-bl-lg rounded-br-lg  bg-accent py-3">
        <p className="text-center text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
