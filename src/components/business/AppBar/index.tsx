import Link from "next/link";

export default function AppBar() {
  return (
    <header className="h-[48px] flex flex-row items-center justify-center px-8">
      <nav className="grow max-w-4xl">
        <Link href="/">Logo</Link>
      </nav>
    </header>
  );
}
