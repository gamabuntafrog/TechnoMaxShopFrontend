import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Link from "next/link";
import Image from "next/image";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <header className="flex h-24 w-full items-center justify-center border-t">
                <nav>
                    <ul className="flex">
                        <li className="mx-2">
                            <Link href='/'>
                                Головна
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link href='/search'>
                                Пошук
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link href='/basket'>
                                Корзина
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Component {...pageProps} />
            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Футер
                </a>
            </footer>
        </div>
    )
}

export default MyApp
