import '../styles/globals.css'
import Layout from '../components/Layout'
import React from 'react'

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { infuraProvider } from 'wagmi/providers/infura'

function MyApp({ Component, pageProps }) {

  //Wagmi settings
  const { chains, provider, webSocketProvider } = configureChains(
    defaultChains,
    [infuraProvider({ apiKey: 'd8d884a3604f45e1b2273b6bd36127de' }),
    publicProvider(),
  ])


  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
    ],
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );

}

export default MyApp
