"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}
interface ICartContext {
  products: CartProduct[];
  addProductToCart: (product: CartProduct) => void;

  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}
export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
