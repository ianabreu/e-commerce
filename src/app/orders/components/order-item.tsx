import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { OrderInfo } from "./order-info";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      order_products: true;
    };
  }>;
}
export const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <Card className="px-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={order.id}>
          <AccordionTrigger className="text-sm font-bold uppercase no-underline">
            Pedido com {order.order_products.length} produto
            {order.order_products.length > 1 ? "s" : ""}
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="flex  justify-between">
              <OrderInfo
                title="Status"
                contentColor={
                  order.status === "PAYMENT_CONFIRMED" ? "green" : "red"
                }
              >
                {order.status === "PAYMENT_CONFIRMED" ? "Pago" : "A pagar"}
              </OrderInfo>
              <OrderInfo title="Data">
                {new Date(order.created_at).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </OrderInfo>
              <OrderInfo title="Pagamento">Cartão</OrderInfo>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
