"use client";
import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "./separator";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import Sidebar from "./sidebar";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sidebar header="Menu">
        {status === "authenticated" && data?.user && (
          <div className="flex flex-col">
            <div className="flex items-center gap-2 py-4">
              <Avatar>
                <AvatarFallback>
                  {data?.user?.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium">{data.user.name}</p>
                <p className="text-sm opacity-75">Boas Compras!</p>
              </div>
            </div>
            <Separator />
          </div>
        )}
        <div className="mt-4 flex flex-col gap-3">
          {status === "unauthenticated" && (
            <SidebarLink onClick={handleLoginClick} icon="login">
              Fazer Login
            </SidebarLink>
          )}
          {status === "authenticated" && (
            <SidebarLink onClick={handleLogoutClick} icon="logout">
              Fazer Logout
            </SidebarLink>
          )}

          <SidebarLink href="/" icon="home">
            Início
          </SidebarLink>
          <SidebarLink href="/deals" icon="deals">
            Ofertas
          </SidebarLink>
          <SidebarLink href="/catalog" icon="catalog">
            Catálogo
          </SidebarLink>
        </div>
      </Sidebar>

      <Link href={"/"}>
        <h1 className="text-lg font-semibold">
          <span
            className="
          bg-gradient-to-r 
          from-[#5033C3] 
          to-[#8162FF] 
          bg-clip-text 
          font-extrabold
          text-transparent"
          >
            Tech
          </span>{" "}
          Store
        </h1>
      </Link>

      <Sidebar header="Carrinho" icon="cart" side="right">
        <Cart />
      </Sidebar>
    </Card>
  );
};

export default Header;
