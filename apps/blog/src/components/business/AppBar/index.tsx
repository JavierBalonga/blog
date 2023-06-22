import Link from "next/link";
import Logo from "../../abstract/Logo";

export default function AppBar() {
  return (
    <header className="flex flex-row items-center py-4">
      <nav className="grow">
        <Link href="/">
          <Logo className="text-5xl text-red-700" />
        </Link>
      </nav>
    </header>
  );
}
