import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { Package } from "lucide-react";
import { getServerSession } from "next-auth";
import { OrderItem } from "./components/order-item";

const OrderPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return (
      <div>
        <h1>Opss! Precisa fazer login para acessar esta página</h1>
      </div>
    );
  }
  const orders = await prismaClient.order.findMany({
    where: {
      user_id: session.user.id,
    },
    include: { order_products: true },
  });

  return (
    <div className="container flex flex-col gap-5 px-4 pt-4">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <Package size={16} /> Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-8 ">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
export default OrderPage;
