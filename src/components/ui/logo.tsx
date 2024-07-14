import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import LogoDark from "@/assets/logoDark.svg";
import LogoLight from "@/assets/logoLight.svg";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className, variant = "dark", ...ImageProps }: LogoProps) => {
  return (
    <Image
      src={variant === "light" ? LogoLight : LogoDark}
      alt={"Logo"}
      height={0}
      width={0}
      sizes="1vw"
      className={twMerge("w-24 sm:w-28 md:w-44", className)}
      style={{
        objectFit: "contain",
      }}
      {...ImageProps}
    />
  );
};

export default Logo;
