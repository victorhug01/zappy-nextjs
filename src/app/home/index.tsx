'use client'

import Image from "next/image";
import Link from "next/link";
import DrawerComponent from "./components/drawer";

export default function HomeClient() {
    return (
        <div>
            <header>
                <nav className="w-full h-16 flex dark:bg-background fixed justify-between items-center px-3 overflow-x-hidden" aria-label="Navbar Desktop">
                    <Link href={'/'}><Image src="/zappy.webp" width={64}  className="min-w-16" height={64} alt="Brand zappy top left" priority={true} fetchPriority="high"/></Link>
                    <div className="hidden md:flex gap-8 w-full items-center lg:visible pl-4">
                        <Link href={"#section1"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Início</Link>
                        <Link href={"#section2"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Sobre</Link>
                        <Link href={"#section3"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Demonstração</Link>
                        <Link href={"#section4"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Planos</Link>
                    </div>
                    <div className="hidden md:flex gap-3 w-full justify-end items-center">
                        <Link href={"/signUp"} className="border-2 border-foreground-default p-1.5 text-center rounded-md text-foreground-default hover:border-primary hover:text-primary hover:cursor-pointer w-26" aria-label="Botão de cadastro">cadastre-se</Link>
                        <Link href={"/signIn"} className="bg-foreground-default hover:bg-primary text-center hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-26" aria-label="Botão de login">login</Link>
                    </div>
                    <DrawerComponent/>
                </nav>
            </header>

            <main>
                <section className="w-full h-screen flex justify-center items-center pt-14" id="section1">
                <h1>Sessao 1</h1>
                </section>
                <section className="w-full h-screen flex justify-center items-center bg-primary" id="section2">
                <h2>Sessao 2</h2>
                </section>
                <section className="w-full h-screen flex justify-center items-center" id="section3">
                <h2>Sessao 3</h2>
                </section>
                <section className="w-full h-screen flex justify-center items-center bg-primary" id="section4">
                <h2>Sessao 4</h2>
                </section>
            </main>

            <footer className="w-full h-20 bg-blue-800 text-white flex justify-center items-center">
                <p>© 2025 - Todos os direitos reservados</p>
            </footer>

        </div>
    )
}