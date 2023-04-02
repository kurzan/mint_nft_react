import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from '../services/web3config';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider> 
    </WagmiConfig>
  )
}
