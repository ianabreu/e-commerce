import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { formatPrice } from "@/helpers/formatPrice";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import CartInfoValue from "./cart-info-value";

const Cart = () => {
  const { products, cartSubtotalPrice, cartTotalDiscount, cartTotalPrice } =
    useContext(CartContext);
  return (
    <div className="flex h-full max-h-full flex-col gap-4 overflow-hidden">
      <ScrollArea className="h-full">
        <div className="flex h-full flex-col gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem product={product} key={product.slug} />
            ))
          ) : (
            <p className="mb-0 text-center text-xl font-bold">
              Carrinho vazio. <br />
              <span className="text-center text-sm font-semibold">
                Vamos fazer compras?
              </span>
            </p>
          )}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-2">
        <CartInfoValue>
          <p>Subtotal</p>
          <p>{formatPrice(cartSubtotalPrice)}</p>
        </CartInfoValue>

        <CartInfoValue>
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </CartInfoValue>

        <CartInfoValue>
          <p>Descontos</p>
          <p>- {formatPrice(cartTotalDiscount)}</p>
        </CartInfoValue>
        <CartInfoValue>
          <p>Total</p>
          <p>{formatPrice(cartTotalPrice)}</p>
        </CartInfoValue>

        <Button className="mt-7 font-bold uppercase">Finalizar Compra</Button>
      </div>
    </div>
  );
};

export default Cart;
