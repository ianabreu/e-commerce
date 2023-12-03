import { MenuIcon, ShoppingCartIcon } from "lucide-react";
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
  menu: <MenuIcon />,
  cart: <ShoppingCartIcon />,
};

const Sidebar = ({
  children,
  side = "left",
  icon = "menu",
  header,
}: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          {MENU_ICON[icon]}
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="flex h-full flex-col gap-8">
        {header && (
          <SheetHeader className="text-left text-lg font-semibold">
            {header}
          </SheetHeader>
        )}
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
