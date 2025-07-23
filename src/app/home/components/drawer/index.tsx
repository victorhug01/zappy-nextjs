'use client'

import ThemeSwitcher from "@/app/components/layout/theme-swicther";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DrawerComponent() {
  return (
    <div>
      <div className="drawer drawer-end block md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4">
            <Menu className="text-foreground-default block md:hidden cursor-pointer"/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <aside className="menu flex flex-col justify-between text-base-content min-h-full py-10 px-4 bg-foreground-default w-72">
            <div className="h-max">
              <ThemeSwitcher/>
            </div>
            <div className="grid gap-2 w-full h-fit">
              <Link href={"/signIn"} className="border-2 border-foreground-inverse p-1.5 text-center grid place-items-center rounded-md text-foreground-inverse hover:border-primary hover:text-primary hover:cursor-pointer w-full min-h-12" aria-label="Botão de cadastro">Cadastre-se</Link>
              <Link href={"/signIn"} className="bg-foreground-inverse hover:bg-primary text-center grid place-items-center hover:text-foreground-inverse text-foreground-default border-2 border-foreground-inverse hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full min-h-12" aria-label="Botão de login">login</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
