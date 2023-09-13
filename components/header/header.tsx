import { useTranslations } from "next-intl";
import Image from "next/image";
import HeaderDropdown from "~/components/header/header-dropdown";
import KairosLogo from "~/public/logo.png";

export default function Header() {
  const headerTranslations = useTranslations("HeaderDropdown");

  return (
    <nav className="py-1 px-2 flex justify-between items-center">
      <div className="relative h-8 aspect-[4.62/1]">
        <Image
          className="object-contain"
          src={KairosLogo}
          alt="Kairos Logo"
          fill
        />
      </div>
      <HeaderDropdown headerTranslations={headerTranslations} />
    </nav>
  );
}
