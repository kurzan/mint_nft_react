import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Box from '@/components/Box/Box';
import MintDetails from '@/components/MintDetails/MintDetails';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Smoky Cat NFT | MINT </title>
        <meta name="description" content="Mint NFT Smoky Cat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <MintDetails />
      </main>
    </>
  )
}
