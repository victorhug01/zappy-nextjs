"use client";

import React from "react";

export default function FormComponent() {
  return (
    <form className="w-full sm:max-w-lg grid place-items-center gap-4">
      <label className="floating-label w-full">
        <input type="text" placeholder="Email" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] text-foreground-default w-full h-14 sm:h-11 text-base" />
        <span className="!bg-foreground-inverse text-primary">Email</span>
      </label>
      <label className="floating-label w-full">
        <input type="text" placeholder="Password" className="input input-lg bg-foreground-inverse border-foreground-default border-[1.5px] sm:border-2 rounded-[10px] text-foreground-default w-full h-14 sm:h-11 text-base" />
        <span className="!bg-foreground-inverse text-primary">Password</span>
      </label>
      <button className="bg-foreground-default hover:bg-primary hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-full sm:max-w-64 font-medium" aria-label="Botão de login">Conectar</button>
    </form>
  );
}
