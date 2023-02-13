import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import Header from '@/components/Header/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="mix of static and dynmic content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={ styles.mainHeight}>
        <h3>hello hedi</h3>
      </main>
    </>
  )
}
