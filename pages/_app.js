import "../styles/globals.css";
import Layout from "../components/layout";
import React from "react";

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from "wagmi";

import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { infuraProvider } from "wagmi/providers/infura";

function MyApp({ Component, pageProps }) {
  //Wagmi settings
  const { chains, provider, webSocketProvider } = configureChains(
    [chain.polygonMumbai],
    [
      infuraProvider({ apiKey: "78521fe0b9a745588e8715d84a32d941" }),
      publicProvider(),
    ]
  );

  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
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

export default MyApp;
