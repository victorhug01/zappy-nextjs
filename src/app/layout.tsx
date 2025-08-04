import "./globals.css";
import ThemeProvider from "./providers/theme-provider";
import { Lato } from 'next/font/google';

const mainFontFamily = Lato({
  weight: '400',
  display: "fallback",
  subsets: ['latin'],
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`scroll-smooth ${mainFontFamily.className}`} suppressHydrationWarning>
      <body className="antialiased bg-background" suppressHydrationWarning>
        <ThemeProvider attribute={'class'} defaultTheme="system" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
