import Image from "next/image";
import Link from "next/link";

export default function HeaderAvatar() {
  return (
    <Link className="header-avatar-link" href="/">
      <Image
        className="h-full w-full rounded-full object-cover bg-zinc-800 m-0"
        alt="Metalit0"
        src="/avatar.png"
        width={76}
        height={76}
      />
    </Link>
  );
}
