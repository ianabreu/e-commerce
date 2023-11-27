import { useContext } from "react";
import { CartContext } from "@/providers/cart";
const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.slug}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
