"use client";

import Input from "@/app/components/layout/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function FormComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <form className="w-full sm:max-w-lg flex flex-col items-center justify-center gap-4">

        <div className="w-full text-center grid gap-10 mb-6">
          <h1 className="text-foreground-default text-4xl">SignIn</h1>
          <p className="text-foreground-default text-center">Access your account safely and<br/>quickly</p>
        </div>

        <div className="w-full grid gap-5 mb-6">
          <label className="floating-label w-full">
              <Input type="text" placeholder="Email" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
              <span className="!bg-foreground-inverse text-primary">Email</span>
          </label>

          <div>
            <label className="floating-label w-full">
              <Input type={visible ? 'text' : 'password'} placeholder="Password" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] md:rounded-[7px] text-foreground-default w-full h-14 md:h-12 text-base" />
              <span className="!bg-foreground-inverse text-primary">Password</span>
              <div onClick={() => setVisible(!visible)} className="!absolute right-4 top-1/2 -translate-y-1/2 text-foreground-default z-10">{visible ? <EyeOff size={23} className="hover:text-primary hover:cursor-pointer"/> : <Eye size={23} className="hover:text-primary hover:cursor-pointer"/>}</div>
            </label>
            <p className="text-foreground-default text-right underline hover:text-primary hover:cursor-pointer pt-2">Forgot my password</p>
          </div>

        </div>
        <div className="w-full grid text-center gap-3 place-items-center">
          <button className="bg-foreground-default hover:bg-primary hover:text-foreground-default text-foreground-inverse border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full sm:max-w-64 font-medium h-12 md:h-10" aria-label="Botão de login">Sign in</button>
          <p className="text-foreground-default underline hover:text-primary hover:cursor-pointer">Dont&apos; have an account? Click here</p>
        </div>

      </form>
    </>
  );
}
