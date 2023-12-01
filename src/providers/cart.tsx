"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
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
    const productIndex = products.findIndex(
      (cartProduct) => cartProduct.id === product.id,
    );
    if (productIndex > -1) {
      let cartProduct = products[productIndex];
      cartProduct.quantity += product.quantity;
      setProducts((prev) => [...prev]);
      return;
    }
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