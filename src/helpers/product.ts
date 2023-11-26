import { Product } from "@prisma/client";

export type ProductWithoutBasePrice = {
  [K in Exclude<keyof Product, "base_price">]: Product[K];
};

export interface ProductWithTotalPrice extends ProductWithoutBasePrice {
  base_price: number;
  totalPrice: number;
}
export const computeProductTotalPrice = ({
  category_id,
  description,
  discount_percentage,
  base_price,
  id,
  image_urls,
  name,
  slug,
}: Product): ProductWithTotalPrice => {
  if (discount_percentage === 0) {
    return {
      category_id,
      description,
      discount_percentage,
      id,
      image_urls,
      name,
      slug,
      base_price: Number(base_price),
      totalPrice: Number(base_price),
    };
  }
  const totalPrice = Number(base_price) * ((100 - discount_percentage) / 100);

  return {
    category_id,
    description,
    discount_percentage,
    id,
    image_urls,
    name,
    slug,
    base_price: Number(base_price),
    totalPrice,
  };
};
