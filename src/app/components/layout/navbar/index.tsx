'use client'

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarBack() {
  const router = useRouter()
  return (
    <header className="absolute top-0 w-full">
      <nav className="w-full h-16 flex fixed justify-between items-center px-3 overflow-x-hidden" aria-label="Navbar Desktop">
        <ArrowLeft onClick={() => router.back()} className="text-foreground-default" cursor={'pointer'}/>
        <Link href={"/"}>
          <Image src="/zappy.png" width={64} className="min-w-16" height={64} alt="Brand zappy top left" priority={true} fetchPriority="high" />
        </Link>
      </nav>
    </header>
  );
}
