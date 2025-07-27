'use client'

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()
  
  return (
    <main className="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-primary text-5xl">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foreground-default sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-foreground-default sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={() => router.back()} className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-foreground-default shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:text-foreground-inverse hover:cursor-pointer">Go back one page</button>
          <button className="text-sm font-semibold text-foreground-default hover:text-primary hover:cursor-pointer">Contact support <span aria-hidden="true">&rarr;</span></button>
        </div>
      </div>
    </main>
  );
}
