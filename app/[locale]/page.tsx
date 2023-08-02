import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Spain from "~/public/flag-spain.png";
import UKFlag from "~/public/flag-uk.png";
import KairosLogo from "~/public/logo.png";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      <div className="absolute top-4 mx-auto flex gap-3">
        <Link className="relative w-[40px] h-[40px]" href="/en">
          <Image alt="United Kingdom flag" src={UKFlag} fill />
        </Link>
        <Link className="relative w-[40px] h-[40px]" href="/es">
          <Image alt="Spain flag" src={Spain} fill />
        </Link>
      </div>

      <div className="max-w-sm">
        <Image alt="Kairos logo" src={KairosLogo} />
      </div>
      <div className="flex flex-col text-center gap-1">
        <h1 className="font-bold text-xl">{t("title")}</h1>
        <p>{t("comingSoon")}</p>
        <p>{t("stayTuned")}</p>
        <p>
          {t("followOurProgress")}{" "}
          <Link
            className="text-blue-400 underline font-bold"
            href="https://github.com/ealpizr/kairos"
          >
            Github
          </Link>
        </p>
      </div>
    </main>
  );
}
