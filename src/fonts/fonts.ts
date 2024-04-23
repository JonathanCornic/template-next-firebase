import { Inter } from "next/font/google";

/** 
 * @description This module imports font from Google Fonts, 
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */

const inter_init = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const fontPrimary = inter_init.variable;
