import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="mt-8 flex flex-col gap-5">
      {products.map((product) => (
        <CartItem product={product} key={product.slug} />
      ))}
    </div>
  );
};

export default Cart;
