import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
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
  );
};

export default Cart;
