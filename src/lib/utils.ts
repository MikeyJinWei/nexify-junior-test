import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseErrorMessage(errorMsg?: string) {
  try {
    const { Success, Msg } = JSON.parse(errorMsg || "{}");
    return {
      Success: !!Success,
      Msg: Msg || "An error occurred",
    };
  } catch {
    return {
      Success: false,
      Msg: "Failed to parse error message",
    };
  }
}
