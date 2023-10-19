import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  SquareIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}
const categoryIcon = {
  keyboards: <KeyboardIcon size={16} />,
  monitors: <MonitorIcon size={16} />,
  headphones: <HeadphonesIcon size={16} />,
  mousepads: <SquareIcon size={16} />,
  speakers: <SpeakerIcon size={16} />,
  mouses: <MouseIcon size={16} />,
};
const CategoryItem = ({ category: { name, slug } }: CategoryItemProps) => {
  return (
    <Badge
      variant={"outline"}
      className={"flex items-center justify-center gap-2 rounded-lg py-3"}
    >
      {categoryIcon[slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold ">{name}</span>
    </Badge>
  );
};

export default CategoryItem;
