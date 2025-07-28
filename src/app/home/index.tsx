'use client'

import gsap from 'gsap';
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect } from 'react'
import DrawerComponent from "./components/drawer";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeClient() {

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".macbook",{
            width: "100%",
            scrollTrigger: {
                trigger: '.mackbookAnimation',
                // markers: true,
                end: "top 80%",
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf('.mackbookAnimation');
        }
    }, [])

    return (
        <div>
            <header>
                <nav className="w-full h-16 flex bg-background fixed justify-between items-center px-3 overflow-x-hidden z-50" aria-label="Navbar Desktop">
                    <Link href={'/'}><Image src="/zappy.webp" width={64}  className="min-w-16" height={64} alt="Brand zappy top left" priority={true} fetchPriority="high"/></Link>
                    <div className="hidden md:flex gap-8 w-full items-center lg:visible pl-4">
                        <Link href={"#home"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Início</Link>
                        <Link href={"#section2"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Sobre</Link>
                        <Link href={"#section3"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Demonstração</Link>
                        <Link href={"#section4"} className="text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left">Planos</Link>
                    </div>
                    <div className="hidden md:flex gap-3 w-full justify-end items-center">
                        <Link href={"/signIn"} className="border-2 border-foreground-default p-1.5 text-center rounded-md text-foreground-default hover:border-primary hover:text-primary hover:cursor-pointer w-32" aria-label="Botão de cadastro">Login</Link>
                        <Link href={"/signUp"} className="bg-foreground-default hover:bg-primary text-center hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-32" aria-label="Botão de login">Cadastre-se</Link>
                    </div>
                    <DrawerComponent/>
                </nav>
            </header>

            <main>
                <section className="w-full h-screen flex justify-center items-center pt-14 p-6" id="home">
                    <div className="w-full sm:max-w-3xl flex flex-col items-center justify-center gap-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-foreground-default">
                            Seu <span className="text-primary">mundo</span>, suas <span className="text-primary">conexões</span>, e um universo <span className="text-primary">sem limites</span> para explorar.
                        </h1>
                        <div className="w-full flex flex-col md:flex-row justify-center gap-4">
                            <Link href={"/signUp"} className="font-medium bg-foreground-default hover:bg-primary text-center hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-2.5 rounded-md hover:cursor-pointer w-full" aria-label="Botão de Comece sua jornada">Comece sua jornada</Link>
                            <Link href={"/signIn"} className="font-medium border-foreground-default text-center text-foreground-default hover:border-primary hover:text-primary border-2 hover:cursor-pointer rounded-md p-2.5 w-full" aria-label="Botão de Acesse seu espaço">Acesse seu espaço</Link>
                        </div>  
                    </div>
                </section>

                <section className="w-full h-fit md:h-screen flex justify-center items-start mackbookAnimation" id="section2">
                    <Image src="/mackbook.svg" width={0} height={0} className="md:max-w-5/6 transform translate-y-[-150px] lg:translate-y-[-50px] macbook" alt="macbook image" priority={true} fetchPriority="high"/>
                </section>
                

                <section className="w-full h-screen flex justify-center items-center bg-primary" id="section3">
                <h2>Sessao 3</h2>
                </section>

                <section className="w-full h-screen flex justify-center items-center" id="section4">
                <h2>Sessao 4</h2>
                </section>

            </main>

            <footer className="w-full h-20 bg-blue-800 text-white flex justify-center items-center">
                <p>© 2025 - Todos os direitos reservados</p>
            </footer>

        </div>
    )
}