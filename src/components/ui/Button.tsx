import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse" | "inverseOutline";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong disabled:hover:bg-brand",
  secondary: "border border-line bg-surface text-ink hover:border-brand hover:text-brand",
  inverse: "bg-white text-brand hover:bg-brand-soft",
  inverseOutline: "border border-white/60 text-white hover:border-white hover:bg-white/10",
};

function classes(variant: Variant, className?: string) {
  return `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;
}

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={classes(variant, className)}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={classes(variant, className)} {...rest} />;
}
