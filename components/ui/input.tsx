import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showCount?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, maxLength, value, defaultValue, ...props }, ref) => {
    const count = React.useMemo(() => {
      const currentValue = value !== undefined ? value : defaultValue || "";
      return String(currentValue).length;
    }, [value, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (maxLength && newValue.length > maxLength) {
        return;
      }
      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full bg-[#1d1d1d] border-zinc-700 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-white g-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-gray-950 placeholder:text-gray-400 focus-visible:ring-gray-300",
            maxLength && count >= maxLength && "border-red-500",
            className
          )}
          ref={ref}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          {...props}
        />
        {props.showCount && maxLength && (
          <div
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400",
              count >= maxLength && "text-red-500"
            )}
          >
            {count}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
