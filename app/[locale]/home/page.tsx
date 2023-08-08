import Image from "next/image";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import KairosLogo from "~/public/logo.png";

export default function HomePage() {
  return (
    <>
      <div className="p-4">
        <Image
          className="object-contain max-h-10"
          src={KairosLogo}
          alt="Kairos logo"
        />
      </div>

      <div className="text-center px-4 text-[var(--foreground-secondary)]">
        <p className="border-b py-4">August 7th, 2023</p>
      </div>

      <div className="flex items-center justify-between p-4">
        <a className="text-[var(--foreground-secondary)]">
          <AiOutlineLeftCircle />
        </a>
        <p className="font-bold text-[var(--foreground)]">WORD HERE</p>
        <a className="text-[var(--foreground-secondary)]">
          <AiOutlineRightCircle />
        </a>
      </div>

      <div className="p-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas iusto
          voluptatum consequuntur repellat, ipsum omnis blanditiis at assumenda
          nihil! Itaque iusto eveniet recusandae autem dolorem, eligendi facere
          modi minima! Expedita.
        </p>
      </div>
    </>
  );
}
