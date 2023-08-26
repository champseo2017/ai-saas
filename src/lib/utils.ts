import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // รวม inputs เป็นสตริงด้วย clsx
  const classNames = clsx(inputs);
  // รวม class names ด้วย tailwind-merge (ถ้ามีการใช้ Tailwind CSS)
  return twMerge(classNames);
}
