'use client'

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../components/ui/theme-swicther";

export default function HomeClient() {
    return (
        <div>
            <header>
                <nav className="w-full h-16 flex bg-blue-600 fixed justify-between items-center p-3 overflow-x-hidden" aria-label="navegação principal">
                    <Link href={'/'}><Image src="/next.svg" width={64}  className="min-w-16" height={64} alt="logo do nextjs temporario canto superior esquerdo" priority={true}/></Link>
                    <div className="hidden md:flex gap-8 w-full items-center lg:visible pl-4">
                        <Link href={"#section1"} className="hover:text-white inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Início</Link>
                        <Link href={"#section2"} className="hover:text-white inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Sobre</Link>
                        <Link href={"#section3"} className="hover:text-white inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Demonstração</Link>
                        <Link href={"#section4"} className="hover:text-white inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Planos</Link>
                    </div>
                    <div className="hidden md:flex gap-3 w-full justify-end items-center">
                        <button className="border-2 border-white p-1.5 rounded-md text-white hover:border-gray-400 hover:text-gray-400 hover:cursor-pointer w-26" aria-label="Botão de cadastro">cadastre-se</button>
                        <button className="bg-white border-2 border-white p-1.5 rounded-md hover:cursor-pointer w-26" aria-label="Botão de login">login</button>
                        <ThemeSwitcher/>
                    </div>
                    <Menu className="text-white block md:hidden"/>
                </nav>
            </header>

            <main>
                <section className="w-full h-screen flex justify-center items-center pt-14" id="section1">
                <h1>Sessao 1</h1>
                </section>
                <section className="w-full h-screen flex justify-center items-center bg-blue-500" id="section2">
                <h2>Sessao 2</h2>
                </section>
                <section className="w-full h-screen flex justify-center items-center" id="section3">
                <h2>Sessao 3</h2>
                </section>
                <section className="w-full h-screen flex justify-center items-center bg-blue-500" id="section4">
                <h2>Sessao 4</h2>
                </section>
            </main>

            <footer className="w-full h-20 bg-blue-800 text-white flex justify-center items-center">
                <p>© 2025 - Todos os direitos reservados</p>
            </footer>

        </div>
    )
}