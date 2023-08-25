import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "~/app/globals.css";
import Footer from "~/components/footer";
import Header from "~/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kairos",
  description: "AI Powered Word of the Day",
};

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
      <body className={inter.className}>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main className="">main</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
