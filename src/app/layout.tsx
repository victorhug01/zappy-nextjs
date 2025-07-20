import "./globals.css";
import ThemeProvider from "./providers/theme-provider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background" suppressHydrationWarning>
        <ThemeProvider attribute={'class'} defaultTheme="system" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
