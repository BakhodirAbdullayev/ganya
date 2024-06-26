import type { Metadata } from "next";
import { i18n } from "@/lib/i18n-config";
import { comfortaa, roboto } from "@/lib/fonts";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Ganya",
  description: "Online courses",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={`${roboto.variable} ${comfortaa.variable} bg-[#f9f9f9]`}>
        {children}
      </body>
    </html>
  );
}
