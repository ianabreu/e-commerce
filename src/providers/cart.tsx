"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}
interface ICartContext {
  products: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
  cartTotalPrice: number;
  cartSubtotalPrice: number;
  cartTotalDiscount: number;
  getCartQuantityItens: () => number;
}
export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartSubtotalPrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  getCartQuantityItens: () => 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const getLocalCartProducts = useCallback((): CartProduct[] => {
    const products = localStorage.getItem("@ecommerce/cart-products");
    if (products) return JSON.parse(products) as CartProduct[];
    return [] as CartProduct[];
  }, []);

  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    getLocalCartProducts();
  }, [getLocalCartProducts]);

  const setLocalCartProducts = (products: CartProduct[]) => {
    localStorage.setItem("@ecommerce/cart-products", JSON.stringify(products));
  };

  useEffect(() => {
    setLocalCartProducts(products);
  }, [products]);

  const cartSubtotalPrice = useMemo(() => {
    return products.reduce((acc, products) => {
      return acc + products.base_price * products.quantity;
    }, 0);
  }, [products]);

  const cartTotalPrice = useMemo(() => {
    return products.reduce((acc, products) => {
      return acc + products.totalPrice * products.quantity;
    }, 0);
  }, [products]);

  const cartTotalDiscount = cartSubtotalPrice - cartTotalPrice;

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
  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };
  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };
  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      }),
    );
  };
  const getCartQuantityItens = useCallback(() => {
    let initialValue = 0;
    const total = products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      initialValue,
    );
    return total;
  }, [products]);
  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        getCartQuantityItens,
        cartTotalPrice,
        cartSubtotalPrice,
        cartTotalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
