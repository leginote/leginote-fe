import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-zinc-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-white dark:focus-visible:ring-zinc-950",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-900/90",
        destructive:
          "bg-red-900 text-zinc-50 hover:bg-red-900/90 dark:bg-red-500 dark:text-zinc-50 dark:hover:bg-red-500/90",
        outline:
          "border border-zinc-800 bg-zinc-950 hover:bg-zinc-800 hover:text-zinc-50 dark:border-zinc-200 dark:bg-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900",
        secondary:
          "bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/80",
        ghost:
          "hover:bg-zinc-800 hover:text-zinc-50 dark:hover:bg-zinc-100 dark:hover:text-zinc-900",
        link: "text-zinc-50 underline-offset-4 hover:underline dark:text-zinc-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
