import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LogoDark from "@/assets/logoDark.svg";
import LogoLight from "@/assets/logoLight.svg";
import storeInfo from "../../../public/data/store.json";

interface LogoProps {
  className?: string;
  isDark?: boolean;
  alt?: string;
}

const Logo = ({
  className,
  alt = storeInfo.name,
  isDark = false,
  ...ImageProps
}: LogoProps) => {
  return (
    <Image
      src={isDark ? LogoDark : LogoLight}
      alt={alt}
      height={0}
      width={0}
      sizes="100vw"
      className={twMerge("h-8 w-fit object-contain", className)}
      {...ImageProps}
    />
  );
};

export default Logo;
