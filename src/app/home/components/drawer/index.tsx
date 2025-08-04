'use client'

import ThemeSwitcher from "@/app/components/layout/theme-swicther";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-foreground-default md:hidden p-2" aria-label="Abrir menu">
          <Menu className="text-foreground-default block md:hidden cursor-pointer" />
      </button>

      {isOpen && (<div className="fixed inset-0 opacity-40 bg-black" onClick={() => setIsOpen(false)}></div>)}

      <aside className={`fixed top-0 right-0 z-50 h-full w-72 p-5 bg-foreground-inverse flex flex-col justify-between shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-max">
          <ThemeSwitcher/>
        </div>
        <div className="grid gap-2 w-full h-fit">
          <Link href={"/signUp"} className="border-2 border-foreground-default p-1.5 text-center grid place-items-center rounded-md text-foreground-default hover:border-primary hover:text-primary hover:cursor-pointer w-full min-h-12" aria-label="Botão de cadastro">Cadastre-se</Link>
          <Link href={"/signIn"} className="bg-foreground-default hover:bg-primary text-center grid place-items-center hover:text-foreground-inverse text-foreground-inverse border-2 border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full min-h-12" aria-label="Botão de login">login</Link>
        </div>
      </aside>
    </>
  );
}
