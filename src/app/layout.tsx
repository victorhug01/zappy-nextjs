import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
