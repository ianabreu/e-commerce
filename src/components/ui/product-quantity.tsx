import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "./button";
interface ProductQuantityProps {
  quantity: number;
  decrease: () => void;
  increase: () => void;
  size?: "small" | "normal";
}
const ProductQuantity = ({
  quantity,
  decrease,
  increase,
  size = "normal",
}: ProductQuantityProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant={"outline"}
        onClick={decrease}
        className={size === "small" ? "h-8 w-8" : ""}
      >
        <ArrowLeftIcon size={16} />
      </Button>
      <span className={size === "small" ? "text-xs" : ""}>{quantity}</span>
      <Button
        size="icon"
        variant={"outline"}
        onClick={increase}
        className={size === "small" ? "h-8 w-8" : ""}
      >
        <ArrowRightIcon size={16} />
      </Button>
    </div>
  );
};

export default ProductQuantity;
