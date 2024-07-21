"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
  className?: string;
}
const NavLink = ({ children, className, href }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={twMerge(
        `flex items-center justify-center gap-2 text-sm font-medium transition-colors hover:underline ${
          href === path && "text-[#00d65d]"
        }`,
        className,
      )}
    >
      {children}
    </Link>
  );
};
export { NavLink };
