"use client";
import {
  Heart,
  LogOutIcon,
  Package,
  Search,
  ShoppingBag,
  UserSquare,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SidebarLink, { SIDEBAR_ICON } from "./sidebar-link";
import Sidebar from "./sidebar";
import Logo from "./logo";
import { NavLink } from "./nav-link";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { MenuUserTrigger } from "./menu-user-trigger";
import { Input } from "./input";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  icon: keyof typeof SIDEBAR_ICON;
}

const links: NavLinkProps[] = [
  { href: "/", title: "Início", icon: "home" },
  { href: "/deals", title: "Ofertas", icon: "deals" },
  { href: "/catalog", title: "Catálogo", icon: "catalog" },
];
const Header = () => {
  const { status, data } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <header className="flex w-full flex-col items-center bg-foreground py-4 text-background">
      <div className="flex h-full w-full max-w-7xl items-center justify-between px-4 ">
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav className="hidden gap-4 md:flex">
          {links.map((link) => (
            <NavLink key={link.title} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Button
            size={"icon"}
            variant={"link"}
            className="text-background"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Search />
          </Button>
          <NavLink href={"/cart"}>
            <ShoppingBag />
          </NavLink>

          {status === "authenticated" && data?.user ? (
            <DropdownMenu>
              <MenuUserTrigger data={data} />
              <DropdownMenuContent>
                <DropdownMenuLabel>Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem className="w-full">
                  <NavLink href={"/orders"}>
                    <Package size={16} />
                    Meus Pedidos
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <NavLink href={"/favorites"}>
                    <Heart size={16} />
                    Favoritos
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={handleLogoutClick}
                    className="m-0 gap-4 p-0 hover:text-destructive"
                  >
                    <LogOutIcon size={16} />
                    Sair
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant={"link"}
              className="gap-2 text-background"
              onClick={handleLoginClick}
            >
              <UserSquare />
              Entre
            </Button>
          )}
          <Sidebar icon="menu" side="right" header={"Menu"}>
            {links.map((link) => (
              <SidebarLink key={link.title} href={link.href} icon={link.icon}>
                {link.title}
              </SidebarLink>
            ))}
          </Sidebar>
        </div>
      </div>
      {isOpen && (
        <div className="flex h-full w-full max-w-7xl items-center justify-center gap-2 px-4 ">
          <Input
            type="text"
            placeholder="Buscar produto..."
            className="h-9 max-w-xs text-foreground"
          />
          <Button size={"sm"} variant={"default"} className="h-9">
            Buscar
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
