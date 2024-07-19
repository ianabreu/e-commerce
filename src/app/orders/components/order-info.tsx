import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface OrderInfoProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  contentColor?: keyof typeof variant.color;
}

const variant = {
  color: {
    default: "opacity-75",
    red: "font-bold text-red-700",
    green: "font-bold text-green-700",
  },
};
export const OrderInfo = ({
  title,
  children,
  className,
  contentColor = "default",
}: OrderInfoProps) => {
  return (
    <div className={twMerge("flex flex-col text-xs", className)}>
      <span className="font-bold uppercase">{title}</span>
      <span className={`capitalize ${variant.color[contentColor]}`}>
        {children}
      </span>
    </div>
  );
};
