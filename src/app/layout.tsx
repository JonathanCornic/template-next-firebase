import type { Metadata } from "next";
import { fontPrimary } from "@/fonts/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Title App",
  description: "Description App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${fontPrimary} font-primary min-h-screen`}>{children}</body>
    </html>
  );
}
