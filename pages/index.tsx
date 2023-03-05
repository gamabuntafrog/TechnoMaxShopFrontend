import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import newProducts from '../utils/newProducts.json'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Техно Макс</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="font-bold text-5xl">Головна сторінка</h1>
          <ul>
              {newProducts.map((product) => {

                  return (
                    <li key={product.id}>

                        <Image width={300} height={300} src={product.image} alt={product.title}/>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </li>
                  )
              })}
          </ul>
      </main>

    </div>
  )
}

export default Home
