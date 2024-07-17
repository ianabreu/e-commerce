"use server";
import { CartProduct } from "@/providers/cart";
import { prismaClient } from "@/lib/prisma";

export const createOrder = async (products: CartProduct[], userId: string) => {
  const order = await prismaClient.order.create({
    data: {
      user_id: userId,
      status: "WAITING_FOR_PAYMENT",
      order_products: {
        createMany: {
          data: products.map((product) => ({
            product_id: product.id,
            base_price: product.base_price,
            discount_percentage: product.base_price,
            quantity: product.quantity,
          })),
        },
      },
    },
  });
  return order;
};
