"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function FormSignIn() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <form className="w-full sm:max-w-lg flex flex-col items-center justify-center gap-4 p-4 rounded-[10px] shadow-xl/30">

        <div className="w-full text-center grid gap-10 mb-6">
          <h1 className="text-foreground-default text-4xl">SignIn</h1>
          <p className="text-foreground-default text-center">Access your account safely and<br/>quickly</p>
        </div>

        <div className="w-full grid gap-5 mb-6">
          <div className="relative">
                <input type="email" id="emailInput" inputMode="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-foreground-default bg-transparent rounded-lg border-1 border-primary appearance-none dark:border-foreground-default dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-foreground-inverse px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
            </div>

          <div>
            <div className="relative">
                <input type={visible ? 'text' : 'password'} id="passwordInput" inputMode="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-foreground-default bg-transparent rounded-lg border-1 border-primary appearance-none dark:border-foreground-default dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-foreground-inverse px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                <div onClick={() => setVisible(!visible)} className="!absolute right-4 top-1/2 -translate-y-1/2 text-foreground-default z-10">{visible ? <EyeOff size={23} className="hover:text-primary hover:cursor-pointer"/> : <Eye size={23} className="hover:text-primary hover:cursor-pointer"/>}</div>
            </div>
            <p className="text-foreground-default text-right underline hover:text-primary hover:cursor-pointer pt-2">Forgot my password</p>
          </div>

        </div>
        <div className="w-full grid text-center gap-3 place-items-center">
          <button className="bg-foreground-default hover:bg-primary hover:text-foreground-default text-foreground-inverse border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full sm:max-w-64 font-medium h-11 md:h-10" aria-label="Botão de login">Sign in</button>
          <Link href={'/signUp'} className="text-foreground-default underline hover:text-primary hover:cursor-pointer">Dont&apos; have an account? Click here</Link>
        </div>

      </form>
    </>
  );
}
