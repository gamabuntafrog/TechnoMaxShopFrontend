import {NextPage} from "next";
import Head from "next/head";

const Basket: NextPage = () => {


    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Техно Макс</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <section>
                    <h1 className='font-bold text-5xl'>Корзина</h1>
                </section>
            </main>
        </div>
    )
}

export default Basket