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

export default function HeaderDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 aspect-square rounded-full outline-none border border-gray-200 grid place-items-center data-[state=open]:bg-gray-200">
        <IoSettings className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="en">
          <DropdownMenuRadioItem value="es">
            <Image
              className="h-4 w-4 mr-2"
              src={EnglishFlag}
              alt="English flag icon"
            />
            <span>Spanish</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">
            <Image
              className="h-4 w-4 mr-2"
              src={SpanishFlag}
              alt="Spanish flag icon"
            />
            <span>English</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="light">
            <BsSunFill className="w-4 h-4 mr-2 text[var(--foreground)]" />
            <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <BsMoonStarsFill className="w-4 h-4 mr-2 text[var(--foreground)]" />
            <span>Dark</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
