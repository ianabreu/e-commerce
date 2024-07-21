import {
  AlignRight,
  MenuIcon,
  MenuSquareIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { ReactNode } from "react";

interface SidebarProps {
  children?: ReactNode;
  side?: "left" | "right" | "bottom" | "top";
  icon?: "menu" | "cart";
  header?: ReactNode;
}

const MENU_ICON = {
  menu: <AlignRight />,
  cart: <ShoppingCartIcon />,
};

const Sidebar = ({
  children,
  side = "left",
  icon = "menu",
  header,
}: SidebarProps) => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            {MENU_ICON[icon]}
          </Button>
        </SheetTrigger>
        <SheetContent side={side} className="flex h-full flex-col">
          {header && (
            <SheetHeader className="text-left text-lg font-semibold">
              {header}
            </SheetHeader>
          )}
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
