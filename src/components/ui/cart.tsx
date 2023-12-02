import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { formatPrice } from "@/helpers/formatPrice";

const Cart = () => {
  const { products, cartSubtotalPrice, cartTotalDiscount, cartTotalPrice } =
    useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <div className="mt-8 flex flex-col gap-5">
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
      <div className="flex flex-col gap-3">
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>{formatPrice(cartSubtotalPrice)}</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>- {formatPrice(cartTotalDiscount)}</p>
        </div>
        <Separator />
        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>{formatPrice(cartTotalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
