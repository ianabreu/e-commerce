import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}
export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discount_percentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.base_price),
    };
  }
  const totalPrice =
    Number(product.base_price) * ((100 - product.discount_percentage) / 100);

  return {
    ...product,
    totalPrice,
  };
};
