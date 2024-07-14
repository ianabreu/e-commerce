import Link from "next/link";
import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({
  category: { image_url, name, slug },
}: CategoryItemProps) => {
  return (
    <Link href={`/category/${slug}`}>
      <div className="flex flex-col">
        <div
          className="flex h-[120px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r 
          from-primary 
          to-[#00d65d]"
        >
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
        <div className="rounded-bl-lg rounded-br-lg bg-popover-foreground py-3">
          <p className="text-center text-sm font-semibold text-background">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
