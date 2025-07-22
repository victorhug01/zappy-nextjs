"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Marca como montado no cliente
  useEffect(() => {setMounted(true)}, []);

  // Evita renderização durante o SSR
  if (!mounted) return null;

  return <>{theme !== "light" ? <SunMedium onClick={() => setTheme("light")} className="hover:cursor-pointer text-foreground-default" aria-label="Alternar para tema claro" /> : <Moon onClick={() => setTheme("dark")} className="hover:cursor-pointer text-foreground-default" aria-label="Alternar para tema escuro" />}</>;
}
