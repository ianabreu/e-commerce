import { ChevronDown } from "lucide-react";
import { DropdownMenuTrigger } from "./dropdown-menu";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface MenuUserTriggerProps {
  data: Session | null;
}
const MenuUserTrigger = ({ data }: MenuUserTriggerProps) => {
  return (
    <DropdownMenuTrigger className="border-transparent">
      <div className="flex items-center gap-2 py-4 text-background">
        <Avatar className="h-6 w-6">
          <AvatarFallback>{data?.user?.name?.[0].toUpperCase()}</AvatarFallback>
          {data?.user.image && <AvatarImage src={data.user.image} />}
        </Avatar>
        <div className="flex gap-2 text-xs">
          <p className="font-medium">{data?.user.name?.split(" ")[0]}</p>
          <ChevronDown size={14} />
        </div>
      </div>
    </DropdownMenuTrigger>
  );
};

export { MenuUserTrigger };
