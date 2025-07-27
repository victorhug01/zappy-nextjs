'use client'

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarBack() {
  const router = useRouter()
  
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="w-full h-16 bg-background flex fixed justify-between items-center px-3 overflow-x-hidden" aria-label="Navbar Desktop">
        <ArrowLeft onClick={() => router.back()} className="text-foreground-default" cursor={'pointer'}/>
        <Link href={"/"}>
          <Image src="/zappy.webp" width={64} className="min-w-16" height={64} alt="Brand zappy top left" priority={true} fetchPriority="high" />
        </Link>
      </nav>
    </header>
  );
}
