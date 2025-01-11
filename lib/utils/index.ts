import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RemoveNull<T> = {
  [K in keyof T]: T[K] extends null ? never : T[K];
};

export function formatDate(date: Date, expression: string) {
  return format(date, expression);
}

export type FixedLengthArray<
  T,
  N extends number,
  R extends T[] = []
> = R["length"] extends N ? R : FixedLengthArray<T, N, [...R, T]>;
