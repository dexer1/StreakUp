import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-45", { variants: { variant: { default: "bg-primary text-white hover:bg-primary-strong", secondary: "border border-border bg-surface text-foreground hover:bg-surface-2", ghost: "text-muted hover:bg-surface-2 hover:text-foreground", danger: "bg-danger text-white hover:opacity-90", soft: "bg-primary-soft text-primary-strong hover:brightness-95" }, size: { default: "h-10 px-4", sm: "h-8 px-3 text-xs", lg: "h-12 px-5 text-[15px]", icon: "h-10 w-10 p-0" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild, ...props }: ButtonProps) { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />; }
