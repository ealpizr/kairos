import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SpainFlag from "~/public/flag-spain.png";
import UKFlag from "~/public/flag-uk.png";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-xl">{t("title")}</h1>
      <div className="flex items-center justify-center gap-3">
        <Link href="/en">
          <Image alt="Spain flag" src={UKFlag} />
        </Link>
        <Link href="/es">
          <Image alt="Spain flag" src={SpainFlag} />
        </Link>
      </div>
    </main>
  );
}
