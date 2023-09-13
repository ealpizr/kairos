"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/dropdown-menu";

import Image from "next/image";
import EnglishFlag from "~/public/flag-spain.png";
import SpanishFlag from "~/public/flag-uk.png";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

export default function HeaderDropdown({
  headerTranslations,
}: {
  headerTranslations: any;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 aspect-square rounded-full outline-none border border-gray-200 grid place-items-center data-[state=open]:bg-gray-200">
        <IoSettings className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {headerTranslations("menuLanguageLabel")}
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup value="en">
          <DropdownMenuRadioItem value="es">
            <Image
              className="h-4 w-4 mr-2"
              src={EnglishFlag}
              alt="English flag icon"
            />
            <span>{headerTranslations("menuLanguageSpanish")}</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">
            <Image
              className="h-4 w-4 mr-2"
              src={SpanishFlag}
              alt="Spanish flag icon"
            />
            <span>{headerTranslations("menuLanguageEnglish")}</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          {headerTranslations("menuThemeLabel")}
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="light">
            <BsSunFill className="w-4 h-4 mr-2 text[var(--foreground)]" />
            <span>{headerTranslations("menuThemeLight")}</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <BsMoonStarsFill className="w-4 h-4 mr-2 text[var(--foreground)]" />
            <span>{headerTranslations("menuThemeDark")}</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
