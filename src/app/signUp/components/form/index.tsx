"use client";

import Input from "@/app/components/layout/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function FormComponent() {
  const [visiblePassword, setPasswordVisible] = useState(false);
  const [visibleConfirmPassword, setConfirmPasswordVisible] = useState(false);
  return (
    <>
      <form className="w-full sm:max-w-lg flex flex-col items-center justify-center gap-4">
        <div className="w-full text-center grid mb-4">
          <h1 className="text-foreground-default text-4xl">SignUp</h1>
          <p className="text-foreground-default text-center pt-7">Crie sua conta de forma segura e<br/>rápida</p>
        </div>
        <div className="w-full grid gap-5 mb-6">
            <label className="floating-label w-full">
                <input type="text" placeholder="Name" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
                <span className="!bg-foreground-inverse text-primary">Name</span>
            </label>
            
            <label className="floating-label w-full">
                <input type="text" placeholder="Email" inputMode="email" autoComplete="email" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
                <span className="!bg-foreground-inverse text-primary">Email</span>
            </label>

            <label className="floating-label w-full">
                <Input type={visiblePassword ? 'text' : 'password'} placeholder="Password" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
                <span className="!bg-foreground-inverse text-primary">Password</span>
                <div onClick={() => setPasswordVisible(!visiblePassword)} className="!absolute right-4 top-1/2 -translate-y-1/2 text-foreground-default z-10">{visiblePassword ? <EyeOff size={23} className="hover:text-primary hover:cursor-pointer"/> : <Eye size={23} className="hover:text-primary hover:cursor-pointer"/>}</div>
            </label>

            <label className="floating-label w-full">
                <Input type={visibleConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
                <span className="!bg-foreground-inverse text-primary">Confirm Password</span>
                <div onClick={() => setConfirmPasswordVisible(!visibleConfirmPassword)} className="!absolute right-4 top-1/2 -translate-y-1/2 text-foreground-default z-10">{visibleConfirmPassword ? <EyeOff size={23} className="hover:text-primary hover:cursor-pointer"/> : <Eye size={23} className="hover:text-primary hover:cursor-pointer"/>}</div>
            </label>
        </div>

        <div className="w-full grid text-center gap-3 place-items-center">
          <button className="bg-foreground-default hover:bg-primary hover:text-foreground-default text-foreground-inverse border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full sm:max-w-64 font-medium h-13 md:h-10" aria-label="Botão de login">Conectar</button>
          <Link href={'/signIn'} className="text-foreground-default underline hover:cursor-pointer hover:text-primary">Já possui uma contsa? clique aqui</Link>
        </div>
      </form>
    </>
  );
}
