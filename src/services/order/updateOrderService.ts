import { prismaClient } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

const updateOrderByIdService = async (
  orderId: string,
  status: $Enums.OrderStatus,
) => {
  const order = await prismaClient.order.update({
    where: {
      id: orderId,
    },
    data: {
      status: status,
    },
  });
  return order;
};

export { updateOrderByIdService };
