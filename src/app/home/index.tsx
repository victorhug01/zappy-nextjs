'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react'
import DrawerComponent from "./components/drawer";

export default function HomeClient() {
    const linkAnimation: string = "text-foreground-default hover:text-primary inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 after:origin-bottom-left";

    useEffect(() => {
        let ctx: gsap.Context | undefined;

        const loadGsap = async () => {
            const gsapModule = await import('gsap');
            const scrollTriggerModule = await import('gsap/ScrollTrigger');

            const gsap = gsapModule.default;
            const ScrollTrigger = scrollTriggerModule.default;

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {

                gsap.to(".macbook", {
                    width: "100%",
                    opacity: 1,
                    scrollTrigger: {
                    trigger: '.mackbookAnimation',
                    end: "top 5%",
                    scrub: true,
                    }
                });
                
            });
        };

        loadGsap();

        return () => ctx?.revert();
    }, []);



    return (
        <>
            <header>
                <nav className="w-full h-16 flex bg-background fixed justify-between items-center px-3 overflow-x-hidden z-50" aria-label="Navbar Desktop">
                    <Link href={'/'}><Image src="/zappy.webp" width={64}  className={`min-w-16`} height={64} alt="Brand zappy top left" priority={true} fetchPriority="high"/></Link>
                    <div className={`hidden md:flex gap-8 w-full items-center lg:visible pl-4`}>
                        <Link href={"#home"} className={`${linkAnimation}`}>Início</Link>
                        <Link href={"#section2"} className={`${linkAnimation}`}>Sobre</Link>
                        <Link href={"#section3"} className={`${linkAnimation}`}>Demonstração</Link>
                        <Link href={"#section4"} className={`${linkAnimation}`}>Planos</Link>
                    </div>
                    <div className={`hidden md:flex gap-3 w-full justify-end items-center`}>
                        <Link href={"/signIn"} className="border-2 border-foreground-default p-1.5 text-center rounded-md text-foreground-default hover:border-primary hover:text-primary hover:cursor-pointer w-32" aria-label="Botão de cadastro">Login</Link>
                        <Link href={"/signUp"} className="bg-foreground-default hover:bg-primary text-center hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-1.5 rounded-md hover:cursor-pointer w-32" aria-label="Botão de login">Cadastre-se</Link>
                    </div>
                    <DrawerComponent/>
                </nav>
            </header>

            <main>
                <section className="w-full h-screen flex justify-center items-center pt-14 p-6" id="home">
                    <div className="w-full sm:max-w-3xl flex flex-col items-center justify-center gap-16">
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl text-center text-foreground-default`}>
                            Seu <span className="text-primary">mundo</span>, suas{" "}
                            <span className="text-primary">conexões</span>, e um universo{" "}
                            <span className="text-primary">sem limites</span> para explorar.
                        </h1>
                        <div className={`w-full flex flex-col md:flex-row justify-center gap-4`}>
                            <Link href={"/signUp"} className="font-medium bg-foreground-default hover:bg-primary text-center hover:text-foreground-default text-foreground-inverse border-2 border-foreground-default hover:border-primary p-2.5 rounded-md hover:cursor-pointer w-full" aria-label="Botão de Comece sua jornada">Comece sua jornada</Link>
                            <Link href={"/signIn"} className="font-medium border-foreground-default text-center text-foreground-default hover:border-primary hover:text-primary border-2 hover:cursor-pointer rounded-md p-2.5 w-full" aria-label="Botão de Acesse seu espaço">Acesse seu espaço</Link>
                        </div>  
                    </div>
                </section>

                <section className="w-full h-fit md:h-screen flex justify-center items-start mackbookAnimation" id="section2">
                    <Image src="/mackbook.svg" width={200} height={100} className="lg:max-w-5/6 lg:max-h-5/6 transform translate-y-[-100px] sm:translate-y-[0px] macbook opacity-0" alt="macbook image" priority={false} fetchPriority="low"/>
                </section>
                

                <section className="w-full h-screen flex justify-center items-center bg-primary" id="section3">
                    <h2>Sessao 3</h2>
                </section>

                <section className="w-full h-screen flex justify-center items-center" id="section4">
                    <h2>Sessao 4</h2>
                </section>

            </main>

            <footer className="bg-background text-center">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex justify-center flex-col sm:flex-row sm:justify-between">
                        <div className="flex text-center sm:text-left items-center mb-2 gap-4">
                            <Image src="/zappy.webp" width={80} height={80} alt="macbook image" priority={false} fetchPriority="low"/>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-foreground-default">ZAPPY</span>
                        </div>
                        <ul className="flex flex-wrap justify-center sm:justify-start items-center mb-6 text-sm font-medium text-foreground-default gap-6">
                            <li><Link href={"#"} className={`${linkAnimation}`}>About</Link></li>
                            <li><Link href={"#"} className={`${linkAnimation}`}>Privacy Policy</Link></li>
                            <li><Link href={"#"} className={`${linkAnimation}`}>Licensing</Link></li>
                            <li><Link href={"#"} className={`${linkAnimation}`}>Contact</Link></li>
                        </ul>
                    </div>
                    <hr className="my-6 border-foreground-default" />
                    <span className="block text-sm text-foreground-default">© 2023 ZAPPY™. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}