import { useContext } from "react";
import Image from "next/image";
import { TrashIcon } from "lucide-react";
import { Button } from "./button";
import { CartContext, CartProduct } from "@/providers/cart";
import ProductQuantity from "./product-quantity";
import { formatPrice } from "@/helpers/formatPrice";

interface CartItemProps {
  product: CartProduct;
}
const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.image_urls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] "
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {formatPrice(product.totalPrice)}
            </p>
            {product.discount_percentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {formatPrice(product.base_price)}
              </p>
            )}
          </div>
          <ProductQuantity
            quantity={product.quantity}
            decrease={() => decreaseProductQuantity(product.id)}
            increase={() => increaseProductQuantity(product.id)}
            size="small"
          />
        </div>
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={() => removeProductFromCart(product.id)}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
