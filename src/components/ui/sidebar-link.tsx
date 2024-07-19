import { ReactNode } from "react";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  Package,
  PercentIcon,
} from "lucide-react";
import { Button } from "./button";
import { SheetClose } from "./sheet";
import Link from "next/link";

interface SidebarLinkProps {
  children: ReactNode;
  icon?: keyof typeof SIDEBAR_ICON;
  href?: string;
  onClick?: () => void;
}
export const SIDEBAR_ICON = {
  login: <LogInIcon size={16} />,
  logout: <LogOutIcon size={16} />,
  home: <HomeIcon size={16} />,
  deals: <PercentIcon size={16} />,
  catalog: <ListOrderedIcon size={16} />,
  order: <Package size={16} />,
};
const SidebarLink = ({
  children,
  icon,
  href = "/",
  onClick,
}: SidebarLinkProps) => {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={onClick}
        >
          {icon && SIDEBAR_ICON[icon]}
          {children}
        </Button>
      </Link>
    </SheetClose>
  );
};

export default SidebarLink;
