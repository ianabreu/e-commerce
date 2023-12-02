"use client";

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import ProductQuantity from "@/components/ui/product-quantity";
import { formatPrice } from "@/helpers/formatPrice";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleAddProductToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold">{formatPrice(product.totalPrice)}</h1>
        {product.discount_percentage > 0 && (
          <DiscountBadge>{product.discount_percentage}</DiscountBadge>
        )}
      </div>
      {product.discount_percentage > 0 && (
        <p className="text-sm line-through opacity-75">
          De: {formatPrice(product.base_price)}
        </p>
      )}
      <ProductQuantity
        quantity={quantity}
        decrease={handleDecreaseQuantityClick}
        increase={handleIncreaseQuantityClick}
      />
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição:</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddProductToCart}
      >
        Adicionar ao Carrinho
      </Button>
      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®️</span>
            </p>
            <p className="text-xs text-[#8162ff]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};
export default ProductInfo;
