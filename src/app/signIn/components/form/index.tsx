"use client";

import Input from "@/app/components/layout/input";
import NavbarBack from "@/app/components/layout/navbar";
import React from "react";

export default function FormComponent() {
  return (
    <>
      <NavbarBack/>
      <form className="w-full sm:max-w-lg grid place-items-center gap-4">
        <div className="w-full text-center grid gap-10 mb-6">
          <h1 className="text-foreground-default text-4xl">SignIn</h1>
          <p className="text-foreground-default text-center">Acesse sua conta de forma segura e<br/>rápida</p>
        </div>
        <div className="w-full grid gap-5 mb-6">
          <label className="floating-label w-full">
              <input
                type="text" placeholder="Email" autoFocus className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] text-foreground-default w-full h-14 md:h-12 text-base" />
              <span className="!bg-foreground-inverse text-primary">Email</span>
          </label>
          <label className="floating-label w-full">
              <Input 
                type="password" placeholder="Password" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] text-foreground-default w-full h-14 md:h-12 text-base" />
              <span className="!bg-foreground-inverse text-primary">Password</span>
          </label>
        </div>
        <div className="w-full grid text-center gap-3 place-items-center">
          <button className="bg-foreground-default hover:bg-primary hover:text-foreground-default text-foreground-inverse border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full sm:max-w-64 font-medium h-12" aria-label="Botão de login">Conectar</button>
          <p className="text-primary underline hover:cursor-pointer">Esqueci minha senha</p>
        </div>
      </form>
    </>
  );
}
