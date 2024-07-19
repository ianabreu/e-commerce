"use client";
import { ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "./separator";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import Sidebar from "./sidebar";
import Cart from "./cart";
import { Badge } from "./badge";
import Logo from "./logo";

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex flex-1 items-center justify-between rounded-none border-0 bg-foreground ">
      <div className="container flex w-full items-center justify-between p-[1.875rem]">
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
            <SidebarLink href="/orders" icon="order">
              Meus Pedidos
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
          <Logo variant="light" />
          {/* <Image src={Logo} alt="Logo" width={180} /> */}

          {/* <h1 className="text-lg font-semibold">
         <span
            className="
          bg-gradient-to-r 
          from-[#5033C3] 
          to-[#8162FF] 
          bg-clip-text 
          font-extrabold
          text-transparent"
          >
            Z
          </span>
          Shop
        </h1> */}
        </Link>

        <Sidebar
          header={
            <Badge
              className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
              variant={"outline"}
            >
              <ShoppingCartIcon /> Carrinho
            </Badge>
          }
          icon="cart"
          side="right"
        >
          <Cart />
        </Sidebar>
      </div>
    </Card>
  );
};

export default Header;
