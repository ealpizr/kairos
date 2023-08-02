import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "~/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kairos",
  description: "AI Powered Word of the Day",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string | undefined };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
