import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="px-4 py-2 flex items-center justify-between">
      <p className="text-[var(--foreground-secondary)]">Kairos</p>
      <a
        href="https://github.com/ealpizr/kairos"
        className="cursor-pointer text-[var(--foreground)] hover:text-[var(--primary)] transition-all"
      >
        <BsGithub className="w-6 h-6" />
      </a>
    </footer>
  );
}
