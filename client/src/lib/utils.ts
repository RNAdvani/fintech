import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const createDownloadUrl = (blob: Blob, fileName: string) => {
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement("a");

   a.href = url;
   a.download = fileName;
   a.target = "_blank";

   document.body.appendChild(a);
   a.click();
   window.URL.revokeObjectURL(url);
};
