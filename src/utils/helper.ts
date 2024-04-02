import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortProductsByPrice = (products: ProductType[], sortDirection: string) => {
  return products.slice().sort((a, b) => {
    if (sortDirection === 'asceding') {
      return Number(a.narx) - Number(b.narx);
    } else if (sortDirection === 'desceding') {
      return Number(b.narx) - Number(a.narx);
    }
    return 0;
  });
};