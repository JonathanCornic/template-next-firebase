import { siteConfig } from "@/config/site";
import { fontPrimary } from "@/fonts/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fontPrimary} font-primary min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
