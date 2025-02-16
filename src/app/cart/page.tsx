"use client";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "../../components/ui/cart-item";
import { formatPrice } from "@/helpers/formatPrice";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
import CartInfoValue from "../../components/ui/cart-info-value";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Stripe from "stripe";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
const CartPage = () => {
  const { data } = useSession();
  const { products, cartSubtotalPrice, cartTotalDiscount, cartTotalPrice } =
    useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      await signIn();
      return;
    }
    const order = await createOrder(JSON.stringify(products), data?.user.id);

    const checkout = await createCheckout(JSON.stringify(products), order.id);
    const { id: checkoutId } = JSON.parse(
      checkout,
    ) as Stripe.Response<Stripe.Checkout.Session>;
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    stripe?.redirectToCheckout({ sessionId: checkoutId });
  };
  return (
    <div className="flex h-full max-h-full  flex-col gap-4 overflow-hidden sm:container">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingBag size={16} /> Carrinho
      </Badge>
      {/* <ScrollArea className="h-full"> */}
      <div className="flex h-full flex-col gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem product={product} key={product.slug} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <ShoppingBag size={100} />
            <p className="mb-0 text-center text-xl font-bold">
              Seu carrinho está vazio. <br />
            </p>
            <span className="text-center text-sm font-semibold">
              Vamos fazer compras?
            </span>
            <Button size={"sm"} asChild>
              <Link href={"/"}>Ir para a página inicial</Link>
            </Button>
          </div>
        )}
      </div>
      {/* </ScrollArea> */}
      {products.length > 0 && (
        <div className="mx-2 flex flex-col gap-2">
          <CartInfoValue>
            <p>Subtotal</p>
            <p>{formatPrice(cartSubtotalPrice)}</p>
          </CartInfoValue>

          <CartInfoValue>
            <p>Entrega</p>
            <p className="text-green-700">GRÁTIS</p>
          </CartInfoValue>

          <CartInfoValue>
            <p>Descontos</p>
            <p className="text-green-700">- {formatPrice(cartTotalDiscount)}</p>
          </CartInfoValue>
          <CartInfoValue>
            <p className="font-semibold">Total</p>
            <p className="font-semibold">{formatPrice(cartTotalPrice)}</p>
          </CartInfoValue>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  );
};

//   return (
//     <div className="container flex min-h-[calc(100vh-25vh)] flex-col gap-8 pt-4">
//       <Cart />
//     </div>
//   );
// };

export default CartPage;
