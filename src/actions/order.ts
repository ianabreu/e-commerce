"use server";
import { CartProduct } from "@/providers/cart";
import { prismaClient } from "@/lib/prisma";

export const createOrder = async (products: string, userId: string) => {
  const itens: CartProduct[] = JSON.parse(products);
  const order = await prismaClient.order.create({
    data: {
      user_id: userId,
      status: "WAITING_FOR_PAYMENT",
      order_products: {
        createMany: {
          data: itens.map((product) => ({
            product_id: product.id,
            base_price: product.base_price,
            discount_percentage: product.discount_percentage,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
  return order;
};
