import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

const numberFormatter = new Intl.NumberFormat("en-US");
export function formatNumber(value: number) { return numberFormatter.format(value); }

export function relativeTime(value: string) {
  const diff = Math.max(1, Math.floor((Date.now() - new Date(value).getTime()) / 60000));
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / 1440)}d ago`;
}
