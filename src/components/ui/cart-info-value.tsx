import { Separator } from "./separator";
import { ReactNode } from "react";
interface CartInfoValueProps {
  children: ReactNode;
  notDivide?: boolean;
}

const CartInfoValue = ({ children, notDivide = false }: CartInfoValueProps) => {
  return (
    <>
      {notDivide ? "" : <Separator />}
      <div className="flex items-center justify-between text-xs">
        {children}
      </div>
    </>
  );
};

export default CartInfoValue;
