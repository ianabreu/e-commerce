import { stripe } from "@/lib/stripe";
import { updateOrderByIdService } from "@/services/order/updateOrderService";

export const POST = async (request: Request) => {
  try {
    const signature = request.headers.get("stripe-signature");
    if (!signature) {
      return Response.json(
        { message: "Sem assinatura stripe" },
        { status: 400 },
      );
    }
    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY,
    );

    switch (event.type) {
      case "checkout.session.completed":
        const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          },
        );
        const orderId = sessionWithLineItems.metadata?.orderId as string;
        const order = await updateOrderByIdService(
          orderId,
          "PAYMENT_CONFIRMED",
        );
        break;
      default:
        console.log("Evento Desconhecido: ", event.type);
    }

    return Response.json({}, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 400 });
  }
};
