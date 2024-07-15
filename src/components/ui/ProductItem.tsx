import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { formatPrice } from "@/helpers/formatPrice";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({
  product: {
    name,
    image_urls,
    totalPrice,
    discount_percentage,
    base_price,
    slug,
  },
}: ProductItemProps) => {
  return (
    <Link className="m-auto" href={`/product/${slug}`}>
      <div className="flex w-44 flex-1 flex-grow-0 flex-col items-center gap-4 md:w-60">
        <div className="relative flex h-44 w-fit items-center justify-center rounded-lg md:h-60">
          <Image
            src={image_urls[0]}
            alt={name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-full w-full"
            style={{
              objectFit: "contain",
            }}
          />
          {discount_percentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {discount_percentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex w-full flex-col gap-1 ">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {name}
          </p>
          <div className="flex items-center gap-2">
            {discount_percentage > 0 ? (
              <>
                <p className=" font-semibold">{formatPrice(totalPrice)}</p>
                <p className="text-xs line-through opacity-75">
                  {formatPrice(base_price)}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold">{formatPrice(base_price)}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
