"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Marca como montado no cliente
  useEffect(() => {setMounted(true)}, []);

  // Evita renderização durante o SSR
  if (!mounted) return null;

  return <>
      <label className="inline-flex items-center cursor-pointer justify-between w-full">
        <span className="ms-3 text-sm font-medium text-foreground-inverse">Tema escuro</span>
        <input type="checkbox" className="sr-only peer" checked={theme !== "light"} onChange={() => setTheme(theme == 'dark' ? 'light' : 'dark')}/>
        <div className="relative w-11 h-6 bg-foreground-default rounded-full peer dark:bg-foreground-inverse peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-foreground-default after:border-foreground-default after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-foreground-inverse peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
      </label>
  </>;
}
